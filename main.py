from flask import Flask

from routes.home import home_route
from routes.login import login_route

app = Flask(__name__)

app.register_blueprint(home_route)
app.register_blueprint(login_route, prefix='login')

if __name__ == '__main__':
    app.run(debug=True)