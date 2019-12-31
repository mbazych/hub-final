# Generated by Django 3.0.1 on 2019-12-31 01:20

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ReservationArchive',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('car', models.CharField(max_length=32)),
                ('start_date', models.DateTimeField()),
                ('gas_state', models.CharField(choices=[('1/4', '1/4'), ('2/4', '2/4'), ('3/4', '3/4'), ('4/4', '4/4')], max_length=3)),
                ('fuel_state', models.CharField(choices=[('1/4', '1/4'), ('2/4', '2/4'), ('3/4', '3/4'), ('4/4', '4/4')], max_length=3)),
                ('end_date', models.DateTimeField(default=datetime.datetime(2019, 12, 31, 2, 20, 19, 881106))),
                ('purpose', models.CharField(max_length=64)),
                ('comment', models.CharField(max_length=32)),
                ('user', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'reservations_archive',
                'ordering': ['end_date'],
            },
        ),
    ]