# views.py

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Address, LawyerProfile, LawyerImage, LawyerDocument , ClientProfile , User , TimeSlot , Review
from .serializers import AddressSerializer, LawyerProfileSerializer, LawyerImageSerializer, LawyerDocumentSerializer , ClientProfileSerializer , TimeSlotSerializer
from django.contrib.auth.models import Group
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from rest_framework.pagination import PageNumberPagination
from allauth.socialaccount.models import SocialAccount, SocialToken
from rest_framework import generics, permissions
from .models import LawyerProfile, Appointment
from .serializers import UserSerializer
from django.contrib.auth.models import User
from .serializers import LawyerProfileAdminListSerializer
from django.utils import timezone
from django.db.models import Q

from allauth.socialaccount.models import SocialAccount
from rest_framework import status
from rest_framework.exceptions import PermissionDenied
from rest_framework.exceptions import NotFound
from django.db.models import Avg


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_info_from_google_token(request):
    google_token = request.data.get('google_token', None)

    if not google_token:
        return Response({'error': 'Google token not provided'}, status=400)

    try:
        social_account = SocialAccount.objects.get(token=google_token, provider='google')

        user_profile = social_account.user.userprofile  

        user_info = {
            'username': user_profile.user.username,
            'email': user_profile.user.email,
            'first_name': user_profile.user.first_name,
            'last_name': user_profile.user.last_name,
        }

        return Response(user_info, status=200)

    except SocialAccount.DoesNotExist:
        return Response({'error': 'Invalid Google token'}, status=400)




# class GoogleAccessTokenView(APIView):
#     permission_classes = [IsAuthenticated]

#     def get(self, request, *args, **kwargs):
#         try:
#             google_account = SocialAccount.objects.get(user=request.user, provider='google')
#             google_token = google_account.socialtoken_set.get()
#             access_token = str(google_token.token)  # Convert the SocialToken to a string
#             return Response({'access_token': access_token})
#         except SocialAccount.DoesNotExist:
#             return Response({'error': 'No linked Google account for the user.'}, status=404)
#         except SocialToken.DoesNotExist:
#             return Response({'error': 'No Google access token found for the user.'}, status=404)
#         except Exception as e:
#             return Response({'error': f'An error occurred: {str(e)}'}, status=500)



class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer

class TimeSlotViewSet(viewsets.ModelViewSet):
    queryset = TimeSlot.objects.all()
    serializer_class = TimeSlotSerializer



class LawyerImageViewSet(viewsets.ModelViewSet):
    serializer_class = LawyerImageSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        lawyer_profile_pk = self.kwargs['lawyer_pk']
        context['lawyer_profile_pk'] = lawyer_profile_pk
        return context
    
    def get_queryset(self):
        lawyer_profile_pk = self.kwargs['lawyer_pk']
        return LawyerImage.objects.filter(lawyer_id=lawyer_profile_pk)



class LawyerDocumentViewSet(viewsets.ModelViewSet):
    queryset = LawyerDocument.objects.all()
    serializer_class = LawyerDocumentSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        lawyer_profile_pk = self.kwargs['lawyer_pk']
        context['lawyer_profile_pk'] = lawyer_profile_pk
        return context    

    def get_queryset(self):
        ##
        lawyer_profile_pk = self.kwargs['lawyer_pk']
        return LawyerDocument.objects.filter(lawyer_id=lawyer_profile_pk)  


class LawyerProfileViewSet(viewsets.ModelViewSet):
    queryset = LawyerProfile.objects.prefetch_related('images', 'documents').all()
    serializer_class = LawyerProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return LawyerProfile.objects.filter(user=user, approved=True)

    def perform_create(self, serializer):
        user = self.request.user

        # Check if the user is a client
        if ClientProfile.objects.filter(user=user).exists():
            raise PermissionDenied('Clients cannot create a lawyer profile')

        # Check if a lawyer profile already exists for the user
        if LawyerProfile.objects.filter(user=user).exists():
            raise PermissionDenied('Lawyer profile already exists for the user')

        # Save the lawyer profile
        serializer.save(user=user)

        # Add the user to the 'Lawyer' group
        if user.is_authenticated and not user.groups.filter(name='Lawyer').exists():
            group_name = 'Lawyer'
            group, created = Group.objects.get_or_create(name=group_name)
            user.groups.add(group)

        return Response(serializer.data, status=status.HTTP_201_CREATED)


    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()

        # Check if the lawyer profile is approved
        if not instance.approved:
            raise NotFound('Lawyer profile not found or not approved.')

        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    
    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)

        # Calculate and include the rating information in the serialized response
        data = serializer.data
        for item in data:
            lawyer_id = item['id']
            rating = Review.objects.filter(lawyer__id=lawyer_id).aggregate(Avg('rating'))['rating__avg']
            item['rating'] = rating

        return Response(data)


            


