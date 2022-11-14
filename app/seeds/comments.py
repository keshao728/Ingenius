from app.models import db, Comment

def seed_comments():
  comment1 = Track(
    user_id=1,
    track_id=1,
    comment_body='hello my name is kelly and this is a sad boy song',
  )

    
  db.session.add(comment1)


def undo_comments():
    db.session.execute('TRUNCATE tracks RESTART IDENTITY CASCADE;')
    db.session.commit()

  # all_comments = [comment1]
  # saved_comments = [db.session.add(comment) for comment in all_comments]
  # db.session.commit()
