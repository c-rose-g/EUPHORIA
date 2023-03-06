from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship
# join table


class Product_category(db.Model):
    __tablename__ = 'product_categories'

    prod_id = db.Column(db.Integer, db.ForeignKey(
        'products.id'), primary_key=True)
    category_id = db.Column(db.Integer, db.ForeignKey(
        'categories.id'), primary_key=True)

    # relationship
    # category
    category_pc = db.relationship(
        'Category', back_populates='product_category_c')
    # product
    product_pc = db.relationship(
        'Product', back_populates='product_category_p')
