from rest_framework import serializers
from .models import Persona, Pais

class PaisSerializers(serializers.ModelSerializer):
    class Meta:
        model = Pais 
        fields = ('id','nombre_pais','nacionalidad')
        ordering = ["id_pais"]

class PersonaSerializers(serializers.ModelSerializer):

    class Meta:
        model = Persona
        fields = ('id','nombre','nacimiento','pais') 
        ordering = ["id"]

class PersonaPaisSerializers(serializers.ModelSerializer):

    Nacionalidad = PaisSerializers(source="pais")

    class Meta:
        model = Persona
        fields = ('id','nombre','nacimiento','pais_id','Nacionalidad') 
        ordering = ["id"]

