import os
from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///med.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'test secret key'

db = SQLAlchemy(app)


from forms import *
from models import *



@app.route('/', methods=['GET', 'POST'])
def test_create():
    form = MyForm(request.form)
    if request.method == 'POST' and form.validate():
        p_id = request.form['procedure_id']
        print(p_id)
        result = Appointment.query.filter(Appointment.procedure_id==p_id)
        return render_template('result.html',
            appointments = result )
    else:
        return render_template('form.html', form=form)

if __name__ == "__main__":
    app.run(debug=True)
