from django.contrib import admin
from .models import LawyerProfile

@admin.register(LawyerProfile)
class LawyerProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'specialization', 'phone_number', 'address', 'language', 'approved']
    list_filter = ['approved']
    search_fields = ['user__first_name', 'user__last_name', 'user__email']

    @admin.display(ordering='user__first_name')
    def first_name(self, obj):
        return obj.user.first_name

    @admin.display(ordering='user__last_name')
    def last_name(self, obj):
        return obj.user.last_name

    def get_queryset(self, request):
        return super().get_queryset(request).select_related('user')

    class Meta:
        ordering = ['user__first_name', 'user__last_name']
