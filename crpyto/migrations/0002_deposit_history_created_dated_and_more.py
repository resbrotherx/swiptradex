# Generated by Django 4.1 on 2022-08-23 16:30

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('crpyto', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='deposit_history',
            name='created_dated',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='usermembership',
            name='item_created_dated',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='withdraw_request',
            name='created_dated',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='membership',
            name='membership_type',
            field=models.CharField(choices=[('Elite', 'Elite'), ('Platinum', 'Platinum'), ('Gold', 'Gold'), ('Silver', 'Silver'), ('Basic', 'Basic'), ('Speacial', 'Speacial')], default='Basic', max_length=30),
        ),
    ]