from .db import db, SCHEMA, environment, add_prefix_for_prod
from sqlalchemy.sql import func
from sqlalchemy import ForeignKey

class Review(db.Model):
  __tablename__ = 'reviews'

  id = db.Column(db.Integer, primary_key=True)
  review_msg = db.Column(db.String(255), nullable=False)

  prod_id = db.Column(db.ForeignKey('products.id'))
  user_id = db.Column(db.ForeignKey('users.id'))

  created_at = db.Column(db.DateTime(), nullable=False, server_default=func.now())
  updated_at = db.Column(db.DateTime(), nullable=False, onupdate=func.now(), default=func.now())
  # relationships - users
  users_r = db.relationship('User', back_populates='reviews_u')
  # products
  products_r = db.relationship('Product', back_populates='reviews_p', )

  def to_dict(self):
    return{
      'id':self.id,
      'review_msg':self.review_msg,
      'prod_id':self.prod_id,
      'user_id':self.users_r.to_dict()
      }

  def user_review_info_to_dict(self):
    return{
      'id':self.id,
      'user_id':self.users_r.to_dict(),
      }
