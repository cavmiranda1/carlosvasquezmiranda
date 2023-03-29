from django.shortcuts import render

# Create your views here.from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import PersonaSerializers, PaisSerializers, PersonaPaisSerializers
from .models import Persona, Pais
from rest_framework import status
from django.http import Http404
    
class Persona_APIView(APIView):
    def get(self, request, format=None, *args, **kwargs):
        #persona = Persona.objects.all()
        persona = Persona.objects.all().prefetch_related('pais')


        serializer = PersonaPaisSerializers(persona, many=True)
        
        return Response(serializer.data)
    def post(self, request, format=None):
        serializer = PersonaSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class Persona_APIView_Detail(APIView):
    def get_object(self, pk):
        try:
            return Persona.objects.get(pk=pk)
        except Persona.DoesNotExist:
            raise Http404
    def get(self, request, pk, format=None):
        persona = self.get_object(pk)
        serializer = PersonaPaisSerializers(persona)  
        return Response(serializer.data)
    def put(self, request, pk, format=None):
        persona = self.get_object(pk)
        serializer = PersonaSerializers(persona, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, pk, format=None):
        persona = self.get_object(pk)
        if persona == None:
            return Response({"status": "fail", "message": f"Persona with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

        persona.delete()
        return Response({"status": "success", "message": f"Persona with Id: {pk}"})

class Pais_APIView(APIView):
    def get(self, request, format=None, *args, **kwargs):
        pais = Pais.objects.all()
        serializer = PaisSerializers(pais, many=True)
        
        return Response(serializer.data)
    def post(self, request, format=None):
        serializer = PaisSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class Pais_APIView_Detail(APIView):
    def get_object(self, pk):
        try:
            return Pais.objects.get(pk=pk)
        except Pais.DoesNotExist:
            raise Http404
    def get(self, request, pk, format=None):
        pais = self.get_object(pk)
        serializer = PaisSerializers(pais)  
        return Response(serializer.data)
    def put(self, request, pk, format=None):
        pais = self.get_object(pk)
        serializer = PaisSerializers(pais, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, pk, format=None):
        pais = self.get_object(pk)
        pais.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)