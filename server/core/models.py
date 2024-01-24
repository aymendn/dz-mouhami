from django.db import models
from django.core.validators import FileExtensionValidator
from django.contrib.auth.models import User
from django.contrib import admin
from django.utils import timezone
# Address model
class Address(models.Model):
    street = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zip_code = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    latitude = models.DecimalField(max_digits=10, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(max_digits=10, decimal_places=6, null=True, blank=True)

# ClientProfile model, using OneToOneField for a one-to-one relationship with User
class ClientProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    age = models.IntegerField()
    gender = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)
    address = models.ForeignKey(Address, on_delete=models.CASCADE , related_name='client_address')

    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name}'
    
    @admin.display(ordering='user__first_name')
    def first_name(self):
        return self.user.first_name

    @admin.display(ordering='user__last_name')
    def last_name(self):
        return self.user.last_name

    class Meta:
        ordering = ['user__first_name', 'user__last_name']

# LawyerProfile model, using OneToOneField for a one-to-one relationship with User
class LawyerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    specialization = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)
    bio = models.CharField(max_length=255)
    address = models.ForeignKey(Address, on_delete=models.CASCADE , related_name='lawyer_address')
    language = models.CharField(max_length=255)
    approved = models.BooleanField(default=False)
    rating = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name}'
    
    @admin.display(ordering='user__first_name')
    def first_name(self):
        return self.user.first_name

    @admin.display(ordering='user__last_name')
    def last_name(self):
        return self.user.last_name

    class Meta:
        ordering = ['user__first_name', 'user__last_name']
    


# Administrator model, using OneToOneField for a one-to-one relationship with User
class Administrator(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

# TimeSlot model
class TimeSlot(models.Model):
    day = models.CharField(max_length=255)
    start_time = models.TimeField()
    end_time = models.TimeField()
    lawyer = models.ForeignKey(LawyerProfile, on_delete=models.CASCADE , related_name='time_slots')

# Appointment model
class Appointment(models.Model):
    time_slot = models.ForeignKey(TimeSlot, on_delete=models.CASCADE)
    lawyer = models.ForeignKey(LawyerProfile, on_delete=models.CASCADE)
    client = models.ForeignKey(ClientProfile, on_delete=models.CASCADE)
    date = models.DateField(default=timezone.now)
    status = models.CharField(max_length=255)

# Review model
class Review(models.Model):
    lawyer = models.ForeignKey(LawyerProfile, on_delete=models.CASCADE)
    client = models.ForeignKey(ClientProfile, on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.CharField(max_length=255)
    date = models.DateField()

# LawyerDocument model
class LawyerImage(models.Model):
    lawyer = models.ForeignKey(LawyerProfile, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='core/images', blank=True, null=True)

    def __str__(self):
        return f"Image for {self.lawyer.user.username}"


class LawyerDocument(models.Model):
    lawyer = models.ForeignKey(LawyerProfile, on_delete=models.CASCADE, related_name='documents')
    pdf_file = models.FileField(upload_to='core/docs', validators=[FileExtensionValidator(['pdf'])])

    def __str__(self):
        return f"Document for {self.lawyer.user.username}"

