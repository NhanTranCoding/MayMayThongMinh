# Generated by Django 4.2.6 on 2023-11-24 09:53

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0003_alter_product_category"),
    ]

    operations = [
        migrations.AddField(
            model_name="product",
            name="content",
            field=ckeditor.fields.RichTextField(default=None),
        ),
        migrations.DeleteModel(name="TechnicalSpecification",),
    ]