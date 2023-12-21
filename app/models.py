from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from ckeditor.fields import RichTextField
from django.utils.translation import gettext_lazy as _

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100, null=False, unique=True)

    def __str__(self) -> str:
        return self.name
    
class Product(models.Model):
    class Brand(models.TextChoices):
        BROTHER = 'B', _('BROTHER')
        SINGER = 'S', _('SINGER')
        JUKI = 'J', _('JUKI')
        JANOME = 'JA', _('JANOME')
        RICCAR = 'R', _('RICCAR')
        JAGUAR = 'JAR', _('JAGUAR')
    product_id = models.CharField(primary_key=True, max_length=30)
    name = models.CharField(max_length=100, null=False, unique=True)
    price = models.IntegerField(null=False, default=1000000, validators=[MinValueValidator(0), MaxValueValidator(100000000000)])
    discount_price = models.IntegerField(null=True, default=0)
    description = models.TextField(max_length=1000, null=True, blank=True)
    image = models.ImageField(upload_to="product")
    video = models.FileField(upload_to="video/%y", null=True, blank=True)
    status = models.BooleanField(null=False, blank=False, default=True)
    new_product = models.BooleanField(null=False, blank=False, default=True)    
    view_product = models.IntegerField(null=True,blank=True, default=0)
    brand = models.CharField(max_length=50, null=False, blank=False, choices=Brand.choices)
    content = RichTextField( default=None, null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name="product")

    @property
    def price_currency(self):
        return self.price - self.discount_price

    def __str__(self) -> str:
        return self.name
    
class ImageMiniProduct(models.Model):
    product = models.ForeignKey(Product, related_name="image_mini", on_delete=models.SET_NULL, null=True, default=None)
    image = models.ImageField(upload_to="product")
    class Meta:
        verbose_name_plural = "Các Góc Ảnh Khác"
        verbose_name = "Các Góc Ảnh Khác"
class Review(models.Model):
    product = models.ForeignKey(Product, on_delete= models.CASCADE)
    user = models.CharField(max_length=50, null=False, blank=False)
    comment = models.TextField(max_length=250, null=True, blank=True)
    rate = models.IntegerField(default=5)
    created_date = models.DateTimeField(auto_now_add=True, null=True, blank=True)

    def __str__(self):
        return str(self.id)


    
    
   

    

