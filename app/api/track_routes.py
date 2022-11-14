from flask import Blueprint, render_template, redirect, request
from ..models import db, Track, Comment, Annotation, Vote, User
from ..forms import TrackForm, AnnotationForm, CommentForm
from flask_login import login_required, current_user


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
@login_required
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


@track_routes('/tracks/<int:id>', methods=["PUT"])
@login_required
def edittrack(id):
    form = TrackForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    track = Track.query.get(id)
    if current_user.id != track.user_id:
        return {'errors': 'Unauthorized', 'statusCode':401}

    if not track:
        return {'errors': 'Track not found', 'statusCode':404}

    if form.validate_on_submit():
        track.track_title = form.track_title.data
        track.artist = form.artist.data
        track.album = form.album.data
        track.release_date = form.release_date.data
        track.produced_by = form.produced_by.data
        track.lyrics = form.lyrics.data
        track.track_art = form.track_art.data
        track.track_url = form.track_url.data

        db.session.commit()
        return track.to_dict()
    return {'errors': validation_errors(form.errors), "statusCode": 401}

# @track_routes('/tracks/<int:id>', methods=["DELETE"])
# @login_required
# def deletetrack(id):
#     delete_track = Track.query.get(id)

#     if not delete_track:
#         return {'errors': 'Track not found', 'statusCode':404}

#     if current_user.id != delete_track.user_id:
#         return {'errors': 'Unauthorized', 'statusCode':401}


#     db.session.delete(delete_track)
#     db.session.commit()
#     return {'
#         "message": "Successfully deleted",
#         "statusCode": 200
#         }'
