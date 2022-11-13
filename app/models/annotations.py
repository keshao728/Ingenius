from .db import db
from sqlalchemy.sql import func

class Annotation(db.Model):
    __tablename__ = 'annotations'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    track_id = db.Column(db.Integer, db.ForeignKey('track.id'))
    annotation_body = db.Column(db.String(500), nullable=False)
    startIndex: db.Column(db.Integer, nullable=False)
    endIndex: db.Column(db.Integer, nullable=False)
    vote_count = db.Column(db.Integer)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.current_timestamp())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.current_timestamp())
