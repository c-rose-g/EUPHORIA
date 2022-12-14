from flask import Blueprint, request
from flask_login import login_required, current_user

from app.models import Review, db
# from ..forms.review_form import NewReview
from ..forms.review_form import NewReview
from .auth_routes import validation_errors_to_error_messages

reviews_routes = Blueprint('reviews', __name__)
# ****************** GET ALL REVIEWS ***************************
# /api/reviews - no login required to view reviews


@reviews_routes.route('/all')
def get_reviews():
    reviews = Review.query.all()
    # print('this is review >>>>>', reviews)
    if reviews:

        return {'retrieve_all_reviews': [review.to_dict() for review in reviews]}, 200
    return {
        'errors': "review not found",
        'status code': 404
    }, 404

# ****************** GET ALL REVIEWS BY USERS BY PRODUCT ID ***************************
# /api/reviews/:userId/:reviewId


@reviews_routes.route('/<int:prod_id>/users')
@login_required
def get_review_by_user(prod_id):
    reviews = Review.query.filter_by(id=int(prod_id))

    if reviews:

        return {'retrieve_user_reviews': [review.user_review_info_to_dict() for review in reviews]}, 200
    return {
        'errors': "user reviews not found",
        'status code': 404
    }, 404


# ****************** GET ONE REVIEW BY REVIEW ID ***************************

@reviews_routes.route('/<int:review_id>')
@login_required
def get_one_review(review_id):
    review = Review.query.get(review_id)

    if review:
        return review.to_dict(), 200
    return {
        'errors': "review not found",
        'status code': 404
    }, 404


# ****************** CREATE A REVIEW ***********************************
# /api/:productId/new


@reviews_routes.route('/<int:prod_id>/new', methods=['POST'])
@login_required
def create_review(prod_id):
    form = NewReview()
    # data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']
    # print('data in backend route', data)

    if form.validate_on_submit():
        review = Review()
        # print('review in backend route >>>>>>', review)
        form.populate_obj(review)
        # review.review_msg = form.data['review_msg']
        review.prod_id = int(prod_id)
        review.user_id = int(current_user.id)
        db.session.add(review)
        db.session.commit()
    return review.to_dict()

    # return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# ****************** UPDATE A REVIEW BY REVIEW ID ***************************
# /api/reviews/:reviewId


@reviews_routes.route('/<int:review_id>', methods=['PUT'])
@login_required
def update_review(review_id):
    review = Review.query.get(review_id)

    # print('ths is review query from backend >>>>>>>>>>>>>>>>>>>>>>>', review, review.data)
    if review:
        form = NewReview()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            form.populate_obj(review)
            # print('this is the forms reviews id 1 >>>>>>>', review.id)
            review.user_id = int(current_user.id)
            db.session.commit()
            return review.to_dict()
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400
    return {'message': 'channel not found',
            'status code': 404}, 404

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
