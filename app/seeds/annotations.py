from app.models import db, Annotation,environment, SCHEMA

def seed_annotations():
    annotation1 = Annotation(
        user_id=1,
        track_id=1,
        annotation_body='first annotation',
        startIndex=1,
        endIndex=10,
    )

    annotation2 = Annotation(
        user_id=1,
        track_id=1,
        annotation_body='second annotation',
        startIndex=11,
        endIndex=20,
    )
    annotation3 = Annotation(
        user_id=1,
        track_id=2,
        annotation_body='third annotation',
        startIndex=5,
        endIndex=15,
    )
    annotation4 = Annotation(
        user_id=2,
        track_id=2,
        annotation_body='fourth annotation',
        startIndex=16,
        endIndex=30,
    )
    annotation5 = Annotation(
        user_id=3,
        track_id=3,
        annotation_body='fifth annotation',
        startIndex=25,
        endIndex=35,
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
