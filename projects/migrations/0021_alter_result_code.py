# Generated by Django 4.2 on 2023-09-04 13:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("projects", "0020_result_code"),
    ]

    operations = [
        migrations.AlterField(
            model_name="result",
            name="code",
            field=models.TextField(blank=True),
        ),
    ]
