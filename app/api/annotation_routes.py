from flask import Blueprint, render_template, request, jsonify
from ..models import db, Annotation
from ..forms.annotation_form import AnnotationForm, valid_annotation
# from flask_login import login_required, current_user


annotation_routes = Blueprint('annotations', __name__)

# FIGURE OUT THESE 

# @annotation_routes.route('/')
# def annotation():
#   # annotation = Annotation.query.get(id)
#   return {"hello":  "world"}

# individual annotation
@annotation_routes.route('/<int:id>')
def annotation_by_id(id):
  annotation = Annotation.query.get(id)
  annotation_dictionary = annotation.to_dict()

  return annotation_dictionary

# create annotation
# @annotation_routes.route('/')



  

  

# @annotation_routes.route('/annotation')
# def annotation_post():
# #   form = AnnotationForm()
# #   return render_template('', form=form)
#   pass

# @annotation_routes.route('/annotation', methods=["POST"])
# def annotation_post():
#   # form = AnnotationForm()
#   # if form.validate_on_submit():
#   #   data = AnnotationForm()
#   #   form.populate_obj(data)
#   #   db.session.add(data)
#   #   db.session.commit()
#   #   return render_template('', data=data)
#   pass