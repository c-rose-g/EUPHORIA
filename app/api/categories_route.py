from flask import Blueprint, request
# from flask_login import login_required, current_user
from app.models import Category, db
import json
# from app.forms import New_product
# from .auth_routes import validation_errors_to_error_messages

products_routes = Blueprint('categories', __name__)

# ****************** GET ALL PRODUCTS BY CATEGORY NAME ***************************

# /api/products/categories/makeup
@products_routes.route('/categories/<prod_category>')
def get_prod_category(prod_category):
    category = Product.query.get(id=category_id)
    print('category', category)
    if category:
        # return json.dumps({'prod_category':category})
        return [cat.to_dict() for cat in category], 200
    return {
        'errors': 'category not found',
        'status code': 404
    }, 404
