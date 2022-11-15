from flask import Blueprint, render_template, request, jsonify
from ..models import db, Annotation
from ..forms.annotation_form import AnnotationForm, valid_annotation
from flask_login import login_required, current_user


def validation_errors(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

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

  return annotation_dictionary["annotation_body"]

# user annotations [CARE: ROUTE (USERNAME? ID? WHAAT)]
@annotation_routes.route('/tracks/<int:userId>/annotations')
def annotations_by_userId(user_id):
  user_annotations = Annotation.query.filter(Annotation.user_id == user_id).all()
  annotation_dictionary = [annotation.to_dict() for annotation in user_annotations]

  return annotation_dictionary

# CREATE Annotation // NEED TO FIGURE OUT HOW TO SELECT WORDS AND STUFF *NOT FINISHED*
@annotation_routes.route('/tracks/<int:trackId>/annotation', methods=["POST"])
@login_required
def annotation_post(id):
  form = AnnotationForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    annotation = Annotation(
      user_id = current_user.id,
      track_id = id,
      annotation_body = form.annotation_body.data,
      # startIndex = idk what to put here,
      # endIndex = idk what to put here,
    )

    db.session.add(annotation)
    db.session.commit()
    return annotation.to_dict()
  return {'errors': validation_errors(form.errors), "statusCode": 401}

# EDIT Annotation
@annotation_routes.route('/annotations/<int:annotationid>', methods=["PUT"])
@login_required
def annotation_edit(id):
  form = AnnotationForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  annotation = Annotation.query.get(id)
  if current_user.id != form.user_id:
    return {'errors': 'Unauthorized', 'statusCode':401}

  if form.validate_on_submit():
    annotation.annotation_body = form.annotation_body.data

    db.session.commit()
    return annotation.to_dict()
  return {'errors': validation_errors(form.errors), "statusCode": 401}

# DELETE Annotation
@annotation_routes.route('/annotations/<int:annotationid>', methods=["DELETE"])
@login_required
def deleteannotation(id):
  delete_annotation = Annotation.query.get(id)

  if current_user.id != delete_annotation.user_id:
    return {'errors': 'Unauthorized', 'statusCode': 401}

  db.session.delete(delete_annotation)
  db.session.commit()
  return {
    "message": "Successfully deleted",
    "statusCode": 200
    }
