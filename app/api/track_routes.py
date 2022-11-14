from flask import Blueprint, render_template, redirect, request
from ..models import db, Track, Comment, Annotation, Vote, User
from ..forms import TrackForm, AnnotationForm, CommentForm


def validation_errors(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


track_routes = Blueprint('tracks', __name__)

# CHANGE THE API DOCUMENTATION ON ID!!!!!

# individual tracks


@track_routes('/tracks/<int:id>')
def tracks(id):
    track = Track.query.get(id)
    track_dictionary = track.to_dict()

    comments = Comment.query.filter(Comment.track_id == id).all()
    track_dictionary['Comments'] = [comment.to_dict() for comment in comments]

    annotation = Annotation.query.filter(Annotation.track_id == id).all()
    track_dictionary['Annotations'] = [annotation.to_dict()
                                       for annotation in annotation]

    return track_dictionary


@track_routes('/new', methods=["POST"])
def create_track():
    form = TrackForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        track = Track(
            track_title=form.track_title.data,
            artist=form.artist.data,
            album=form.album.data,
            release_date=form.release_date.data,
            produced_by=form.produced_by.data,
            lyrics=form.lyrics.data,
            track_art=form.track_art.data,
            track_url=form.track_url.data,
        )
        db.session.add(track)
        db.session.commit()
        return track.to_dict()
    return {'errors': validation_errors(form.errors), "statusCode": 401}


@track_routes('/<:artist>-<:song>/edit', methods=["PUT"])
def edittrack():
    #form = formforsong()
    # if form.validate_on_submit():  line 44 to 49 might be different from above
    #   data = dbforsong()
    #   form.populate_obj(data)
    #   db.session.add(data)
    #   db.session.commit()
    #   return redirect ('/tosomewhere?')
    # if form.errors:(note:body validation)
    #   return '{
    #   "message": "Validation Error",
    #   "statusCode": 400,
    #   "errors": {
    #     "title": "Song title is required",
    #     "url": "Audio is required"
    #       }
    #   }'
    # if form.errors:(note:authorization validation)
    #   return '
    #    {
    #   "message": "Artist couldn't be found",
    #   "statusCode": 404
    #   }
    #   '
    pass


@track_routes('/<:artist>-<:song>', methods=["DELETE"])
def deletetrack():
    # query = dbforsong.query.filter(dbforsong.userid.is("artist") and dbforsong.id.is("song")).all() note:artist and song can be grab from the link
    # if query:
    #   db.session.delete(query)
    #   db.session.commit()
    #   return '{
    #       "message": "Successfully deleted",
    #       "statusCode": 200
    #       }'
    # else
    #    return '{
    # "message": "Track couldn't be found",
    # "statusCode": 404
    # }'
    pass
