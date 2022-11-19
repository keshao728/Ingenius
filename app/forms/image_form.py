from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import URL


class ImageForm(FlaskForm):
    profile_img = StringField(validators=[URL(require_tld=True, message='Must be a valid URL')])
    # banner_img = StringField(validators=[URL(require_tld=True, message='Must be a valid URL')])
