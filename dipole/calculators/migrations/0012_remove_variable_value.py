# Generated by Django 4.2.11 on 2024-04-19 21:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('calculators', '0011_equation_simple_repr'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='variable',
            name='value',
        ),
    ]