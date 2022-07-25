# Generated by Django 2.2 on 2022-07-24 22:01

from django.db import migrations, models
import join_app.models


class Migration(migrations.Migration):

    dependencies = [
        ('join_app', '0008_auto_20220724_2120'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='hide_email',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='user',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='user',
            name='is_admin',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='user',
            name='is_staff',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='user',
            name='is_superuser',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='user',
            name='profile_image',
            field=models.ImageField(blank=True, default=join_app.models.get_default_profile_image, max_length=255, null=True, upload_to=join_app.models.get_profile_image_filepath),
        ),
    ]