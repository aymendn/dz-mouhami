# serializers.py
from rest_framework import serializers
from .models import Address, LawyerProfile, LawyerImage, LawyerDocument , ClientProfile , User

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['id', 'street', 'city', 'state', 'zip_code', 'country']


class LawyerProfileSerializer(serializers.ModelSerializer):
    address = AddressSerializer(required=False, allow_null=True)

    class Meta:
        model = LawyerProfile
        fields = ['id', 'specialization', 'phone_number', 'bio', 'language', 'address']

    def create(self, validated_data):
        address_data = validated_data.pop('address', None)

        if address_data:
            address = Address.objects.create(**address_data)
            validated_data['address'] = address

        lawyer = LawyerProfile.objects.create(**validated_data)

        return lawyer


class LawyerImageSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        lawyer_profile_pk = self.context['lawyer_profile_pk']
        return LawyerImage.objects.create(lawyer_id=lawyer_profile_pk, **validated_data)

    class Meta:
        model = LawyerImage
        fields = ['id', 'image']


class LawyerDocumentSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        lawyer_profile_pk = self.context['lawyer_profile_pk']
        return LawyerDocument.objects.create(lawyer_id=lawyer_profile_pk, **validated_data)

    class Meta:
        model = LawyerDocument
        fields = ['id', 'pdf_file']


class ClientProfileSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    address = AddressSerializer(required=False, allow_null=True)

    class Meta:
        model = ClientProfile
        fields = ['id', 'user', 'age', 'gender', 'phone_number', 'address']

    def create(self, validated_data):
        address_data = validated_data.pop('address', None)

        if address_data:
            address = Address.objects.create(**address_data)
            validated_data['address'] = address

        client_profile = ClientProfile.objects.create(**validated_data)
        return client_profile

