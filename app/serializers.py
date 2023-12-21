from rest_framework import serializers
from .models import *

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("id", "name")

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    image_mini = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Product
        fields = ('product_id', "name", "discount_price", 
                  "description", "image", "status", "new_product",
                  "view_product", "brand", "content", "category", "image_mini")
