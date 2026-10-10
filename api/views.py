from django.shortcuts import render
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer
from .models import Card

class CardItemDeleteView(APIView): 
    def delete(self, request, pk):
        try:
            item = Card.objects.get(pk=pk, user=request.user)
            item.delete()
            return Response({"message": "Удаленно"}, status=status.HTTP_204_NO_CONTENT)
        except Card.DoesNotExist:
            return Response({"error": "Товар не найден"})