from app.models import db, Vote

def seed_vote():
    vote1 = Vote(
        annotation_id=1,
        user_id=1,
        vote=1,
    )
    vote2 = Vote(
        annotation_id=1,
        user_id=2,
        vote=-1,
    )
    vote3 = Vote(
        annotation_id=1,
        user_id=3,
        vote=1,
    )
    vote4 = Vote(
        annotation_id=2,
        user_id=1,
        vote=1,
    )
    vote5 = Vote(
        annotation_id=2,
        user_id=2,
        vote=1,
    )

    db.session.add(vote1)
    db.session.add(vote2)
    db.session.add(vote3)
    db.session.add(vote4)
    db.session.add(vote5)
    db.session.commit()

def undo_vote():
    db.session.execute('TRUNCATE votes RESTART IDENTITY CASCADE;')
    db.session.commit()
