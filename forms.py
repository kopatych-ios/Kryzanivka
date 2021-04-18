from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms import SelectField
from wtforms.validators import InputRequired

from models import Procedure

procedure_list = [(p.id, p.name) for p in Procedure.query.all()]

class MyForm(FlaskForm):
    #name = StringField('name', validators=[DataRequired()])
    procedure_id = SelectField('Процедура:', coerce=int,choices=procedure_list, validators=[InputRequired()])
