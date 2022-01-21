import mixins as mixins
from rest_framework.generics import GenericAPIView

from .models import Article
from .serializers import ArticleSerializer ,UserSerializer
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
# from rest_framework.decorators import APIView
# from rest_framework import generics
from rest_framework import mixins
# from rest_framework import Generic
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User



# Create your views here.


class ArticleViewSet(viewsets.GenericViewSet,mixins.ListModelMixin,mixins.CreateModelMixin,mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin):
    queryset =Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication,)

class UserViewSet(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class=UserSerializer






















# GenericAPIView
'''
class List(generics.GenericAPIView,mixins.ListModelMixin,mixins.CreateModelMixin):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def get(self,request):
        return self.list(request)

    def post(self,request):
        return self.create(request)



class Details(generics.GenericAPIView,mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    lookup_field = 'id'

    def get(self,request,id):
        return self.retrieve(request,id=id)

    def put(self,request,id):
        return self.update(request,id=id)

    def delete(self,request,id):
        return self.destroy(request,id=id)
'''


















































# classbased views

#     def get(self,request):
#         article= Article.objects.all()
#         serializers = ArticleSerializer(article,many=True)
#         return Response(serializers.data)
#
#
#
#
#     def post(self,request):
#         serializer = ArticleSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data,status=status.HTTP_201_CREATED)
#         return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
#
#
#
# class Details(APIView):
#
#     def get_object(self,id):
#         try:
#             return Article.objects.get(id = id)
#
#         except Article.DoesNotExist:
#             return HttpResponse(status=status.HTTP_404_NOT_FOUND)
#
#     def get(self,request,id):
#         article=self.get_object(id)
#         serializer=ArticleSerializer(article)
#         return Response(serializer.data)
#
#
#     def put(self,request,id):
#         article=self.get_object(id)
#
#         serializer = ArticleSerializer(article,data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
#
#     def delete(self,id):
#         article=self.get_object(id)
#         article.delete()
#         return HttpResponse(status=status.HTTP_204_NO_CONTENT)
#




