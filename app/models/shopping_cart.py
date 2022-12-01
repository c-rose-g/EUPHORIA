from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func
from sqlalchemy import ForeignKey
# NOTE add legend to explain naming conventions
class ShoppingCart(db.Model):
  __tablename__ = 'shopping_carts'
  if environment == "production":
        __table_args__ = {'schema': SCHEMA}
  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod('users.id')))
  created_at = db.Column(db.DateTime(), nullable=False,server_default=func.now())
  updated_at = db.Column(db.DateTime(), nullable=False,onupdate=func.now(), default=func.now())
  #relationship - users, shopping_cart_items
  users_s = db.relationship('User',back_populates='shopping_cart_u')
  shopping_cart_items_s = db.relationship('ShoppingCartItem', back_populates='shopping_cart_sci')

  def to_dict(self):
    return{
      'id':self.id,
      'user_id':self.user_id,
      # 'prod_id':{'item':[item.to_dict() for item in self.shopping_cart_items_s]}

      }

  def new_item_to_dict(self):
    return{
      'id':self.id,
      'user_id':self.user_id,
      'prod_id': self.shopping_cart_items_s
      }
