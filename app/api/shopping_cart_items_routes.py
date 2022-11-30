from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import ShoppingCartItem, db
from .auth_routes import validation_errors_to_error_messages

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
# /api/items/:userId/
# @shopping_cart_items_routes.route('/<int:shopping_cart_id)>', methods=['POST'])
# @login_required
# def add_item(shopping_cart_id):
#   user_cart = ShoppingCartItem.query.find_by(shopping_cart_id)

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
