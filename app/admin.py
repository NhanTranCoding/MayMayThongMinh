from django.contrib import admin
from .models import Category, Product, Review, ImageMiniProduct
from django import forms
from ckeditor_uploader.widgets import CKEditorUploadingWidget
# Register your models here.

class ImageMiniProductInlines(admin.TabularInline):
    model = ImageMiniProduct
    fk_name = "product"
    # verbose_name = "Các Góc Ảnh Khác"
    extra=4
    
class AppAdminSite(admin.AdminSite):
    site_header = "QUẢN LÍ MÁY MAY CÔNG NGHIỆP"

class ProductForm(forms.ModelForm):
    content = forms.CharField(widget=CKEditorUploadingWidget)
    class Meta:
        model = Product
        fields = '__all__'

class CategoryAdmin(admin.ModelAdmin):
    list_display = ["name", "getTotalProductOfCategory"]

    def getTotalProductOfCategory(self, obj):
        return obj.product.all().count()
    getTotalProductOfCategory.short_description = "Total Products"
class ProductAdmin(admin.ModelAdmin):
    fieldsets = [
        ("Thông Tin Máy", {"fields": ["category", "brand", "product_id", "name", "image", "video", "description"]}),
        ("Giá Máy", {"fields": ["price", "discount_price"]}),
        ("Hiện Trạng Máy", {"fields": ["status", "new_product", "view_product"]}),
        ("Thông số kĩ thuật", {"fields": ["content"]}),

    ]
    list_display = ["name", "brand", "status", "new_product"]
    list_per_page = 8
    list_filter = ["category", "brand", "status"]
    search_fields = ["product_id", "name"]
    ordering = ["-status", "-new_product"]
    inlines = (ImageMiniProductInlines, )
    form = ProductForm
    
class ReviewAdmin(admin.ModelAdmin):
    list_display = ["user", "product", "rate", "created_date"]
    ordering = ["rate", "-created_date", "user"]
    readonly_fields = ["created_date"]
    list_filter = ["rate"]
class ImageMiniProductAmin(admin.ModelAdmin):
    pass

my_admin_site = AppAdminSite("my_sewing")
my_admin_site.register(Category, CategoryAdmin)
my_admin_site.register(Product, ProductAdmin)
my_admin_site.register(Review, ReviewAdmin)