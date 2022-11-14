from flask import Blueprint,render_template,redirect
from ..models.db import db

comment_routes = Blueprint('tracks', __name__)

@comment_routes('/<int:id>')
def comments():
    # return render_template("meowmeowmeowmeowmeowmeowmeowmeowmeow")
        #if form.errors:
    #   return '{
    #   "message": "Validation Error",
    #   "statusCode": 400,
    #   "errors": {
            #"message": "Track couldn't be found",
            #"statusCode": 404
    #       }
    #   }'
    pass

@comment_routes('/new',methods=["POST"])
def create_comments():
    #form = formforcomment()
    #if form.validate_on_submit():
    #   data = dbforcomment()
    #   form.populate_obj(data)
    #   db.session.add(data)
    #   db.session.commit()
    #   return redirect ('/tosomewhere?')
    #if form.errors:
    #   return '{
    #   "message": "Validation Error",
    #   "statusCode": 400,
    #   "errors": {
                #"body": "Comment body text is required"
                #"statusCode": 404
    #       }
    #   }'
    pass

@comment_routes('/<int:id>',methods=["PUT"])
def edit_comment():
    #form = formforcomment()
    #if form.validate_on_submit():
    #   data = dbforcomment()
    #   form.populate_obj(data)
    #   db.session.add(data)
    #   db.session.commit()
    #   return redirect ('/tosomewhere?')
    #if form.errors:(note:body validation)
    #   return '{
    #   "message": "Validation Error",
    #   "statusCode": 400,
    #   "errors": {
    #     "body": "Comment body text is required"
    #       }
    #   }'
    pass

@comment_routes('/<int:id>',methods=["DELETE"])
def delete_comment():
    # query = dbforcomment.query.filter(dbforcomment.userid.is("artist") and dbforcomment.id.is("song")).all()
    #   db.session.delete(query)
    #   db.session.commit()
    #   return '{
    #       "message": "Successfully deleted",
    #       "statusCode": 200
    #       }'
    #else
    #    return '{
            # "message": "Comment couldn't be found",
            # "statusCode": 404
            # }'
    pass
