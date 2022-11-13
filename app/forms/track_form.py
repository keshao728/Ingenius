from flask_wtf import FlaskForm
from wtforms import StringField, DateField, TextAreaField
from wtforms.validators import DataRequired, ValidationError


def valid_track_title(form, field):
    track_name = field.data
    if len(track_name) < 1 or len(track_name) > 100:
        raise ValidationError('Track title must be between 1 and 100 characters')

def valid_artist(form, field):
    artist = field.data
    if len(artist) < 1 or len(artist) > 50:
        raise ValidationError('Artist name must be between 1 and 50 characters')

def valid_lyrics(form, field):
    lyrics = field.data
    if len(lyrics) < 1 or len(lyrics) > 10000:
        raise ValidationError('Lyrics must be between 1 and 10000 characters')

class TrackForm(FlaskForm):
    track_title = StringField("Title", validators=[DataRequired(), valid_track_title])
    artist = StringField("Artist", validators=[DataRequired(), valid_artist])
    release_date = DateField("Release Date", validators=DataRequired())
    lyrics = TextAreaField("Lyrics", validators=[DataRequired(), valid_lyrics])
