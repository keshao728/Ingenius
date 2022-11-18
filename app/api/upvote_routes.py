from flask import Blueprint,render_template
from ..models import db,Vote
from flask_login import login_required, current_user

upvote_routes = Blueprint('upvotes',__name__)
@upvote_routes.route('/<int:id>/total')
def votecount(id):
    votes = Vote.query.filter(Vote.annotation_id == id).all()
    print('''this
          is
          a
          vote
          query
          '''
          ,votes)
    count = 0
    array = []

    for votevalue in votes:
        count += votevalue.vote
        print('this is the count',count)
        # votevalue['count'] = count
        votevalue = votevalue.to_dict()
        votevalue['count'] = count
        print('helloooooooo',votevalue)
        array.append(votevalue)
        print('array testing testing',array)
    print('this is final votes', array)
    return {'votes':array,'votetotalvalue':count}

@upvote_routes.route('/<int:id>/upvote',methods=['POST'])
@login_required
def upvote(id):
    vote1 = Vote.query.filter(Vote.annotation_id == id, Vote.user_id == current_user.id, Vote.vote == 1).first()
    vote2 = Vote.query.filter(Vote.annotation_id == id, Vote.user_id == current_user.id, Vote.vote == -1).first()

    if vote1:
        return {'errors': 'You have already upvoted this annotation',"statusCode": 401}

    # if vote2:
    #     return {'errors': 'You have already downvoted this annotation',"statusCode": 401}

    if not vote1 and not vote2:
        upvote = Vote(
        user_id=current_user.id,
        annotation_id=id,
        vote=1
        )
        db.session.add(upvote)
        db.session.commit()
        return upvote.to_dict()

    if not vote1 and vote2:  #if only downvote
        db.session.delete(vote2)
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
    vote1 = Vote.query.filter(Vote.annotation_id == id, Vote.user_id == current_user.id, Vote.vote == -1).first()
    vote2 = Vote.query.filter(Vote.annotation_id == id, Vote.user_id == current_user.id, Vote.vote == 1).first()

    # vote2 = Vote.query.get(Vote.user_id == current_user.id, Vote.annotation_id == id) #find by PK
    print (' >>>>>>>vote >>>>>>>>>',vote2)
    if vote1 :
        return {'errors': 'You have already downvoted this annotation',"statusCode": 401}

    # if vote2:
    #     return {'errors': 'You have already upvoted this annotation',"statusCode": 401}
    if not vote1:
        if not vote2:
            downvote = Vote(
            user_id=current_user.id,
            annotation_id=id,
            vote=-1
            )
            db.session.add(downvote)
            db.session.commit()
            return downvote.to_dict()

        else:
            print('vote2>>>>', vote2)
            db.session.delete(vote2)
            downvote = Vote(
            user_id=current_user.id,
            annotation_id=id,
            vote=-1
            )
            db.session.add(downvote)
            db.session.commit()
            return {'successful': 'You have downvoted this annotation',"statusCode": 200}


@upvote_routes.route('/<int:id>/unvote',methods=['DELETE'])
@login_required
def unvote(id):
    vote = Vote.query.filter(Vote.user_id == current_user.id, Vote.annotation_id == id).first()
    if vote:
        db.session.delete(vote)
        db.session.commit()
        return vote.to_dict()
