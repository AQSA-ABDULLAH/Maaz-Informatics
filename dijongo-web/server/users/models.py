# from django.db import models

# Create your models here.
# myapp/models.py

from django.db import models

class TestModel(models.Model):
    name = models.CharField(max_length=100)
    value = models.IntegerField()
