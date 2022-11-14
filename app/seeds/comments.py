from app.models import db, Comment

def seed_comments():
  comment1 = Comment(
    user_id=1,
    track_id=1,
    comment_body='hello my name is kelly and this is a sad boy song',
  )
  
  comment2 = Comment(
    user_id=3,
    track_id=1,
    comment_body='hello my name is andrew and i am sad'
  )

  comment3 = Comment(
    user_id=2,
    track_id=4,
    comment_body='hello my name is simon and i am perfect'
  )
  comment4 = Comment(
    user_id=1,
    track_id=3,
    comment_body='hello my name is kelly and i am just a sad little girl letsgooooooooooooOooooO'
  )

  comment5 = Comment(
    user_id=2,
    track_id=5,
    comment_body='generic comment'
  )

  all_comments = [comment1, comment2, comment3, comment4]
  saved_comments = [db.session.add(comment) for comment in all_comments]
  db.session.commit()
    
def undo_comments():
    db.session.execute('TRUNCATE tracks RESTART IDENTITY CASCADE;')
    db.session.commit()
