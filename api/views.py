from django.shortcuts import render
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer
from .models import Card
from api import serializers

class CardItemDeleteView(APIView): 
    def delete(self, request, pk):
        try:
            item = Card.objects.get(pk=pk, user=request.user)
            item.delete()
            return Response({"message": "Удаленно"}, status=status.HTTP_204_NO_CONTENT)
        except Card.DoesNotExist:
            return Response({"error": "Товар не найден"})
        
class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "успешная регистрация"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)