# Generated by Django 2.2 on 2022-07-19 22:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('join_app', '0003_remove_user_user_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='user_name',
            field=models.CharField(default=0, max_length=50),
            preserve_default=False,
        ),
    ]