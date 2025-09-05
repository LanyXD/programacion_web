from django.db import models

# Create your models here.
class Patients(models.Model):
    name = models.CharField(max_length=20)
    surname = models.CharField(max_length=30, default='')
    create_time = models.DateField(auto_now=True)
