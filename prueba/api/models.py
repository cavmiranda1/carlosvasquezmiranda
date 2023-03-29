from django.db import models
from model_utils.models import TimeStampedModel, SoftDeletableModel

class Pais(TimeStampedModel, SoftDeletableModel):
	nombre_pais 				= models.TextField(max_length=5000, blank=True, null=True)
	nacionalidad 		= models.TextField(max_length=5000, blank=True, null=True)

class Persona(TimeStampedModel, SoftDeletableModel):
	nombre 				= models.TextField(max_length=5000, blank=True, null=True)
	nacimiento 		= models.DateField(blank=True, null=True)
	pais 	= models.ForeignKey(Pais,on_delete=models.CASCADE,  null=False)

	def __str__(self):
		return self.id_persona
