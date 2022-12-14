from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, User, Track, Comment, Annotation, Vote
from ..forms import ImageForm


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
# @login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    user_dct = user.to_dict()
    user_dct['my_comment'] = [comment.to_dict() for comment in user.user_comment] if user.user_comment else []
    user_dct['my_annotation'] = [annotation.to_dict() for annotation in user.user_annotation] if user.user_annotation else []
    user_dct['my_upload'] = [track.to_dict() for track in user.user_track] if user.user_track else []
    return user_dct

@user_routes.route('/<int:id>/special')
def user_special(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()

# EDIT user photo
@user_routes.route('/<int:id>/photos', methods=["PUT"])
@login_required
def editProfile(id):
    form = ImageForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    user = User.query.get(id)
    # print(
    #         '''


    #         r
    #         d
    #         w


    #         ''',user,
    #         '''
    #         e
    #         n
    #         d
    #         ''')
    if current_user.id != user.id:
        return {'errors': 'Unauthorized', 'statusCode':401}

    if form.validate_on_submit():
        user.profile_img = form.profile_img.data
        # user.banner_img = form.banner_img.data

        db.session.commit()
        # print(
        #     '''


        #     r
        #     d
        #     3


        #     ''',user,
        #     '''
        #     e
        #     n
        #     d
        #     ''')
        return user.to_dict()


# get current user info
@user_routes.route('/<int:id>/info')
# @login_required
def annotations_by_userId(id):
    user_annotations = Annotation.query.filter(Annotation.user_id == id).all()
    user_dictionary = {}
    # print(
    #     '''
    #     L
    #     O
    #     O
    #     K

    #     ''',
    #     user_annotations)
    # print(
    #     '''
    #     H
    #     E
    #     R
    #     E
    #     ''',
    #     user_dictionary)
    current_user = User.query.get(id)
    current_user_annotations = current_user.user_annotation
    current_user_tracks = current_user.user_track
    current_user_comment = current_user.user_comment
    current_user_vote = current_user.user_vote

    user_dictionary['annotations'] = [annotation.to_dict() for annotation in current_user_annotations]
    user_dictionary['tracks'] = [track.to_dict() for track in current_user_tracks]
    user_dictionary['comments'] = [comment.to_dict() for comment in current_user_comment]
    user_dictionary['votes'] = [vote.to_dict() for vote in current_user_vote]
    # print(
    #     '''
    #     a
    #     a
    #     a
    #     a
    #     a
    #     ''', user_dictionary)
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
