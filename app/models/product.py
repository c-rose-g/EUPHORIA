from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship
# REVIEW connect to reviews, product photos, shopping cart items, purchase history, shopping cart
  # department_name = db.Column(db.String(255)) - add this when you create product discovery page
class Product(db.Model):
  __tablename__ = 'products'
  if environment == "production":
        __table_args__ = {'schema': SCHEMA}
  id = db.Column(db.Integer, primary_key=True)
  product_name = db.Column(db.String(255))
  product_price = db.Column(db.Numeric(precision=10, scale=2), nullable=False)
  product_quantity = db.Column(db.Integer)
  product_description = db.Column(db.String(255))

  # prod_photo_id = db.Column(db.String, ForeignKey(add_prefix_for_prod('product_photos.id')))
  # review_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod('reviews.id')))
  # prod_photo = relationship('Product', foreign_keys=[prod_photo_id])
  # review = relationship('Product', foreign_keys=[review_id])
  created_at = db.Column(db.DateTime(), nullable=False,server_default=func.now())
  updated_at = db.Column(db.DateTime(), nullable=False,onupdate=func.now(), default=func.now())
  # relationships - reviews
  reviews_p = db.relationship('Review', back_populates='products_r', cascade='all, delete')
  # shopping cart items
  shopping_cart_items_p = db.relationship('ShoppingCartItem', back_populates='products_sci')
  # product photos
  product_photos_p = db.relationship('ProductPhoto', back_populates='products_pp', cascade='all, delete')
  # purchase history
  purchase_history_p = db.relationship('PurchaseHistory', back_populates='products_ph')

  def to_dict(self):
    return{
      'id':self.id,
      'product_name':self.product_name,
      'product_price':str(self.product_price),
      'product_quantity':self.product_quantity,
      'product_description':self.product_description,
      'department_name': self.department_name,
      'photo_p':self.photo_p,
      'review_id':[review.to_dict() for review in self.reviews_p]
      }
