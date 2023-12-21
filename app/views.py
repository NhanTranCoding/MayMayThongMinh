from django.shortcuts import render, redirect
from django.views import View
from .models import Product, Review, ImageMiniProduct
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.shortcuts import render
from rest_framework import generics
from .serializers import ProductSerializer
#create API View

class ProductListAPIView(generics.ListCreateAPIView):
    # pagination_class = CustomPagination
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    

# Create your views here.
def home(request):
    context = {
        "nav_page": "home_page"
    }
    return render(request, "app/index.html", context=context)
class ProductsView(View):
    def get(self, request):
        products = Product.objects.all()
        items_per_page = 8
        paginator = Paginator(products, items_per_page)
        page = request.GET.get('page')
        try:
            products = paginator.get_page(page)
        except PageNotAnInteger:
            products = paginator.get_page(1)
        except EmptyPage:
            products = paginator.get_page(paginator.num_pages)
        context = {'products': products,
                   'nav_page': 'product_page'
                    }
        return render(request, "app/products.html", context=context)
class ProductDetailsView(View):
    def get(self, request, product_id):
        product_id = str(product_id)
        product = Product.objects.get(pk=product_id)
        product.view_product += 1
        product.save()
        products_related = Product.objects.exclude(name = product.name).filter(brand = product.brand)
        products_related_count = products_related.count()
        if products_related_count < 8:
            additional_products_count = 8 - products_related_count
            additional_products =  Product.objects.exclude(name = product.name).exclude(brand = product.brand)
            products_related = list(products_related) + list(additional_products[:additional_products_count + 1])

        reviews = list(Review.objects.filter(product__product_id=product_id).order_by('-rate', '-created_date'))
        for i in range(len(reviews)):
            reviews[i].rate = reviews[i].rate * ['*']


        list_image_mini = ImageMiniProduct.objects.filter(product__product_id=product_id)
            
        context = {'product': product,
                   'products_related': products_related, 
                   'list_image_mini': list_image_mini,
                   'reviews': reviews, 
                   'max_rate': 5, 
                   "nav_page": "product_page"
                  }
        return render(request, "app/product_details.html", context=context)

def review(request):
    if request.method == "GET":
        product_id = request.GET.get('product_id')
        product = Product.objects.get(pk=product_id)
        user = request.GET.get('user')
        comment = request.GET.get('comment')
        rate = request.GET.get('rate')
        
        if Review.objects.filter(user=user).count() > 0 and Review.objects.filter(product__product_id=product_id).count() > 0:
            Review.objects.filter(user=user).delete()

        Review.objects.create(product=product, user=user, comment=comment, rate=rate)
    return redirect("product_details", product_id=product_id)
def searchProduct(request):
    if request.method == "GET":
        searchName = request.GET.get("search_prod")
        if searchName == "":
            return redirect("products")
        else:
            products_brand = Product.objects.filter(brand__icontains=searchName)
            products_name =Product.objects.filter(name__icontains=searchName)

            if products_name.count() == 0 and products_brand.count() == 0:
                context = {"products": []}
            elif products_name.count() > products_brand.count():
                context = {"products": products_name}
            else:
                context = {"products": products_brand}
            context[ "nav_page"] = "product_page"
            
    return render(request, "app/search.html", context=context)
