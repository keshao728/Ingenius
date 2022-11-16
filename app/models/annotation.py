from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func

class Annotation(db.Model):
    __tablename__ = 'annotations'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    track_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('tracks.id')))
    annotation_body = db.Column(db.String(500), nullable=False)
    startIndex = db.Column(db.Integer, nullable=False) # need to figure out how to do validate not allow on used index
    endIndex = db.Column(db.Integer, nullable=False)
    # vote_count = db.Column(db.Integer)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.current_timestamp())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.current_timestamp())
    annotation_user = db.relationship('User', back_populates='user_annotation')
    annotation_vote = db.relationship('Vote', back_populates='vote_annotation')
    annotation_track = db.relationship('Track', back_populates='track_annotation')

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "track_id": self.track_id,
            "annotation_body": self.annotation_body,
            "startIndex": self.startIndex,
            "endIndex": self.endIndex,
            # "vote_count": self.vote_count,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
