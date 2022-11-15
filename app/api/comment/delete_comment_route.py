from flask import Blueprint, render_template, redirect, request, jsonify
from ...models import db, Track, Comment, Annotation, Vote, User
from ...forms import TrackForm, AnnotationForm, CommentForm
from flask_login import login_required, current_user

comment_routes = Blueprint('comment', __name__)

@comment_routes.route('/<int:comment_id>', methods=["DELETE"])
@login_required
def delete_comment(comment_id):
    delete_user_comment = Comment.query.get(comment_id)

    if not delete_user_comment:
        return {'errors': 'Track not found', 'statusCode':404}

    if current_user.id != delete_user_comment.user_id:
        return {'errors': 'Unauthorized', 'statusCode':401}

    # print('----------------------------delete_user_comment---------------------------------',delete_user_comment)
    db.session.delete(delete_user_comment)
    db.session.commit()
    return {
        "message": "Successfully deleted",
        "statusCode": 200
       }
