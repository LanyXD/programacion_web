from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=200)
    isbn = models.CharField(max_length=20, blank=True, null=True)
    published_date = models.DateField(blank=True, null=True)