class ClientProfileViewSet(viewsets.ModelViewSet):
    queryset = ClientProfile.objects.all()
    serializer_class = ClientProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if LawyerProfile.objects.filter(user=user).exists():
            raise PermissionDenied('Lawyers cannot see a client profile')
        else:
            return ClientProfile.objects.filter(user=user)

    def perform_create(self, serializer):
        user = self.request.user
        if LawyerProfile.objects.filter(user=user).exists():
            raise PermissionDenied('Lawyers cannot create a client profile')

        if ClientProfile.objects.filter(user=user).exists():
            raise PermissionDenied('Client profile already exists for the user')
        else:
            serializer.save(user=user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
            


class LawyerAdminDashboardViewSet(viewsets.ModelViewSet):
    queryset = LawyerProfile.objects.prefetch_related('images', 'documents').all()
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]
    serializer_class = LawyerProfileAdminListSerializer

    def create(self, request, *args, **kwargs):
        return Response({'error': 'Method Not Allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


class CustomPageNumberPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 100

@api_view(['GET'])
def lawyer_profile_search(request):
    query = request.GET.get('query', '')
    categories = request.GET.getlist('categories')
    days = request.GET.getlist('days')

    rating = request.GET.get('rating', '')

    search_results = LawyerProfile.objects.filter(approved=True)

    if query :
        lawyer_filter = (
            Q(user__first_name__icontains = query)
        )
        address_filter = (
            Q(address__street__icontains = query) |
            Q(address__city__icontains = query) |
            Q(address__state__icontains = query) |
            Q(address__country__icontains = query)
        )

        search_results = search_results.filter(lawyer_filter | address_filter)
    
    if days != ['']:
        day_filter = Q()
        for day in days:
            day_filter |= Q(time_slots__day__iexact=day)
        search_results = search_results.filter(day_filter)
    
    if categories != [''] :
        category_filter = Q()
        for category in categories:
            category_filter |= Q(specialization__iexact=category)
        search_results = search_results.filter(category_filter)

    if rating:
        search_results = search_results.filter(rating__gte=rating)
        
    paginator = CustomPageNumberPagination()
    search_results = search_results.order_by('-rating',)

    paginated_results = paginator.paginate_queryset(search_results, request)
    
    serialized_results = LawyerProfileSerializer(paginated_results, many=True).data

    return Response({'search_results': serialized_results})

@api_view(['GET'])
def lawyer_profile_content(request):
    lawyer_id = request.GET.get('lawyer_id')
    lawyer_profile = get_object_or_404(LawyerProfile, id=lawyer_id)
    serializer = LawyerProfileSerializer(lawyer_profile)
    return Response(serializer.data)


def schedule_appointment(request):
    if request.user.is_authenticated and hasattr(request.user,'clientprofile'):
        lawyer_id = request.POST.get('lawyer_id')
        client_id = request.user.id
        time_slot_id = request.POST.get('time_slot_id')

        client_profile = ClientProfile.objects.get(id=client_id)
        lawyer_profile = LawyerProfile.objects.get(id=lawyer_id)
        time_slot = TimeSlot.objects.get(id=time_slot_id, lawyer_id=lawyer_id)

        existing_appointment = Appointment.objects.filter(
            time_slot_id=time_slot_id,
            client_id=client_id
        ).first()
        if existing_appointment:
            return {"success": False, "message": "Appointment already exists for this time slot."}

        appointment = Appointment.objects.create(
            time_slot=time_slot,
            lawyer=lawyer_profile,
            client=client_profile,
            status="Pending"
        )

        return {"success": True, "message": "Appointment created."}
    else :
        return {"success": False, "message": "You need to login first."}