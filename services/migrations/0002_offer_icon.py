# Generated by Django 4.2 on 2023-08-28 13:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("services", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="offer",
            name="icon",
            field=models.ImageField(blank=True, upload_to=""),
        ),
    ]
