from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Track, Comment, Annotation, Vote


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

@user_routes.route('/<int:id>/special')
def user_special(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()


# user annotations
@user_routes.route('/<int:id>/annotations')
@login_required
def annotations_by_userId(id):
    user_annotations = Annotation.query.filter(Annotation.user_id == id).all()
    annotation_dictionary = [annotation.to_dict() for annotation in user_annotations]

    users = User.query.filter(User.id == id).all()
    annotation_dictionary['Users'] = [user.to_dict() for user in users]

    tracks = Track.query.filter(Track.user_id == id).all()
    annotation_dictionary['Tracks'] = [track.to_dict() for track in tracks]

    comments = Comment.query.filter(Comment.user_id == id).all()
    annotation_dictionary['Comments'] = [comment.to_dict() for comment in comments]

    votes = Vote.query.filter(Vote.user_id == id).all()
    annotation_dictionary['Votes'] = [votes.to_dict() for vote in votes]


    return {'annotations': annotation_dictionary}
