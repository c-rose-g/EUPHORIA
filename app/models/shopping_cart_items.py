from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func
from sqlalchemy import ForeignKey

class ShoppingCartItem(db.Model):
  __tablename__ = 'shopping_cart_items'
  if environment == "production":
        __table_args__ = {'schema': SCHEMA}
  id = db.Column(db.Integer, primary_key=True)
  shopping_cart_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod('shopping_carts.id')))
  prod_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod('products.id')))
  prod_quantity = db.Column(db.Integer)

  created_at = db.Column(db.DateTime(), nullable=False,server_default=func.now())
  updated_at = db.Column(db.DateTime(), nullable=False,onupdate=func.now(), default=func.now())
  #relationship -  shopping cart
  shopping_cart_sci = db.relationship('ShoppingCart', back_populates='shopping_cart_items_s')
  # products
  products_sci = db.relationship('Product', back_populates='shopping_cart_items_p')
  def to_dict(self):
    return{
      'id':self.id,
      'shopping_cart_id':self.shopping_cart_id,
      'prod_id':[product.to_dict() for product in self.products_sci],
      'prod_quantity':self.item_quantity
      }
