from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func

class Vote(db.Model):
  __tablename__ = 'votes'

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  annotation_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('annotations.id')))
  user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
  vote = db.Column(db.Integer)
  created_at = db.Column(db.DateTime(timezone=True), server_default=func.current_timestamp())
  updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.current_timestamp())

  vote_user = db.relationship('User', back_populates='user_vote')
  vote_annotation = db.relationship('Annotation', back_populates='annotation_vote')


  def to_dict(self):
    return {
      "id": self.id,
      "annotation_id": self.annotation_id,
      "user_id": self.user_id,
      "vote": self.vote,
      "created_at": self.created_at,
      "updated_at": self.updated_at
    }
