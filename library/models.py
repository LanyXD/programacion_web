from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=200)
    isbn = models.CharField(max_length=20, blank=True, null=True)
    published_date = models.DateField(blank=True, null=True)


class Publisher(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='publishers')
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=50, blank=True)  
