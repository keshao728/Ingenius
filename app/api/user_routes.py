from flask import Blueprint, jsonify
from flask_login import login_required, current_user
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
# get current user info
@user_routes.route('/<int:id>/info')
@login_required
def annotations_by_userId(id):
    user_annotations = Annotation.query.filter(Annotation.user_id == id).all()
    user_dictionary = {}
    print(
        '''
        L
        O
        O
        K

        ''',
        user_annotations)
    print(
        '''
        H
        E
        R
        E
        ''',
        user_dictionary)
    current_user = User.query.get(id)
    current_user_annotations = current_user.user_annotation
    current_user_tracks = current_user.user_track
    current_user_comment = current_user.user_comment
    current_user_vote = current_user.user_vote

    user_dictionary['annotations'] = [annotation.to_dict() for annotation in current_user_annotations]
    user_dictionary['tracks'] = [track.to_dict() for track in current_user_tracks]
    user_dictionary['comments'] = [comment.to_dict() for comment in current_user_comment]
    user_dictionary['votes'] = [vote.to_dict() for vote in current_user_vote]
    print(
        '''
        a
        a
        a
        a
        a
        ''', user_dictionary)
    return user_dictionary
    # print(
    #     '''
    #     u
    #     s
    #     e
    #     r
    #     s
    #     ''',
    #     [annotation.to_dict() for annotation in current_user_annotations]
    # )
    # annotation_dictionary['Users'] = [user.to_dict() for user in users]

    # # tracks = Track.query.filter(Track.user_id == id).all()
    # # annotation_dictionary['Tracks'] = [track.to_dict() for track in tracks]

    # # comments = Comment.query.filter(Comment.user_id == id).all()
    # # annotation_dictionary['Comments'] = [comment.to_dict() for comment in comments]

    # print(
    #     '''
    #     look at meeeee
    #     me
    #     me
    #     me

    return {'annotations': annotation_dictionary}
    #     ''',
    #     annotation_dictionary)
    # # votes = Vote.query.filter(Vote.user_id == id).all()
    # # annotation_dictionary['Votes'] = [vote.to_dict() for vote in votes]
