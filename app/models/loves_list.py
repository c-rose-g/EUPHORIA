from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class Loves_list(db.Model):
    __tablename__ = 'loves_lists'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    id = db.Column(db.Integer, primary_key=True)
    prod_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod('products.id')))
    user_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod('users.id')))

    # relationships
    # product
    product_ll = db.relationship('Product', back_populates='loves_list_p', )
    # user
    user_ll = db.relationship('User', back_populates='loves_list_u')

    def to_dict(self):
        return{
            'id': self.id,
            'prod_id':{'product':[product.to_dict() for product in self.product_ll]},
            'user_id': self.user_ll
            }
