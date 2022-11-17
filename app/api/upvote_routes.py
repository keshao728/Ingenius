from flask import Blueprint,render_template
from ..models import db,Vote
from flask_login import login_required, current_user

upvote_routes = Blueprint('upvotes',__name__)

@upvote_routes.route('/<int:id>/upvote',methods=['POST'])
@login_required
def upvote(id):
    vote = Vote.query.filter(Vote.annotation_id == id, Vote.user_id == current_user.id, Vote.vote == 1).all()
    if vote:
        return {'errors': 'You have already upvoted this annotation',"statusCode": 401}

    else:
        upvote = Vote(
        user_id=current_user.id,
        annotation_id=id,
        vote=1
        )
        db.session.add(upvote)
        db.session.commit()
        return upvote.to_dict()


@upvote_routes.route('/<int:id>/downvote',methods=['POST'])
@login_required
def downvote(id):
    # print ('>>>id' , id)
    # print ('>>>current_user.id' , current_user.id)
    vote1 = Vote.query.filter(Vote.annotation_id == id, Vote.user_id == current_user.id, Vote.vote == -1).all() #find one
    # vote2 = Vote.query.get(Vote.user_id == current_user.id, Vote.annotation_id == id) #find by PK
    # print (' >>>>>>>vote >>>>>>>>>',vote1)
    if vote1:
        return {'errors': 'You have already downvoted this annotation',"statusCode": 401}.
        # return vote1

    else:
        downvote = Vote(
        user_id=current_user.id,
        annotation_id=id,
        vote=-1
        )
        db.session.add(downvote)
        db.session.commit()
        return downvote.to_dict()


@upvote_routes.route('/<int:id>/unvote',methods=['DELETE'])
@login_required
def unvote(id):
    vote = Vote.query.filter(Vote.user_id == current_user.id, Vote.annotation_id == id).first()
    if vote:
        db.session.delete(vote)
        db.session.commit()
        return vote.to_dict()
