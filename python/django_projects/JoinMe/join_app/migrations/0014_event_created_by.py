# Generated by Django 2.2 on 2022-07-25 04:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('join_app', '0013_remove_event_created_by'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='created_by',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, related_name='event_planned', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
