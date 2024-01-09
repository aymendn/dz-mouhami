# views.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Address, LawyerProfile, LawyerImage, LawyerDocument , ClientProfile
from .serializers import AddressSerializer, LawyerProfileSerializer, LawyerImageSerializer, LawyerDocumentSerializer , ClientProfileSerializer
from django.contrib.auth.models import Group
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated



@api_view(['GET'])
def IsLoggedIn(request):
    if request.user.is_authenticated:
        return Response({'is-loggedIn': "true"})
    else:
        return Response({'is-loggedIn': 'false'})

class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer



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
    
    serializer_class = LawyerDocumentSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        lawyer_profile_pk = self.kwargs['lawyer_pk']
        context['lawyer_profile_pk'] = lawyer_profile_pk
        return context  

    def get_queryset(self):
        lawyer_profile_pk = self.kwargs['lawyer_pk']
        return LawyerDocument.objects.filter(lawyer_id=lawyer_profile_pk)  


class LawyerProfileViewSet(viewsets.ModelViewSet):
    queryset = LawyerProfile.objects.prefetch_related('images', 'documents').all()
    serializer_class = LawyerProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return LawyerProfile.objects.filter(user=user)

    def perform_create(self, serializer):
        user = self.request.user

        if user.is_authenticated and not user.groups.filter(name='Lawyer').exists():
            group_name = 'Lawyer'
            group, created = Group.objects.get_or_create(name=group_name)
            user.groups.add(group)

        serializer.save(user=user)


class ClientProfileViewSet(viewsets.ModelViewSet):
    queryset = ClientProfile.objects.all()
    serializer_class = ClientProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return ClientProfile.objects.filter(user=user)

    def perform_create(self, serializer):
        user = self.request.user

        serializer.save(user=user)




