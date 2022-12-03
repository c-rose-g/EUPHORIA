from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import ShoppingCartItem, ShoppingCart, PurchaseHistory, db
from .auth_routes import validation_errors_to_error_messages
# from app.forms import NewShoppingCart
# from shopping_cart_items_routes import get_all_items
purchase_history_routes = Blueprint('history', __name__)

# ****************** GET ALL PURCHASE_HISTORY  ***************************

# @purchase_history_routes.route('/all')
# @login_required
# def get_all_history():
#     items = ShoppingCartItem.query.all()
#     if items:
#         return {'retrieve_history}:[]
# ****************** GET PURCHASE HISTORY BY USER ID ***************************


@purchase_history_routes.route('/<int:user_id>')
@login_required
def get_user_history(user_id):

    user_history = PurchaseHistory.query.filter_by(user_id=user_id)
    # print('user history *******', user_history)
    user_history_list = []
    for history in user_history:
        user_history_list.append(history.to_dict())

    if user_history:
        return {'retrieve_user_purchase_history': user_history_list}
        # return 'hello'

# ****************** ADD TO PURCHASE HISTORY BY USER ID ***************************
# /api/history/:userId


@purchase_history_routes.route('/<int:user_id>', methods=['POST'])
@login_required
def add_purchase_history(user_id):
    shopping_cart = ShoppingCart.query.filter_by(
        user_id=user_id).first().to_dict()
# what we need to do add evertthing in shopping cart into purchase history, and empty out the cart simple? lets hope
    shopping_cart_items = ShoppingCartItem.query.filter_by(
        shopping_cart_id=shopping_cart['id'])

    for items in shopping_cart_items:
        if items:
            # print(items.to_dict(), 'items ****************')
            user_purchase_history = PurchaseHistory(
                prod_id=items.prod_id,
                prod_quantity=items.prod_quantity,
                user_id=user_id,
            )
            print(user_purchase_history)
            db.session.add(user_purchase_history)
            db.session.delete(items)
            db.session.commit()

    return shopping_cart
    # print('shopping cart **********', shopping_cart_items)

    # print'hello'
    # return shopping_cart.to_dict(),200
    # return shopping_cart_items, 200
    return {
        "purchase history": "purchase history not found",
        "status code": 404
    }, 404
