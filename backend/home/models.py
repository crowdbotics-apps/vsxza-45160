from django.conf import settings
from django.db import models


class Organization(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=255,
        unique=True,
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
    )
    updated_at = models.DateTimeField(
        auto_now=True,
    )
