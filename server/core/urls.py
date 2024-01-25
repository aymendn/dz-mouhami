from django.urls import path
from rest_framework_nested import routers
from . import views
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'lawyers', views.LawyerProfileViewSet , basename='lawyer-profile')
router.register(r'clients', views.ClientProfileViewSet, basename='client-profile')
router.register(r'dashboard', views.LawyerAdminDashboardViewSet , basename='lawyer-admin-dashboard')
router.register(r'lawyer-search', views.LawyerSearchViewSet, basename='lawyer-search')

lawyers_router = routers.NestedDefaultRouter(router, r'lawyers', lookup='lawyer')
lawyers_router.register(r'images', views.LawyerImageViewSet, basename='lawyer-images')
lawyers_router.register(r'documents', views.LawyerDocumentViewSet, basename='lawyer-documents')
lawyers_router.register(r'appointments', views.AppointmentLawyerModelViewSet, basename='lawyer-appointments')


lawyers_dashbord = routers.NestedDefaultRouter(router, r'dashboard', lookup='lawyer')

lawyers_view = routers.NestedDefaultRouter(router, r'lawyer-search', lookup='lawyer')
lawyers_view.register(r'appointments', views.AppointmentClientModelViewSet, basename='appointments')
lawyers_view.register(r'reviews', views.ReviewViewSet, basename='lawyer-reviews')

urlpatterns = router.urls + lawyers_router.urls + lawyers_dashbord.urls + lawyers_view.urls


# ----------------------------------test samy ------------------------------
from .views import GoogleOAuth2SignUpView,GoogleOAuth2SignUpCallbackView,GoogleOAuth2LoginView,GoogleOAuth2LoginCallbackView

urlpatterns = urlpatterns + [
path("signup/", GoogleOAuth2SignUpView.as_view(), name="google_signup"),
    path(
        "google/callback/signup",
        GoogleOAuth2SignUpCallbackView.as_view(),
        name="google_signup_callback",
    ),
    path("login/", GoogleOAuth2LoginView.as_view(), name="google_login"),
    path(
        "google/callback/login",
        GoogleOAuth2LoginCallbackView.as_view(),
        name="google_login_callback",
    ),
]
# [path('home/', views.HomeView.as_view(), name ='home')]



