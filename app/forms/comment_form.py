from flask_wtf import FlaskForm
from wtforms import TextAreaField
from wtforms.validators import DataRequired, ValidationError

def valid_comment(form, field):
    comment = field.data
    if len(comment) < 1 or len(comment) > 500:
        raise ValidationError('Lyrics must be between 1 and 500 characters')

class CommentForm(FlaskForm):
    comment_body = TextAreaField("Comment", validators=[DataRequired(), valid_comment])
