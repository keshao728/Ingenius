from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func

class Comment(db.Model):
    __tablename__ = 'comments'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    track_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('tracks.id')))
    # username = db.Column(db.String(40), db.ForeignKey('users.username'))
    comment_body = db.Column(db.String(500), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.current_timestamp())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.current_timestamp())


    # non_session_username = db.Column(db.String(40), nullable=True, unique=True)

    comment_user = db.relationship('User', back_populates='user_comment')
    comment_track = db.relationship('Track', back_populates='track_comment')

    def to_dict(self):

        return {
            "id": self.id,
            # "non_session_username": self.non_session_username,
            "user_id": self.user_id,
            "track_id": self.track_id,
            # "username" : self.username,
            "comment_user": self.comment_user.to_dict(),
            "comment_body": self.comment_body,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
