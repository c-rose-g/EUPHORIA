from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func
from sqlalchemy import ForeignKey
# REVIEW connect to product model
class ProductPhoto(db.Model):
  __tablename__ = 'product_photos'
  if environment == "production":
        __table_args__ = {'schema': SCHEMA}
  id = db.Column(db.Integer, primary_key=True)
  product_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod('products.id')))
  prod_photo = db.Column(db.String)
  prod_color_name = db.Column(db.String)
  # prod_color_photo = db.Column(db.String)
  created_at = db.Column(db.DateTime(), nullable=False,server_default=func.now())
  updated_at = db.Column(db.DateTime(), nullable=False,onupdate=func.now(), default=func.now())
  # relationships - products
  products_pp = db.relationship('Product', back_populates='product_photos_p')


  def to_dict(self):
    return{
      'id':self.id,
      'product_id':self.product_id,
      'prod_photo':self.prod_photo,
      'prod_color_name':self.prod_color_name,
      }
