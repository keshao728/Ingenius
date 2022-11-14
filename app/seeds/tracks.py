from app.models import db, Track
from datetime import date

def seed_tracks():
    track1 = Track(
        user_id=1,
        track_title="Skeletons",
        artist = "Keshi",
        album = "trilogy",
        release_date = date(2019,7,15),
        produced_by = "Keshi",
        lyrics =
        '''
        [Verse 1]
        Stressed out
        Feelin' lost and I don't know what to do now
        What I chose ain't really gonna work out
        Fallin' six feet underneath the floor now
        Think I'm gonna tap out (Ooh-ahh, ooh-ahh)

        [Pre-Chorus]
        Feel bad, go to bed
        Wake up even worse, yeah
        So sad, in my head
        Feelin' like a curse
        I need medicine, medicine, medicine
        [Chorus]
        All my skeletons out for the taking (Ooh-ahh)
        Yeah, I don't even know if I'ma make it
        I'm afraid of myself and I hate it (Ooh-ahh)
        All my skeletons out for the taking
        Somebody take 'em

        [Verse 2]
        I wanna run away
        The day to day is taking its toll on me
        And I'm tearin' at the seams (Ooh-ahh)
        Throw it all away
        Give a fuck about what they say
        I gotta disagree
        This ain't really fun for me

        [Pre-Chorus]
        Feel bad, go to bed
        Wake up even worse, yeah
        So sad, in my head
        Feelin' like a curse
        I need medicine, medicine, medicine

        [Chorus]
        All my skeletons out for the taking (Ooh-ahh)
        Yeah, I don't even know if I'ma make it
        I'm afraid of myself and I hate it (Ooh-ahh)
        All my skeletons out for the taking
        Somebody take 'em
        ''' ,
        track_art = 'https://t2.genius.com/unsafe/331x331/https%3A%2F%2Fimages.genius.com%2F0c68f4642eadc6d1160d3815cf66ec96.831x831x1.jpg',
        track_url = 'https://www.youtube.com/watch?v=w_6fWYY6pRw',
    )

    db.session.add(track1)
    db.session.commit()


def undo_tracks():
    db.session.execute('TRUNCATE tracks RESTART IDENTITY CASCADE;')
    db.session.commit()
