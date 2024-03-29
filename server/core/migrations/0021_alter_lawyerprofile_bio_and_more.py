# Generated by Django 5.0 on 2024-01-26 15:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0020_review_image_alter_lawyerprofile_approved_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="lawyerprofile",
            name="bio",
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name="lawyerprofile",
            name="phone_number",
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name="lawyerprofile",
            name="specialization",
            field=models.CharField(max_length=1000),
        ),
    ]
