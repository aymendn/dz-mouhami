from django.urls import path
from rest_framework_nested import routers
from . import views
from .views import  LawyerAdminDashboardViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'lawyers', views.LawyerProfileViewSet , basename='lawyer-profile')
router.register(r'clients', views.ClientProfileViewSet, basename='client-profile')
router.register(r'dashboard', views.LawyerAdminDashboardViewSet , basename='lawyer-admin-dashboard')

lawyers_router = routers.NestedDefaultRouter(router, r'lawyers', lookup='lawyer')
lawyers_router.register(r'images', views.LawyerImageViewSet, basename='lawyer-images')
lawyers_router.register(r'documents', views.LawyerDocumentViewSet, basename='lawyer-documents')

lawyers_dashbord = routers.NestedDefaultRouter(router, r'dashboard', lookup='lawyer')




urlpatterns = router.urls + lawyers_router.urls + lawyers_dashbord.urls + [path('lawyer-profile-search/'), views.lawyer_profile_search]


