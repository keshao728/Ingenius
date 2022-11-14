from flask import Blueprint,render_template,redirect
from ..models.db import db

comment_routes = Blueprint('tracks', __name__)

@comment_routes('/<:artist>-<:song>')
def comments():
    # return render_template("meowmeowmeowmeowmeowmeowmeowmeowmeow")
        #if form.errors:
    #   return '{
    #   "message": "Validation Error",
    #   "statusCode": 400,
    #   "errors": {
            #"message": "Track couldn't be found",
            #"statusCode": 404
    #       }
    #   }'
    pass
