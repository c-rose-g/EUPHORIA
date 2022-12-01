from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import ShoppingCart, ShoppingCartItem, Product, db
from .auth_routes import validation_errors_to_error_messages

# shopping_carts_routes = Blueprint('basket', __name__)
shopping_carts_routes = Blueprint('basket', __name__)

# ****************** GET ALL SHOPPING CARTS ***************************


@shopping_carts_routes.route('/all')
@login_required
def get_all_shopping_carts():
    carts = ShoppingCart.query.all()
    # print('carts >>>>>>>>>>>>>>>>>>>>', carts)
    if carts:
        # print('shopping_cart_items_s >>>>>>>>>>>>>>>>>>', [
        #       cart.shopping_cart_items_s for cart in carts])
        cart_comps = [cart.shopping_cart_items_s for cart in carts]
        cart_prods = cart_comps[0]
        cart_prods = [item.to_dict() for item in cart_prods]
        # print('cart products>>>>>>>>>>>>', cart_prods)
        user_carts = [cart.to_dict() for cart in carts]
        for user in user_carts:
            user['prod_items'] = cart_prods

        # print('user_carts >>>>>>>>>>>>', user_carts)

        return {'retrieve_users_carts': user_carts}, 200
        # return 'hello'
    return {
        'errors': "shopping carts not found",
        'status code': 404
    }, 404

# only brings back shoppping cart id and user id
# ****************** GET EMPTY SHOPPING CART BY USER ID ***************************
# @shopping_carts_routes.route('/<int:user_id>/empty', methods=['POST'])
# @login_required
# def get_empty_shopping_cart(user_id):
#     cart = ShoppingCart(user_id= user_id)
#     # print('cart', cart.to_dict())
#     db.session.add(cart)
#     db.session.commit()

#     if cart:
#         # return 'hello'
#         return cart.to_dict(),200
#     return {
#         'errors': "shopping cart not found",
#         'status code': 404
#     }, 404


# ****************** GET SHOPPING CART BY USER ID ***************************


@shopping_carts_routes.route('/<int:user_id>')
@login_required
def get_user_shopping_cart(user_id):
    cart = ShoppingCart.query.filter_by(user_id=user_id)
    # cart = ShoppingCart.query.get(user_id)

    # print('cart >>>>>>>>>>>>>>>>>>>>>', cart.to_dict())
    if cart:
        cart_comps = [cart.shopping_cart_items_s for cart in cart]
        cart_prods = cart_comps[0]
        cart_prods = [item.to_dict() for item in cart_prods]
        # print('cart products>>>>>>>>>>>>', cart_prods)
        user_cart = [one_cart.to_dict() for one_cart in cart]
        for user in user_cart:
            user['prod_items'] = cart_prods
        # return 'hello'
        # return cart.to_dict(),200
        return {'retrieve_user_cart': user_cart}, 200
    return {
        'errors': "shopping carts not found",
        'status code': 404
    }, 404

# ****************** ADD OR INCREASE TO SHOPPING CART BY USER ID ***************************


@shopping_carts_routes.route('/<int:prod_id>', methods=['POST'])
@login_required
def add_item_to_shopping_cart(user_id, prod_id):
    if current_user.is_authenticated:
        user_id = current_user.user_id
        user_cart = ShoppingCart.query.filter_by(user_id=user_id).first()
    # user_cart_dict = user_cart.to_dict()
    # item_exists = user_cart['prod_items'].find(prod_id = prod_id)
    # items_exists = False
    # print('user shopping cart items >>>>>>>>>>>>>>>',
    #       user_cart.shopping_cart_items_s)
    user_cart_list = [user_cart.to_dict()
                      for user_cart in user_cart.shopping_cart_items_s]
    # print("user cart list >>>>", user_cart_list)
    num_of_prod_quantity = False
    cart_prod_id = False
    for product in user_cart_list:
      if product['id'] == prod_id:
        # print('product id >>>>>>>>', product['id'])
        cart_prod_id = product['id']

        num_of_prod_quantity = product['prod_quantity'] + 1


    # print('item exists >>>>>', user_cart.to_dict())
    # shopping_cart_id = ShoppingCartItem.query.find_by(user_cart_dict['shopping_cart_id'] == user_id)
    # print('shopping cart id >>>>>>>>', shopping_cart_id)
    # item = ShoppingCartItem()
    if cart_prod_id:
      get_shopping_cart = ShoppingCartItem.query.get(cart_prod_id)
      get_shopping_cart.prod_quantity = num_of_prod_quantity
      db.session.commit()

      return get_shopping_cart.to_dict(),200
    #   print('get shopping cart', get_shopping_cart)
    #   db.session.commit()
    #   return get_shopping_cart, 200
    # elif(num_of_prod_quantity == False):
    #   item.prod_id = int(prod_id)
    #   db.session.add(item)
    #   db.session.commit()
    #   return item.to_dict()
    # prod = user_cart['prod_items']

    # print('this is user cart >>>>>>>>',user_cart)
    return {
    'errors': "shopping carts not found",
      'status code': 404
    }, 404


# ****************** UPDATE A SHOPPING CART BY USER ID ***************************
# updating the number of items in a shoppping cart in the shopping cart page
# /api/basket/:userId/


# ****************** DELETE ITEMS IN A SHOPPING CART ***************************
""""
If I remove the items from the shopping cart, does it delete the shopping cart itself since it's no longer a column in the users model?
is this a route meant for shopping cart items instead?
"""
# @shopping_carts_routes
