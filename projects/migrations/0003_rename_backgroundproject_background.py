# Generated by Django 4.2 on 2023-09-01 15:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("projects", "0002_backgroundproject"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="BackgroundProject",
            new_name="background",
        ),
    ]