from flask import Blueprint,render_template,redirect, jsonify
from ..models import db, Track, Comment, Annotation, Vote, User
from ..models.db import db
from flask_login import login_required, current_user

comment_routes = Blueprint('tracks', __name__)

@comment_routes('/<int:id>')
def comments():
    comments = Comment.query.all()

    comment_list = []
    for comment in comments:
        comment_dict = comment.to_dict()
        comment_list.append(comment_dict)

    return jsonify(comment_list)

# @comment_routes('/comment/<int:comment_id>',methods=["DELETE"])
# @login_required
# def delete_comment(comment_id):
#     delete_user_comment = Comment.query.get(comment_id)

#     if not delete_user_comment:
#         return {'errors': 'Track not found', 'statusCode':404}

#     if current_user.id != delete_user_comment.user_id:
#         return {'errors': 'Unauthorized', 'statusCode':401}

#     # print('----------------------------delete_user_comment---------------------------------',delete_user_comment)
#     db.session.delete(delete_user_comment)
#     db.session.commit()
#     return {
#         "message": "Successfully deleted",
#         "statusCode": 200
#        }
