from app.models import db, Annotation,environment, SCHEMA

def seed_annotations():
    annotation1 = Annotation(
        user_id=1,
        track_id=1,
        annotation_body='The line derives from the colloquial phrase “skeleton in the closet,” which is used to refer to a hidden fact that if revealed, could damage a person’s reputation.',
        span_ids='15,16,17,18,19'
    )

    annotation2 = Annotation(
        user_id=1,
        track_id=1,
        annotation_body='This whole verse is just his thoughts on his life, and how little he cares/enjoys it. His day to day schedule is consistently beating down on him, and he wants to get out of it, disregarding the thoughts of others.',
        span_ids='21,22,23,24,25,26,27'
    )
    annotation3 = Annotation(
        user_id=1,
        track_id=2,
        annotation_body='In this song Keshi narrates a rather ‘casual relationship’ between two people over the course of 3 months and is a prequel to ‘Right Here’ where he “touches on the aftermath of what happened after the three months”.',
        span_ids='22'
    )
    annotation4 = Annotation(
        user_id=2,
        track_id=3,
        annotation_body='“I found a love for me” is melodically compared to the famous introduction phrase from Amazing Grace.',
        span_ids='2'
    )
    annotation5 = Annotation(
        user_id=3,
        track_id=3,
        annotation_body='Dancing in silence with your loved one is an important sign of affection— because dancing is a means of communication on its own without the need for words. As Brian Friel notes in the ending monologue of Dancing at Lughnasa : “Dancing as if language no longer existed because words were no longer necessary.”',
        span_ids='15'
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
