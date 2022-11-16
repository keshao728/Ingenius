from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func

class Track(db.Model):
    __tablename__ = 'tracks'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    track_title = db.Column(db.String(100), nullable=False)
    artist = db.Column(db.String(50), nullable=False)
    album = db.Column(db.String, nullable=True)
    release_date = db.Column(db.Date)
    produced_by = db.Column(db.String)
    lyrics = db.Column(db.Text, nullable=False)
    track_art = db.Column(db.String, nullable=True)
    track_url = db.Column(db.String, nullable=True)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.current_timestamp())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.current_timestamp())

    track_user = db.relationship('User', back_populates='user_track')
    track_annotation = db.relationship('Annotation', back_populates='annotation_track')
    track_comment = db.relationship('Comment', back_populates='comment_track')


    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "track_title": self.track_title,
            "artist": self.artist,
            "album": self.album,
            "release_date": self.release_date,
            "produced_by": self.produced_by,
            "lyrics": self.lyrics,
            "track_art": self.track_art,
            "track_url": self.track_url,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
