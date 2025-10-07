from django.db import models

class Publisher(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=50, blank=True)

class Edition(models.Model):
    edition_number = models.PositiveIntegerField()
    format = models.CharField(max_length=50, blank=True)
    pages = models.PositiveIntegerField(blank=True, null=True)

class Author(models.Model):
    name = models.CharField(max_length=100)
    birth_year = models.PositiveIntegerField(blank=True, null=True)

class Book(models.Model):
    title = models.CharField(max_length=200)
    isbn = models.CharField(max_length=20, blank=True, null=True)
    published_date = models.DateField(blank=True, null=True)
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name='books', null=True)
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE, related_name='books', null=True)
    edition = models.ForeignKey(Edition, on_delete=models.CASCADE, related_name='books', null=True)
