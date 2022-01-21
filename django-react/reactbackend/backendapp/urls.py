
from django.urls import path, include
# from .views import List,Details
from .views import ArticleViewSet,UserViewSet
from rest_framework.routers import DefaultRouter



router= DefaultRouter()
router.register('articles',ArticleViewSet,basename='articles')
router.register('users',UserViewSet,basename='articles')


urlpatterns = [
    path('api/',include(router.urls)),
    # path('list/',List.as_view()),
    # path('details/<int:id>/',Details.as_view()),


]