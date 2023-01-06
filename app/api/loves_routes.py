from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Love, db
from app.forms import newLovesForm
import json

loves_routes = Blueprint('loves', __name__)


@loves_routes.route('/<int:user_id>')
@login_required
def get_love(user_id):
    """
    Query for user's loves by user id and returns loves in a dictionary
    """
    loves_query = Love.query.filter_by(user_id = int(user_id))
    loves = [love.to_dict() for love in loves_query]

    return {'loves':loves}

@loves_routes.route('/<int:prod_id>',methods=['POST'])
@login_required
def add_love(prod_id):
    """
    Add a product to a user's loves and returns loves in a dictionary
    """
    love_in_user = Love.query.filter_by(prod_id = prod_id).first()

    if not love_in_user:
        love = Love(
                user_id = current_user.id,
                prod_id = prod_id)
        db.session.add(love)
        db.session.commit()
        return love.to_dict()
    else:
        return {'love':'Love already exists', 'status code': 400},400

# loves/<love_id>/delete
@loves_routes.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def kill_love_from_loves(id):
    """
    Deletes a product from a user's loves from the loves page
    """
    love = Love.query.get(id)
    # print('THIS IS LOVE >>>>>>>>>>>>>>>>>>>>>>>',love)
    if love:
        db.session.delete(love)
        db.session.commit()
        return {"love": "love successfully deleted", "status code": 200}, 200

    else:
        return {"love": "love was not deleted", "status code": 404}, 404



@loves_routes.route('/<int:prod_id>', methods=['DELETE'])
@login_required
def kill_product_love(prod_id):
    """
    Deletes a product from a user's loves from the product details page
    """
    # return object of loves for prod_id
    love_query = Love.query.filter_by(prod_id=prod_id)

    for love in love_query:
        if(love.user_id == current_user.id):
            # print('user in love', love.to_dict())
            db.session.delete(love)
            db.session.commit()
            return {"love": "love successfully deleted", "status code": 200}, 200

    else:
        return {"love": "love was not found", "status code": 404}, 404
