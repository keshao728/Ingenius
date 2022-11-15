from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User
from ..models import Annotation


user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()

# user annotations [CARE: ROUTE (USERNAME? ID? WHAAT)]
# @user_routes.route('/<int:id>/annotations')
# @login_required
# def annotations_by_userId(user_id):
#     user_annotations = Annotation.query.filter(Annotation.user_id == user_id).all()
#     annotation_dictionary = [annotation.to_dict() for annotation in user_annotations]

#     return annotation_dictionary