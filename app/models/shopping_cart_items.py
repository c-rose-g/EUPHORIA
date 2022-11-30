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
      'prod_id':self.prod_id,
      # 'prod_id':[product.to_dict() for product in self.products_sci],
      'prod_quantity':self.prod_quantity
      }
  def add_item(self):
    # self.prod_id = self.products_sci.id
    self.prod_quantity = 1
    db.session.add(self.shopping_cart_id)
    db.session.add(self.prod_id)
    db.session.add(self.prod_quantity)
    db.session.commit()
    return{
      'id':self.id,
      'shopping_cart_id':self.shopping_cart_id,
      'prod_id':self.prod_id,
      'prod_quantity':self.prod_quantity
      }
  def increase_quantity(self):
    # self.prod_quantity = self.prod_quantity + 1

    if self.prod_quantity <= 1:

      self.prod_quantity = self.prod_quantity + 1
      db.session.commit()
    return{
      'id':self.id,
      'shopping_cart_id':self.shopping_cart_id,
      'prod_quantity':self.prod_quantity
      }
  def decrease_quantity(self):
    if self.prod_quantity > 1:
      self.prod_quantity = self.prod_quantity -1
      db.session.commit()
      return{
        'id': self.id,
        'shopping_cart_id': self.shopping_cart_id,
        'prod_quantity': self.prod_quantity
          }
  def remove_quantity(self):
    if self.prod_quantity == 1:
      self.prod_quantity = 0
      db.session.delete(self)
      db.session.commit()
      # return{
      #   'id':self.id,
      #   'shopping_cart_id': self.shopping_cart_id,
      #   'prod_quantity': self.prod_quantity
      #   }
