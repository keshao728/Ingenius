from .db import db
from sqlalchemy.sql import func

class Track(db.Model):
    __tablename__ = 'tracks'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    track_title = db.Column(db.String(100), nullable=False)
    artist = db.Column(db.String(50), nullable=False)
    release_date = db.Column(db.Date)
    lyrics = db.Column(db.Text, nullable=False)
    upvote = db.Column(db.Integer)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.current_timestamp())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.current_timestamp())
