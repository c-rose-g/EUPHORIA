from flask import Blueprint, request
# from flask_login import login_required, current_user
from app.models import Product, Review, db
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
        return json.dumps({'retrieve_products': product})
        # return json.dumps(product)
        # return
    return {
        'errors': "product not found",
        'status code': 404
    }, 404

# ****************** GET ALL REVIEWS BY PRODUCT ID ***************************
# /api/reviews/:productId


@products_routes.route('/<int:prod_id>/reviews')
# @login_required
def get_prod_reviews(prod_id):
    reviews = Review.query.filter_by(prod_id=int(prod_id))
    # reviews = Review.query.filter_by(prod_id=int(prod_id))
    if reviews:

        return {'retrieve_prod_reviews':[review.to_dict() for review in reviews]}, 200
    return {
        'errors': "review not found",
        'status code': 404
    }, 404

# ****************** GET ALL PRODUCTS BY PRODUCT ID ***************************
# /api/products

@products_routes.route('/<int:prod_id>')
# @login_required
def get_one_product(prod_id):
    # products = Product.query.filter_by(id=int(prod_id))
    product = Product.query.get(prod_id)
    # print('this is product', product)
    # products = Product.query.filter_by(prod_id=int(prod_id))
    if product:
        # one_product = [product.to_dict() for product in products]
        # return one_product
        # return json.dumps({'retrieve_product':one_product})
        return product.to_dict(), 200
    return {
        'errors': "product not found",
        'status code': 404
    }, 404

# # ****************** GET ALL PRODUCTS BY CATEGORY NAME ***************************

# # /api/products/categories/makeup
@products_routes.route('/categories/<prod_category>')
def get_prod_category(prod_category):
    # filter_by(model column name, <name thingy>)
    category = Product.query.filter_by(product_category=prod_category).all()
    # print('category >>>>>>.', category)

    if category:
        # return json.dumps({'prod_category':category})
        return {'retrieve_categories':[cat.to_dict() for cat in category]}, 200
        # return 'hello'
    return {
        'errors': 'category not found',
        'status code': 404
    }, 404

# ****************** Search Bar ***************************
# Search products by category, brand or name
@products_routes.route('/search')
def search_products():
    search_query = request.args.get('query')

    products = Product.query.filter((Product.product_category.ilike(f'%{search_query}%')) |
                                    (Product.product_brand.ilike(f'%{search_query}%')) |
                                    (Product.product_name.ilike(f'%{search_query}%'))).all()

    if products:
        product = [product.to_dict() for product in products]
        return json.dumps({'retrieve_products': product}), 200
    return {
        'errors': "product not found",
        'status code': 404
    }, 404
