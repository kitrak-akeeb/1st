from rest_framework import serializers
from .models import Article
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework.authtoken.views import Token


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title','description')



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id','username','password']

        extra_kwargs={"password":{'write_only' :True,
                                  'required':True}}

    def create(self,validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

    # def create(self, validated_data,user):
    #
    #     password = validated_data.pop('password', None)
    #     instance = self.Meta.model(**validated_data)
    #     Token.objects.create(user)
    #     if password is not None:
    #         instance.set_password(password)
    #     instance.save()
    #     return instance