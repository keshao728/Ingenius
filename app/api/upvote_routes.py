from flask import Blueprint,render_template
from ..models.db import db

upvote_routes = Blueprint('upvotes',__name__)

@upvote_routes('/:id/upvote')
def upvote():
    pass

@upvote_routes('/:id/downvote')
def downvote():
    pass

@upvote_routes('/:id/unvote')
def unvote():
    pass
