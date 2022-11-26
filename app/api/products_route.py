from flask import Blueprint, request
# from flask_login import login_required, current_user
from app.models import Product, db
import json
# from app.forms import New_product
# from .auth_routes import validation_errors_to_error_messages

products_routes = Blueprint('products', __name__)

# ****************** GET ALL PRODUCTS ***************************
# /api/products


@products_routes.route('/allProducts')
# @login_required
def get_products():
    products = Product.query.all()

    if products:
        # return [product.to_dict() for product in products], 200
        product = [product.to_dict() for product in products]
        return json.dumps({'retrieve_products':product})
        # return json.dumps(product)
        # return
    return {
        'errors': "product not found",
        'status code': 404
    }, 404

# ****************** GET ALL PRODUCTS BY PRODUCT ID ***************************
# /api/products


@products_routes.route('/<int:prod_id>')
# @login_required
def get_one_product(prod_id):
    products = Product.query.filter_by(id=int(prod_id))
    # products = Product.query.filter_by(prod_id=int(prod_id))
    if products:

        return [product.to_dict() for product in products], 200
    return {
        'errors': "product not found",
        'status code': 404
    }, 404
