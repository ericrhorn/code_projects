# Generated by Django 2.2 on 2022-08-04 19:24

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('event', '0003_remove_event_created_by'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='host',
        ),
        migrations.AddField(
            model_name='event',
            name='created_by',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, related_name='event_planned_by', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
