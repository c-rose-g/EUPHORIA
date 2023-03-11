from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import ShoppingCartItem, ShoppingCart, Product, db
from .auth_routes import validation_errors_to_error_messages
# from app.forms import NewShoppingCart
# from shopping_cart_items_routes import get_all_items
shopping_cart_items_routes = Blueprint('items', __name__)

# ****************** GET ALL ITEMS IN A SHOPPING CART ***************************


@shopping_cart_items_routes.route('/all')
@login_required
def get_all_items():
    items = ShoppingCartItem.query.all()

    if items:
        #   all_items = [item.to_dict() for item in items]
        #   return all_items
        return {'retrieve_items': [item.to_dict() for item in items]}, 200
        # return 'hello'
    return {
        'errors': "shopping carts not found",
        'status code': 404
    }, 404

# ****************** ADD IN A SHOPPING CART ***************************
# /api//:productId


@shopping_cart_items_routes.route('/<int:prod_id>', methods=['POST'])
@login_required
def add_to_cart(prod_id):
    user_cart = ShoppingCart.query.filter_by(user_id=current_user.id).first()
    new_item = ShoppingCartItem(
        shopping_cart_id=user_cart.id,
        prod_id=prod_id,
        prod_quantity=1
    )
    db.session.add(new_item)
    db.session.commit()
    # print('new item to dict ************', new_item.to_dict())
    # print('user_cart', user_cart.new_item_to_dict())
    if new_item:
        return new_item.to_dict(), 200
    return {
        'errors': "shopping cart item was not found",
        'status code': 404
    }, 404


# ****************** INCREASE IN A SHOPPING CART ***************************
# /api/items/:prodId/
"""
what we need to do:
from product details page, user wants to add item in shopping cart, but shopping cart is currently empty.
you need the product id from the params, and you search for the shopping cart
by using get_empty_shopping_cart. do i decorate the function or save it inside?
"""


@shopping_cart_items_routes.route('/<int:prod_id>', methods=['PUT'])
@login_required
def increase_prod_quantity(prod_id):
    # find shopping cart class for user
    user_cart = ShoppingCart.query.filter_by(user_id=current_user.id).first()
    # create list comprehension of shopping cart item in shopping cart class with id, shopping_cart_id, and prod_id, prod_quantity
    user_cart_list = [user_cart.to_dict()
                      for user_cart in user_cart.shopping_cart_items_s]
    # save current number of prod quantity
    num_of_prod_quantity = False
    # save shopping cart id
    shopping_cart_id = False
    # loop through user cart comprehension list to grab product id, number of prod quantity
    for product in user_cart_list:
        # if product id exists in shopping cart item dictionary
        if product['prod_id'] == prod_id:
            shopping_cart_id = product['id']
            num_of_prod_quantity = product['prod_quantity'] + 1

    # add prod id to shopping cart
    if shopping_cart_id:
        # return increase_quantity(num_of_prod_quantity)
        get_shopping_cart = ShoppingCartItem.query.get(shopping_cart_id)

        get_shopping_cart.prod_quantity = num_of_prod_quantity
        db.session.add(get_shopping_cart)
        db.session.commit()
#
        return get_shopping_cart.to_dict(),200
        # return user_cart.to_dict(), 200

    return {
        'errors': "shopping cart item was not found",
        'status code': 404
    }, 404


# ****************** DECREASE ITEM QUANTITY OR REMOVE ITEM FROM SHOPPING CART BY USER ID ***************************
@shopping_cart_items_routes.route('/<int:shopping_cart_item_id>', methods=['DELETE'])
@login_required
def decrease_item_quantity(shopping_cart_item_id):
    cart_id = ShoppingCartItem.query.get(shopping_cart_item_id)
    if cart_id.prod_quantity > 1:
        return cart_id.decrease_quantity()
    # print('cart id', cart_id)
    else:
        db.session.delete(cart_id)
        db.session.commit()
        return {
            'message': 'item was successfully deleted',
            'status code': 200
        }, 200

# ****************** UPDATE NUMBER OF ITEMS IN SHOPPING CART BY SHOPPING CART ITEM ID ***************************

# ****************** DELETE ITEM IN SHOPPING CART BY SHOPPING CART ITEM ID ***************************
# @shopping_cart_items_routes.route('/')
# updating the number of items in a shoppping cart in the shopping cart page
# /api/items/:prodId/
# @shopping_cart_items_routes.route('/<int:prod_id>')
# @login_required
# def update_shopping_cart_item(prod_id):
#   # find_user = ShoppingCart.query.get(user_id).to_dict()
#   # user = [yolo.to_dict() for yolo in find_user]
#   find_product = Product.query.get(prod_id).to_dict()
#   if current_user.is_authenticated:
#     user = current_user.to_dict()
#     user_id = user['id']
#     find_user_cart = ShoppingCart.query.filter_by(user_id=user_id).first()
#     print('user *************', user_id)
#   # print('find product ***************',find_product)

#   print('find user **********************', find_user_cart)
#   return 'hello'
