from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class Love(db.Model):
    __tablename__ = 'loves'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    id = db.Column(db.Integer, primary_key=True)
    prod_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod('products.id')))
    user_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod('users.id')))
    created_at = db.Column(db.DateTime(), nullable=False,server_default=func.now())
    updated_at = db.Column(db.DateTime(), nullable=False,onupdate=func.now(), default=func.now())
    # relationships
    # product
    product_ll = db.relationship('Product', back_populates='loves_p')
    # user
    user_ll = db.relationship('User', back_populates='loves_u')

    def to_dict(self):
        return{
            'id': self.id,
            'prod_id':self.product_ll.to_dict(),
            'user_id': self.user_ll.to_dict()
            }

    # def love_to_dict(self):
    #     return{
    #         'id': self.id,
    #         'prod_id': [(prod_id,prod_id.to_dict()) for prod_id in product_ll.to_dict()]
    #         }
