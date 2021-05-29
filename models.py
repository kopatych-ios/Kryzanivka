from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship

from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

from datetime import datetime


db = SQLAlchemy()
 
 
class Admin(UserMixin, db.Model):
    __tablename__ = 'admins'
 
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(25),unique=True)
    password_hash = db.Column(db.String())
 
    def set_password(self,password):
        self.password_hash = generate_password_hash(password)
     
    def check_password(self,password):
        return check_password_hash(self.password_hash,password)


class Appointment(db.Model):
    __tablename__ = 'appointments'

    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey('clients.id'),nullable=False)
    service_id = db.Column(db.Integer, db.ForeignKey('services.id'),nullable=False)
    date = db.Column(db.DateTime,default=datetime.utcnow)

    client = relationship("Client")
    service = relationship("Service")


class Client(db.Model):
    __tablename__ = 'clients'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    surname = db.Column(db.String(20))
    phone = db.Column(db.String(20))

    __table_args__ = (
        db.UniqueConstraint('name','surname','phone'),
    )

class Service(db.Model):
    __tablename__ = 'services'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True)

