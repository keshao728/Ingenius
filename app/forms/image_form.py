from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import URL


class ImageForm(FlaskForm):
    # profile_img = StringField('profile_img', validators=[URL()])
    # banner_img = StringField('banner_img', validators=[URL()])

    profile_img = URL('profile_img')
    banner_img = URL('banner_img')
