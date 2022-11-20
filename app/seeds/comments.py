from app.models import db, Comment,environment, SCHEMA

def seed_comments():
  comment1 = Comment(
    user_id=1,
    track_id=1,
    comment_body='He knows how to get people in their feelings that they hide…',
  )

  comment2 = Comment(
    user_id=3,
    track_id=1,
    comment_body='i wanna cry'
  )

  comment3 = Comment(
    user_id=2,
    track_id=4,
    comment_body='this song is everything to me'
  )
  comment4 = Comment(
    user_id=1,
    track_id=3,
    comment_body='this song at 3 am hits different 😭😭'
  )

  comment5 = Comment(
    user_id=2,
    track_id=5,
    comment_body='This song is a masterpiece'
  )

  all_comments = [comment1, comment2, comment3, comment4,comment5]
  saved_comments = [db.session.add(comment) for comment in all_comments]
  db.session.commit()

def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM comments;")
    db.session.commit()
