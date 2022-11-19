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
    span_ids = db.Column(db.String, nullable=False)
    # startIndex = db.Column(db.Integer, nullable=False) # need to figure out how to do validate not allow on used index
    # endIndex = db.Column(db.Integer, nullable=False)
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
            # "startIndex": self.startIndex,
            # "endIndex": self.endIndex,
            # "vote_count": self.vote_count,
            "span_ids": self.span_ids,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "user": self.annotation_user.to_dict(),
            "track": self.annotation_track.to_dict(),
            "vote_count": len(self.annotation_vote),
            # "votes": self.annotation_vote.to_dict(),
        }
