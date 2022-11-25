from flask import Blueprint, request
from flask_login import login_required, current_user

from app.models import Review, db
from ..forms.review_form import New_review
from .auth_routes import validation_errors_to_error_messages

reviews_routes = Blueprint('reviews', __name__)
# ****************** GET ALL REVIEWS ***************************
# /api/reviews - no login required to view reviews


@reviews_routes.route('/all')

def get_reviews():
    reviews = Review.query.all()
    if reviews:

        return [review.to_dict() for review in reviews], 200
    return {
        'errors': "review not found",
        'status code': 404
    }, 404


# ****************** GET ALL REVIEWS BY PRODUCT ID ***************************
# /api/reviews/:productId


@reviews_routes.route('/<int:prod_id>')
# @login_required
def get_prod_reviews(prod_id):
    reviews = Review.query.filter_by(prod_id=int(prod_id))
    # reviews = Review.query.filter_by(prod_id=int(prod_id))
    if reviews:

        return [review.to_dict() for review in reviews], 200
    return {
        'errors': "review not found",
        'status code': 404
    }, 404

# ****************** GET ALL REVIEWS BY USER ID *************************** (MOVE TO USERS_ROUTES)
# /api/reviews/:userId/:reviewId


@reviews_routes.route('/<int:user_id>/reviews')
@login_required
def get_review_by_user(user_id):
    reviews = Review.query.filter_by(id=int(user_id))

    if reviews:

        return [review.to_dict() for review in reviews], 200
    return {
        'errors': "review not found",
        'status code': 404
    }, 404


# ****************** CREATE A REVIEW ***********************************
# /api/:productId/new


@reviews_routes.route('/<int:prod_id>/new', methods=['POST'])
@login_required
def create_review(prod_id):
    form = New_review()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        review = Review()
        form.populate_obj(review)
        review.prod_id = int(prod_id)
        review.user_id = int(current_user.id)
        db.session.add(review)
        db.session.commit()
        return review.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# ****************** UPDATE A REVIEW BY REVIEW ID ***************************
# /api/reviews/:reviewId


@reviews_routes.route('/<int:review_id>', methods=['PUT'])
def update_review(review_id):
    review = Review.query.get(review_id)
    if review:
        form = New_review()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            form.populate_obj(review)
            review.user_id = int(current_user.id)
            db.session.commit()
            return review.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


# ****************** DELETE A REVIEW ***************************
# /api/reviews/:reviewId



@reviews_routes.route('/<int:review_id>', methods=["DELETE"])
@login_required
def delete_review(review_id):
    review = Review.query.get(int(review_id))
    if review:
        db.session.delete(review)
        db.session.commit()
        return {"review": "review successfully seleted", "status code": 302}, 302
    return {
        "review": "review not found",
        "status code": 404
    }, 404
