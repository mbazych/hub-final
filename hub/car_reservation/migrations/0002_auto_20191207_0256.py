# Generated by Django 2.2.7 on 2019-12-07 01:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('car_reservation', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carreservation',
            name='active',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='carreservation',
            name='end_date',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='carreservation',
            name='start_date',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='carreservation',
            name='user',
            field=models.ForeignKey(default='michal.bazych', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='CarRentalActive',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('active', models.BooleanField(default=True)),
                ('reservation', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='car_reservation.CarReservation')),
            ],
            options={
                'db_table': 'active_rental',
                'ordering': ['start_date'],
            },
        ),
    ]