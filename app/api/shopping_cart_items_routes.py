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
  print('items >>>>>>>>', items)

  if items:
  #   all_items = [item.to_dict() for item in items]
  #   return all_items
    return {'retrieve_items': [item.to_dict() for item in items]}, 200
    # return 'hello'
  return {
        'errors': "shopping carts not found",
        'status code': 404
    }, 404

# ****************** ADD ITEM IN A SHOPPING CART ***************************
# /api/items/:prodId/
"""
what we need to do:
from product details page, user wants to add item in shopping cart, but shopping cart is currently empty.
you need the product id from the params, and you search for the shopping cart
by using get_empty_shopping_cart. do i decorate the function or save it inside?
"""
@shopping_cart_items_routes.route('/<int:shopping_cart_item_id>', methods=['POST'])
@login_required
def add_item(prod_id):
  if current_user.is_authenticated:
    user_id = current_user.user_id
    user_cart = ShoppingCart.query.filter_by(user_id=user_id).first()
    user_cart_list = [user_cart.to_dict()
                      for user_cart in user_cart.shopping_cart_items_s]

    num_of_prod_quantity = False
    cart_prod_id = False
    for product in user_cart_list:
      if product['id'] == prod_id:
        cart_prod_id = product['id']
        num_of_prod_quantity = product['prod_quantity'] + 1

    if cart_prod_id:
      get_shopping_cart = ShoppingCartItem.query.get(cart_prod_id)
      get_shopping_cart.prod_quantity = num_of_prod_quantity
      db.session.commit()

      return get_shopping_cart.to_dict(),200
    return {
    'errors': "shopping cart item was not found",
      'status code': 404
    }, 404
#     find_product = Product.query.filter_by(id=prod_id).first()
#     prod_dict = find_product.to_dict()
#     print('find product **********', prod_dict)
#     if current_user.is_authenticated:
#       user = current_user.to_dict()
#       user_id = user['id']
#       find_user_cart = ShoppingCart.query.filter_by(user_id=user_id).first()
#       print('find user cart *************', find_user_cart)
#       if find_user_cart == None:
#         # form = NewShoppingCart(
#         #   user_id=user_id,
#         #   )
#         # db.session.add(form)
#         # db.session.commit()


#         # find_shopping_cart = ShoppingCart.query.filter_by(user_id=user_id).first()
#         # find_shopping_cart = ShoppingCartItem.query.filter_by(user_id = user_id).first()
#         print('this works ***********')

#   # find_product = Product.prod_id()
#     # print('find product', find_user_cart)
#     return 'hello'
  # user_cart = ShoppingCartItem.query.find_by(shopping_cart_id)


# ****************** DECREASE ITEM QUANTITY OR REMOVE ITEM FROM SHOPPING CART BY USER ID ***************************
@shopping_cart_items_routes.route('/<int:shopping_cart_item_id>',methods=['DELETE'])
@login_required
def decrease_item_quantity(shopping_cart_item_id):
  cart_id = ShoppingCartItem.query.get(shopping_cart_item_id)
  if cart_id.prod_quantity > 1:
    return cart_id.decrease_quantity()
  # print('cart id', cart_id)
  else:
    db.session.delete(cart_id)
    db.session.commit()
    return{
      'message':'item was successfully deleted',
      'status code':200
      }, 200

# ****************** UPDATE NUMBER OF ITEMS IN SHOPPING CART BY USER ID ***************************
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
