from django.urls import path
from rest_framework_nested import routers
from . import views

router = routers.DefaultRouter()
router.register(r'lawyers', views.LawyerProfileViewSet)
router.register(r'clients', views.ClientProfileViewSet, basename='client-profile')

lawyers_router = routers.NestedDefaultRouter(router, r'lawyers', lookup='lawyer')
lawyers_router.register(r'images', views.LawyerImageViewSet, basename='lawyer-images')
lawyers_router.register(r'documents', views.LawyerDocumentViewSet, basename='lawyer-documents')

urlpatterns = router.urls + lawyers_router.urls
