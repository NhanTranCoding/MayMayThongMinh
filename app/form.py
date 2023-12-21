from django import forms
from .models import Review

class ProductViewForm(forms.ModelForm):
    comment = forms.CharField(widget=forms.Textarea(attrs={"placeholder": "Comment Here"}))
    class Meta:
        model = Review
        fields = ['user', 'comment', 'rate']
