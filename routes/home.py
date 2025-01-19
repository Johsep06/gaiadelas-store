from flask import Blueprint, render_template

home_route = Blueprint('home', __name__)

@home_route.route('/')
def home():
    return render_template('index.html')

@home_route.route('/header')
def header():
    return render_template('header.html')