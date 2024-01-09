# views.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Address, LawyerProfile, LawyerImage, LawyerDocument , ClientProfile
from .serializers import AddressSerializer, LawyerProfileSerializer, LawyerImageSerializer, LawyerDocumentSerializer , ClientProfileSerializer
from django.contrib.auth.models import Group
from django.shortcuts import get_object_or_404


class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer


class LawyerImageViewSet(viewsets.ModelViewSet):
    queryset = LawyerImage.objects.all()
    serializer_class = LawyerImageSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        lawyer_profile_pk = self.kwargs['lawyer_pk']
        context['lawyer_profile_pk'] = lawyer_profile_pk
        return context


class LawyerDocumentViewSet(viewsets.ModelViewSet):
    queryset = LawyerDocument.objects.all()
    serializer_class = LawyerDocumentSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        lawyer_profile_pk = self.kwargs['lawyer_pk']
        context['lawyer_profile_pk'] = lawyer_profile_pk
        return context    


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




