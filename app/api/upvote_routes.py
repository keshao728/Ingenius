from flask import Blueprint,render_template
from ..models.db import db

upvote_routes = Blueprint('upvotes',__name__)


