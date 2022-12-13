from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.sql import func

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(10), nullable=False)
    last_name = db.Column(db.String(10), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    created_at = db.Column(db.DateTime(), nullable=False,server_default=func.now())
    updated_at = db.Column(db.DateTime(), nullable=False,onupdate=func.now(), default=func.now())
    # relationships
    # purchase history
    purchase_history_u = db.relationship('PurchaseHistory', back_populates='users_ph', cascade='all, delete')
    # shopping cart
    shopping_cart_u = db.relationship('ShoppingCart', back_populates='users_s', cascade='all, delete')
    # reviews
    reviews_u = db.relationship('Review', back_populates='users_r', cascade='all, delete')
    # loves list
    loves_list_u = db.relationship('Loves_list', back_populates='user_ll', cascade='all, delete')
    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    # def get_basket_id(self):
    #     basket_list = [basket_id.to_dict() for basket_id in self.shopping_cart_u]
    #     basket_id = False
    #     for basket in basket_list:
    #         if basket:
    #             basket['id'] = basket_id
    #     return basket_id

    def to_dict(self):
        # self.id = get_basket_id(self.shopping_cart_u)
        return {
            'id': self.id,
            'first_name':self.first_name,
            'last_name':self.last_name,
            'email': self.email,
            # 'basket': [basket_id.to_dict() for basket_id in self.shopping_cart_u]
            'basket_id':self.id
        }
