from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import Review

# NOTE do I need a function to check if current user is signed in? NO, already taken care of in the routes
class New_review(FlaskForm):
  review_msg = StringField('review', validators=[DataRequired()])
