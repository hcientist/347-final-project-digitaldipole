# Generated by Django 4.2.11 on 2024-04-11 04:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('calculators', '0008_remove_variable_val_variable_value'),
    ]

    operations = [
        migrations.AlterField(
            model_name='variable',
            name='value',
            field=models.FloatField(blank=True, default=None, help_text='value', null=True),
        ),
    ]
