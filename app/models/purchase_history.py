from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func
from sqlalchemy import ForeignKey
# REVIEW connect to product model
# is class name snake case or pascal case?
# is table name plural or singular or whatever?
class PurchaseHistory(db.Model):
  __tablename__ = 'purchase_history'
  if environment == "production":
        __table_args__ = {'schema': SCHEMA}
  id = db.Column(db.Integer, primary_key=True)
  prod_quantity = db.Column(db.Integer)
  date_purchased = db.Column(db.Integer)

  prod_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod('products.id')))
  user_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod('users.id')))

  created_at = db.Column(db.DateTime(), nullable=False,server_default=func.now())
  updated_at = db.Column(db.DateTime(), nullable=False,onupdate=func.now(), default=func.now())
  #relationship - products
  products_ph = db.relationship('Product', back_populates='purchase_history_p')
  # users
  users_ph = db.relationship('User', back_populates='purchase_history_u')

  def to_dict(self):
    return{
      'id':self.id,
      'prod_quantity':self.prod_quantity,
      'date_purchased':self.date_purchased,
      'prod_id':[item.to_dict() for item in self.products_ph],
      'user_id':[user.to_dict() for user in self.users_ph]
      }
