from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import ShoppingCart

class NewShoppingCart(FlaskForm):
  user_id = IntegerField('user_id')
