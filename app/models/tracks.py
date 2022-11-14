from .db import db
from sqlalchemy.sql import func

class Track(db.Model):
    __tablename__ = 'tracks'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    track_title = db.Column(db.String(100), nullable=False)
    artist = db.Column(db.String(50), nullable=False)
    album = db.Column(db.String, nullable=False)
    release_date = db.Column(db.Date)
    lyrics = db.Column(db.Text, nullable=False)
    track_art = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.current_timestamp())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.current_timestamp())

    track_user = db.relationship('User', back_populates='user_track')
    track_annotation = db.relationship('Annotation', back_populates='annotation_track')
    track_comment = db.relationship('Comment', back_populates='comment_track')
