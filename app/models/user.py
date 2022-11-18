from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    profile_img = db.Column(db.String(255), nullable=True)
    banner_img = db.Column(db.String(255), nullable=True)
    hashed_password = db.Column(db.String(255), nullable=False)

# RESET THESE STUFF
    user_track = db.relationship('Track', back_populates='track_user')
    user_annotation = db.relationship('Annotation', back_populates='annotation_user')
    user_vote = db.relationship('Vote', back_populates='vote_user')
    user_comment = db.relationship('Comment', back_populates='comment_user')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "profile_img": self.profile_img,
            "banner_img": self.banner_img,
            # "my_comment": [comment.to_dict() for comment in self.user_comment] if self.user_comment else [],
            # "my_annotation": [annotation.to_dict() for annotation in self.user_annotation] if self.user_annotation else [],
            # "my_upload": [track.to_dict() for track in self.user_track] if self.user_track else [],
        }
