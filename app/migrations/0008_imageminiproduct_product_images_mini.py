# Generated by Django 4.2.6 on 2023-12-01 06:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0007_alter_review_created_date"),
    ]

    operations = [
        migrations.CreateModel(
            name="ImageMiniProduct",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("image", models.ImageField(upload_to="product_mini")),
            ],
        ),
        migrations.AddField(
            model_name="product",
            name="images_mini",
            field=models.ManyToManyField(
                blank=True, null=True, to="app.imageminiproduct"
            ),
        ),
    ]
