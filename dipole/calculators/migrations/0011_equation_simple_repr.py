# Generated by Django 4.2.11 on 2024-04-16 21:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('calculators', '0010_variable_html_symbol'),
    ]

    operations = [
        migrations.AddField(
            model_name='equation',
            name='simple_repr',
            field=models.TextField(default='', help_text='SymPy representation of this equation with simple variables'),
        ),
    ]
