# Generated by Django 5.0 on 2024-01-26 08:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0018_remove_appointment_day_remove_appointment_end_time_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lawyerimage',
            name='lawyer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='image', to='core.lawyerprofile'),
        ),
    ]
