# Generated by Django 2.2 on 2022-07-24 23:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('join_app', '0010_auto_20220724_2308'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='is_anonymous',
        ),
        migrations.RemoveField(
            model_name='user',
            name='is_authenticated',
        ),
        migrations.AddField(
            model_name='user',
            name='last_login',
            field=models.DateTimeField(blank=True, null=True, verbose_name='last login'),
        ),
    ]
