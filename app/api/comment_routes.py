from flask import Blueprint, render_template, redirect, jsonify, request
from flask_login import login_required
from ..models import db, Track, Comment, Annotation, Vote, User
from ..models.db import db
from ..forms import CommentForm


def validation_errors(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


comment_routes = Blueprint('tracks', __name__)


@comment_routes.route('/<int:id>')
def comments():
    comments = Comment.query.all()

    comment_list = []
    for comment in comments:
        comment_dict = comment.to_dict()
        comment_list.append(comment_dict)

    return jsonify(comment_list)


# @comment_routes.route('/<int:id>/comment', methods=["POST"])
# @login_required
# def create_comments(id):
#     # track = Track.query.get(id)

#     form = CommentForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\------------------------------------------abfdjkhbdkawjbdawkhk", request.json)
#     if form.validate_on_submit():
#         comment = Comment(
#             track_id=id,
#             comment_body=form.comment_body.data
#         )
#         db.session.add(comment)
#         db.session.commit()
#         return comment.to_dict()
#     return {'errors': validation_errors(form.errors), "statusCode": 401}




@comment_routes.route('/<int:id>', methods=["PUT"])
def edit_comment():
    #form = formforcomment()
    # if form.validate_on_submit():
    #   data = dbforcomment()
    #   form.populate_obj(data)
    #   db.session.add(data)
    #   db.session.commit()
    #   return redirect ('/tosomewhere?')
    # if form.errors:(note:body validation)
    #   return '{
    #   "message": "Validation Error",
    #   "statusCode": 400,
    #   "errors": {
    #     "body": "Comment body text is required"
    #       }
    #   }'
    pass


@comment_routes.route('/<int:id>', methods=["DELETE"])
def delete_comment():
    # query = dbforcomment.query.filter(dbforcomment.userid.is("artist") and dbforcomment.id.is("song")).all()
    #   db.session.delete(query)
    #   db.session.commit()
    #   return '{
    #       "message": "Successfully deleted",
    #       "statusCode": 200
    #       }'
    # else
    #    return '{
    # "message": "Comment couldn't be found",
    # "statusCode": 404
    # }'
    pass
