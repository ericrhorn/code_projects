# Generated by Django 2.2 on 2022-08-05 20:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0010_auto_20220805_2030'),
    ]

    operations = [
        migrations.AddField(
            model_name='venue',
            name='event_notes',
            field=models.TextField(default=0, max_length=500),
            preserve_default=False,
        ),
    ]
