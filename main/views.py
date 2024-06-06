from django.http import HttpResponse
from django.shortcuts import render

from goods.models import Categories


def index(request):
    context = {
        'title': 'Main - Основная',
        'content': "Ч<елл> ЗакажЫ!",
    }

    return render(request, 'main/index.html', context)


def about(request):
    context = {
        'title': 'Main - О нас',
        'content': "О нас",
        'text_on_page': "Текст о том почему этот магазин такой классный, вообще не "
    }

    return render(request, 'main/about.html', context)


def contact(request):
    context = {
        'title': 'КОНТАКТЫ',
        'content': "КОНТАКТИКИ",
        'text_on_page': "Текст разрабах сайта"
    }

    return render(request, 'main/contact.html', context)
