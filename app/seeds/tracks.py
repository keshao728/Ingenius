from app.models import db, Track
from datetime import date


def seed_tracks():
    track1 = Track(
        user_id=1,
        track_title="skeletons",
        artist="Keshi",
        album="skeletons",
        release_date=date(2019, 7, 15),
        produced_by="Keshi",
        lyrics='''
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
        ''',
        track_art='https://t2.genius.com/unsafe/331x331/https%3A%2F%2Fimages.genius.com%2F0c68f4642eadc6d1160d3815cf66ec96.831x831x1.jpg',
        track_url='https://www.youtube.com/watch?v=w_6fWYY6pRw',
    )

    track2 = Track(
        user_id=1,
        track_title="summer",
        artist="Keshi",
        album="skeletons",
        release_date=date(2019, 5, 13),
        produced_by="Keshi",
        lyrics='''
        [Intro]
        Feel like summer and I don't wanna miss you
        If we don’t touch lips, not an issue
        I don’t wanna talk 'bout nobody else
        Know I said no love but I want to
        Feel like summer and I don't wanna miss you
        If we don’t touch lips, not an issue
        I don’t wanna talk 'bout nobody else
        Know I said no love but I want to

        [Verse 1]
        One time, maybe twice in
        One night, it’s alright we’re
        Both alone so go together
        Kiss my wounds but not forever
        Fuck around, feel my heartbeat
        Fallin' down in the backseat
        Fill me up 'cause I'm runnin' on empty
        And it’s fine if we’re only pretending

        [Pre-Chorus]
        Three months is all we got
        Try not to fall in love
        Don’t think I've had enough but I said it’s fine by me

        [Chorus]
        Feel like summer and I don't wanna miss you
        If we don’t touch lips, not an issue
        I don’t wanna talk 'bout nobody else
        Know I said no love but I want to
        Feel like summer and I don't wanna miss you
        If we don’t touch lips, not an issue
        I don’t wanna talk 'bout nobody else
        Know I said no love but I want to

        [Verse 2]
        Said we goin' bye bye in a minute
        I'ma chill on the Southside, caught feelings
        When the leaves turn, no more favors
        Nice to meet ya, catch you later, yeah

        [Pre-Chorus]
        Three months is all we got
        Try not to fall in love
        Said I ain’t had enough but I think that’s fine by me

        [Chorus]
        Feel like summer and I don't wanna miss you
        If we don’t touch lips, not an issue
        I don’t wanna talk 'bout nobody else
        Know I said no love but I want to
        Feel like summer and I don't wanna miss you
        If we don’t touch lips, not an issue
        I don’t wanna talk 'bout nobody else
        Know I said no love but I want to

        [Outro]
        (Kiss my wounds but not forever
        Fill me up 'cause I'm runnin' on empty
        Kiss my wounds but not forever
        And it’s fine if we’re only pretending)
        ''',
        track_art='https://t2.genius.com/unsafe/222x222/https%3A%2F%2Fimages.genius.com%2F7ceb52b68969dc66835a05857636415d.800x800x1.jpg',
        track_url='https://youtu.be/0JpMEztTCM0',
    )
    track3 = Track(
        user_id=2,
        track_title="right here",
        artist="Keshi",
        album="right here",
        release_date=date(2019, 5, 13),
        produced_by="Keshi",
        lyrics='''
        [Verse 1]
        I think some words are overdue
        Could we just do it over?
        Can we just talk it out like friends?
        Because I need your shoulder
        I know we ended on the wrong terms
        But I said we're past it
        So why you textin' me with questions
        You don't gotta ask me? Like (Hey)
        "I know it's random, how you been?
        Do you remember 'bout this band you said you listened to?
        When we were younger, when we were softer
        When we were all about each other
        Hope life is treating you better, better, better"

        [Pre-Chorus]
        Girl, what's with that?
        Yo, cut the act
        'Cause I don't got time for laughs
        No, I do not want the past
        But if you are ever in need
        And God has you down on your knees
        And you do not know who to be
        Then go on and come home to me

        [Chorus]
        Because I'm here (Ooh-woah)
        If you need me, I'll be here (Ooh-woah)
        Right here (Ooh-woah)
        Said I'm here (Ooh-woah)
        If you need me, I'll be here (Ooh-woah)
        Right here (Ooh-woah)
        Oh

        [Verse 2]
        And how you likin' this new guy?
        I know you always want the new life
        I hope you takin' care of you like
        The way you cared for me in my time (Hey)
        See you got yourself some new friends
        No, you don't need to go to Houston
        You got me thinkin' back about then
        Girl, I wonder why you textin'

        [Pre-Chorus]
        Girl, what's with that?
        Yo, cut the act
        'Cause I don't got time for laughs
        No, I do not want the past
        But if you are ever in need
        And God has you down on your knees
        And you do not know who to be
        Then go on and come home to me

        [Chorus]
        Because I'm here (Ooh-woah)
        If you need me, I'll be here (Ooh-woah)
        Right here (Ooh-woah)
        Said I'm here (Ooh-woah)
        If you need me, I'll be here (Ooh-woah)
        Right here (Ooh-woah)
        Oh
        ''',
        track_art='https://t2.genius.com/unsafe/222x222/https%3A%2F%2Fimages.genius.com%2Fc04671d3a6d390614bec909a0c129169.830x830x1.jpg',
        track_url='https://www.youtube.com/watch?v=RivEsavD6ZE',
    )
    db.session.add(track1)
    db.session.add(track2)
    db.session.add(track3)
    db.session.commit()


def undo_tracks():
    db.session.execute('TRUNCATE tracks RESTART IDENTITY CASCADE;')
    db.session.commit()
