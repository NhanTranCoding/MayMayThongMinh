from django.contrib import admin
from django.urls import path
from .views import home, review, searchProduct
from.views import ProductsView, ProductDetailsView, ProductListAPIView
from .admin import my_admin_site
from django.conf.urls.static import static
from django.conf import settings   
from django.views.generic import TemplateView 
urlpatterns = [
    path("admin/", my_admin_site.urls),
    path("", home, name="home"),
    path("products/", ProductsView.as_view(), name="products"),
    path("products/product_details/<str:product_id>", ProductDetailsView.as_view(), name="product_details"),
    path("review/", review, name="review"),
    path("search/", searchProduct, name="search"),
    path("productsAPI/", ProductListAPIView.as_view(), name="api"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
