from flask import Blueprint,render_template,redirect
from ..models.db import db

track_routes = Blueprint('tracks', __name__)

@track_routes('/<:artist>-<:song>')
def tracks():
    # return render_template("tosomething")
    pass

@track_routes('/<:artist>')
def songbyartist():
    #   query = dbforsong.query.filter(dbforsong.userid.is("artist")).all()
    #   return render_template("tosomething" query=query)
    pass

@track_routes('/<:artist>-<:song>',methods=["POST"])
def createtrack():
    #form = formforsong()
    #if form.validate_on_submit():
    #   data = dbforsong()
    #   form.populate_obj(data)
    #   db.session.add(data)
    #   db.session.commit()
    #   return redirect ('/tosomewhere?')
    #if form.errors:(note:body validation)
    #   return '{
    #   "message": "Validation Error",
    #   "statusCode": 400,
    #   "errors": {
    #     "title": "Song title is required",
    #     "url": "Audio is required"
    #       }
    #   }'
    #if form.errors:(note:authorization validation)
    #   return '
    #    {
    #   "message": "Artist couldn't be found",
    #   "statusCode": 404
    #   }
    #   '
    pass

@track_routes('/<:artist>-<:song>/edit',methods=["PUT"])
def edittrack():
    #form = formforsong()
    #if form.validate_on_submit():  line 44 to 49 might be different from above
    #   data = dbforsong()
    #   form.populate_obj(data)
    #   db.session.add(data)
    #   db.session.commit()
    #   return redirect ('/tosomewhere?')
    #if form.errors:(note:body validation)
    #   return '{
    #   "message": "Validation Error",
    #   "statusCode": 400,
    #   "errors": {
    #     "title": "Song title is required",
    #     "url": "Audio is required"
    #       }
    #   }'
    #if form.errors:(note:authorization validation)
    #   return '
    #    {
    #   "message": "Artist couldn't be found",
    #   "statusCode": 404
    #   }
    #   '
    pass

@track_routes('/<:artist>-<:song>',methods=["DELETE"])
def deletetrack():
    # query = dbforsong.query.filter(dbforsong.userid.is("artist") and dbforsong.id.is("song")).all() note:artist and song can be grab from the link
    #if query:
    #   db.session.delete(query)
    #   db.session.commit()
    #   return '{
    #       "message": "Successfully deleted",
    #       "statusCode": 200
    #       }'
    #else
    #    return '{
            # "message": "Track couldn't be found",
            # "statusCode": 404
            # }'
    pass
