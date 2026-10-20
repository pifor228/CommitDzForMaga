from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Card
from .serializers import RegisterSerializer


class CardItemDeleteView(APIView):
    def delete(self, request, pk):
        try:
            item = Card.objects.get(pk=pk)
            item.delete()
            return Response({"message": "Удалено"}, status=status.HTTP_204_NO_CONTENT)
        except Card.DoesNotExist:
            return Response({"error": "Товар не найден"}, status=status.HTTP_404_NOT_FOUND)


class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "успешная регистрация"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProtectedDataView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            "message": "доступ разрешён",
            "user": request.user.username,
        }, status=status.HTTP_200_OK)