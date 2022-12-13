from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
# should i add columns for product name,price,etc or should i just append it when i create the form?
class newLovesListForm(FlaskForm):
    user_id = IntegerField('user_id')
    product_id = IntegerField('product_id')
