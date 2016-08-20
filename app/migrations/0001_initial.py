# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-08-20 07:18
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tree',
            fields=[
                ('age', models.IntegerField()),
                ('character_name', models.CharField(max_length=100)),
                ('url', models.URLField()),
                ('latitude', models.FloatField()),
                ('longtitude', models.FloatField()),
                ('chest', models.FloatField()),
                ('height', models.FloatField()),
                ('address', models.CharField(max_length=200)),
                ('id', models.UUIDField(primary_key=True, serialize=False)),
            ],
        ),
    ]