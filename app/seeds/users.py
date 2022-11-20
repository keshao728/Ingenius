from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='John-Leeeeeeee',
        email='john@aa.io',
        password='password',
        profile_img='https://64.media.tumblr.com/eca7c1a0c4df7688d52cf781e53142d1/3e3c47d5fa9f904a-71/s540x810/1ee4b3b16a25a49c4f61326f895cbf341088041e.jpg'
        # banner_img='https://64.media.tumblr.com/eca7c1a0c4df7688d52cf781e53142d1/3e3c47d5fa9f904a-71/s540x810/1ee4b3b16a25a49c4f61326f895cbf341088041e.jpg'
        )

    marnie = User(
        username='Jakey',
        email='jake@aa.io',
        password='password',
        profile_img='https://aniyuki.com/wp-content/uploads/2022/05/aniyuki-anya-forger-image-55-1536x864.jpg'
        # banner_img='https://aniyuki.com/wp-content/uploads/2022/05/aniyuki-anya-forger-image-55-1536x864.jpg'
        )
    bobbie = User(
        username='d-Nash',
        email='david@aa.io',
        password='password',
        profile_img='https://media.tenor.com/zayuqO6PpXMAAAAC/anya-heh.gif'
        # banner_img='https://media.tenor.com/zayuqO6PpXMAAAAC/anya-heh.gif'
        )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
