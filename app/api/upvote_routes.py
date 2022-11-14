from flask import Blueprint,render_template
from ..models.db import db,Vote
from flask_login import login_required, current_user
upvote_routes = Blueprint('upvotes',__name__)

@upvote_routes('/<:id>/upvote')
@login_required
def upvote(id):
    vote = Vote.query.filter(Vote.user_id == current_user.id, Vote.annotation_id == id).first()
    if not vote:
        upvote = Vote(
        user_id=current_user.id,
        annotation_id=id,
        vote=1
        )
        db.session.add(upvote)
        db.session.commit()
        return upvote.to_dict()
    return {'errors': 'You have already upvoted this annotation'}


@upvote_routes('/<:id>/downvote')
@login_required
def downvote(id):
    vote = Vote.query.filter(Vote.user_id == current_user.id, Vote.annotation_id == id).first()
    if not vote:
        upvote = Vote(
        user_id=current_user.id,
        annotation_id=id,
        vote=-1
        )
        db.session.add(upvote)
        db.session.commit()
        return upvote.to_dict()
    return {'errors': 'You have already downvoted this annotation'}


@upvote_routes('/<:id>/unvote')
@login_required
def unvote(id):
    vote = Vote.query.filter(Vote.user_id == current_user.id, Vote.annotation_id == id).first()
    if vote:
        db.session.delete(vote)
        db.session.commit()
        return vote.to_dict()
