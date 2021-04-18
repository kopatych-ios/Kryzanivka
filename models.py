from app import db
from datetime import datetime

class Procedure(db.Model):
    __tablename__ = 'procedures'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), unique=True)

    appointments = db.relationship('Appointment', backref='procedure', lazy='dynamic')

    def __repr__(self):
        return '<Procedure {}>'.format(self.name)

class Appointment(db.Model):
    __tablename__ = 'appointments'
    id = db.Column(db.Integer, primary_key=True)
    procedure_id = db.Column(db.Integer, db.ForeignKey('procedures.id'),nullable=False)
    date = db.Column(db.DateTime,default=datetime.utcnow)

    def __repr__(self):
        return '<Appointment {},{}>'.format(self.id,self.date)
