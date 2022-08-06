# Generated by Django 2.2 on 2022-08-05 20:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0009_auto_20220804_2016'),
    ]

    operations = [
        migrations.RenameField(
            model_name='event',
            old_name='private',
            new_name='private_event',
        ),
        migrations.AddField(
            model_name='venue',
            name='private_venue',
            field=models.BooleanField(default=False),
        ),
    ]
