from flask import Flask
import sqlite3

app = Flask('Kryzanivka')

app.config['SECRET_KEY'] = 'test secret key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///kryzanivka.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

from models import db
db.init_app(app)

@app.before_first_request
def create_tables():
    db.create_all()
    with open('init.sql') as f:
        con = sqlite3.connect('kryzanivka.db')
        cur = con.cursor()
        cur.executescript(f.read())



import auth
from views import *

if __name__ == "__main__":
    app.run(debug=True)
