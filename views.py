from flask import render_template, request
from sqlalchemy.exc import IntegrityError
from datetime import datetime,timedelta
import flask_login

from app import app
from models import *



def form_handler(request):
    service_name = request.form['service_name']
    date  = request.form['date']
    time = request.form['time']
    first_name = request.form['first_name']
    second_name = request.form['second_name']
    user_phone = request.form['user_phone']
    timestamp = datetime.strptime(f'{date} {time}', '%Y-%m-%d %H:%M')
    service = Service.query.filter_by(name = service_name).first()

    is_booked = Appointment.query.filter(
                    Appointment.service_id == service.id,
                    Appointment.date >= timestamp,
                    Appointment.date <= timestamp + timedelta(hours=1)
                ).first()

    if is_booked:
        return '{"status":false}'

    client = Client.query.filter_by(
                            name=first_name,
                            surname=second_name,
                            phone=user_phone).first()
    if client is None:
        client = Client(name=first_name,
                        surname=second_name,
                        phone=user_phone)   

    appm = Appointment(client=client,
                           service=service,
                           date=timestamp)

    db.session.add(appm)
    db.session.commit()

    return '{"status":true}'


@app.route('/index')
@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        return form_handler(request)
    else:
        return render_template('index.html')


@app.route('/about')
def about():
    return render_template('about.html')  



@app.route('/sale')
def sale():
    return render_template('sale.html')   



@app.route('/contacts',methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        first_name = request.form['first_name']
        second_name = request.form['second_name']
        user_phone = request.form['user_phone']

        client = Client(name=first_name,
                        surname=second_name,
                        phone=user_phone)
        db.session.add(appm)
        try:
            db.session.commit()
        except exc.IntegrityError:
            db.session.rollback()

    return render_template('contacts.html')     

    

@app.route('/services', methods=['GET', 'POST'])
def services():
    if request.method == 'POST':
        return form_handler(request)
    else:
        return render_template('services.html')



@app.route('/okay')
def okay():
    return render_template('okay.html')


@app.route('/error')
def error():
    return render_template('error.html')


@app.route('/admin',methods=['GET', 'POST'])
@flask_login.login_required
def admin():

    del_id = request.args.get("delete")
    if del_id:
        Appointment.query.filter_by(id=int(del_id)).delete()
        db.session.commit()

    appointments = Appointment.query.all()

    return render_template('admin.html',
        username = flask_login.current_user.username,
        appointments = appointments)