from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship


class Category(db.Model):
    __tablename__ = 'categories'
    
    id = db.Column(db.Integer, primary_key=True)
    category_name = db.Column(db.String(255))

    # relationship
    # product
    # product_c = db.relationship(
    #     'Product', back_populates='category_p', cascade='all, delete')
    # product category
    product_category_c = db.relationship(
        'Product_category', back_populates="category_pc", cascade='all, delete')

    def to_dict(self):
        return {
            'id': self.id,
            'category_name': self.category_name,
            'prod_id': [prod.to_dict() for prod in self.category_p]
        }
