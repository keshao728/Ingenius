from app.models import db, Annotation,environment, SCHEMA

def seed_annotations():
    annotation1 = Annotation(
        user_id=1,
        track_id=1,
        annotation_body='first annotation',
        span_ids='1,2,3'
    )

    annotation2 = Annotation(
        user_id=1,
        track_id=1,
        annotation_body='second annotation',
        span_ids='4,5,6'
    )
    annotation3 = Annotation(
        user_id=1,
        track_id=2,
        annotation_body='third annotation',
        span_ids='8,9,10'
    )
    annotation4 = Annotation(
        user_id=2,
        track_id=2,
        annotation_body='fourth annotation',
        span_ids='1,2,3'
    )
    annotation5 = Annotation(
        user_id=3,
        track_id=3,
        annotation_body='fifth annotation',
        span_ids='15,16,17'
    )

    db.session.add(annotation1)
    db.session.add(annotation2)
    db.session.add(annotation3)
    db.session.add(annotation4)
    db.session.add(annotation5)
    db.session.commit()

def undo_annotations():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.annotations RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM annotations;")
    db.session.commit()
