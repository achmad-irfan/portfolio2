# Generated by Django 4.2 on 2023-08-28 14:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("services", "0002_offer_icon"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="offer",
            name="icon",
        ),
    ]