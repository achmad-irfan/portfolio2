# Generated by Django 4.2 on 2023-09-02 07:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("projects", "0012_recommendation_insight"),
    ]

    operations = [
        migrations.AddField(
            model_name="purpose",
            name="heading",
            field=models.TextField(blank=True),
        ),
    ]
