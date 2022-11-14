from .db import db
from sqlalchemy import func




class Vote(db.Model):
  __tablename__ = 'votes'

  id = db.Column(db.Integer, primary_key=True)
  annotation_id = db.Column(db.Integer, db.ForeignKey('annotations.id'))
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
  vote = db.Column(db.Integer)
  created_at = db.Column(db.DateTime(timezone=True), server_default=func.current_timestamp())
  updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.current_timestamp())

  vote_user = db.relationship('User', back_populates='user_vote')
  vote_annotation = db.relationship('Annotation', back_populates='annotation_vote')




