from app.models import db, Track
from datetime import date


def seed_tracks():
    track1 = Track(
        user_id=1,
        track_title="Skeletons",
        artist="Keshi",
        album="Skeletons",
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
        track_url='https://www.youtube.com/embed/w_6fWYY6pRw',
    )

    track2 = Track(
        user_id=1,
        track_title="Summer",
        artist="Keshi",
        album="Skeletons",
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
        track_url='https://www.youtube.com/embed/0JpMEztTCM0',
    )
    track3 = Track(
        user_id=2,
        track_title="Right Here",
        artist="Keshi",
        album="Right Here",
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
        track_url='https://www.youtube.com/embed/RivEsavD6ZE',
    )
    track4 = Track(
        user_id=2,
        track_title="Perfect",
        artist="Ed Sheeran",
        album="Perfect",
        release_date=date(2017, 5, 3),
        produced_by="​Benny Blanco, Ed Sheeran & Will Hicks",
        lyrics='''
        [Verse 1]
        I found a love for me
        Oh, darling, just dive right in and follow my lead
        Well, I found a girl, beautiful and sweet
        Oh, I never knew you were the someone waiting for me

        [Pre-Chorus]
        'Cause we were just kids when we fell in love
        Not knowing what it was
        I will not give you up this time
        But darling, just kiss me slow, your heart is all I own
        And in your eyes, you're holding mine

        [Chorus]
        Baby, I'm dancing in the dark with you between my arms
        Barefoot on the grass, listening to our favourite song
        When you said you looked a mess, I whispered underneath my breath
        But you heard it, darling, you look perfect tonight

        [Verse 2]
        Well I found a woman, stronger than anyone I know
        She shares my dreams, I hope that someday I'll share her home
        I found a love, to carry more than just my secrets
        To carry love, to carry children of our own

        [Pre-Chorus]
        We are still kids, but we're so in love
        Fighting against all odds
        I know we'll be alright this time
        Darling, just hold my hand
        Be my girl, I'll be your man
        I see my future in your eyes

        [Chorus 2]
        Baby, I'm dancing in the dark, with you between my arms
        Barefoot on the grass, listening to our favourite song
        When I saw you in that dress, looking so beautiful
        I don't deserve this, darling, you look perfect tonight

        [Instrumental]

        [Chorus 3]
        Baby, I'm dancing in the dark, with you between my arms
        Barefoot on the grass, listening to our favourite song
        I have faith in what I see
        Now I know I have met an angel in person
        And she looks perfect

        [Outro]
        I don't deserve this
        You look perfect tonight
        ''',
        track_art='https://t2.genius.com/unsafe/222x222/https%3A%2F%2Fimages.genius.com%2F35fad95b68ee49ae50eb71a918075e75.1000x1000x1.png',
        track_url='https://www.youtube.com/embed/BgoImewGGMo',
    )
    track5 = Track(
        user_id=2,
        track_title="Beautiful People",
        artist="Ed Sheeran",
        album="Beautiful People",
        release_date=date(2019, 6, 28),
        produced_by="Ed Sheeran, Max Martin, Shellback & Fred Again",
        lyrics='''
        [Intro: Ed Sheeran]
        We are, we are, we are

        [Verse 1: Ed Sheeran]
        L.A. on a Saturday night in the summer
        Sundown and they all come out
        Lamborghinis and their rented Hummers
        The party's on, so they're headin' downtown ('Round here)
        Everybody's lookin' for a come up
        And they wanna know what you're about
        Me in the middle with the one I love and
        We're just tryna figure everything out

        [Pre-Chorus: Ed Sheeran]
        We don't fit in well 'cause we are just ourselves
        I could use some help gettin' out of this conversation, yeah
        You look stunning, dear, so don't ask that question here
        This is my only fear: that we become

        [Chorus: Ed Sheeran]
        Beautiful people
        Drop top, designer clothes
        Front row at fashion shows
        "What d'you do?" and "Who d'you know?"
        Inside the world of beautiful people
        Champagne and rolled-up notes
        Prenups and broken homes
        Surrounded, but still alone
        Let's leave the party

        [Post-Chorus: Ed Sheeran]
        That's not who we are (We are, we are, we are)
        We are not beautiful
        Yeah, that's not who we are (We are, we are, we are)
        We are not beautiful (Beautiful)

        [Verse 2: Khalid]
        L.A., mmm
        Drove for hours last night and we made it nowhere (Nowhere, nowhere)
        I see stars in your eyes when we're halfway there (All night)
        I'm not fazed by all them lights and flashin' cameras
        'Cause with my arms around you, there's no need to care

        [Pre-Chorus: Khalid]
        We don't fit in well, we are just ourselves
        I could use some help gettin' out of this conversation, yeah
        You look stunning, dear, so don't ask that question here
        This is my only fear: that we become

        [Chorus: Ed Sheeran]
        Beautiful people
        Drop top, designer clothes
        Front row at fashion shows
        "What d'you do?" and "Who d'you know?"
        Inside the world of beautiful people
        Champagne and rolled-up notes
        Prenups and broken homes
        Surrounded, but still alone
        Let's leave the party

        [Post-Chorus: Ed Sheeran, Both, Khalid]
        That's not who we are (We are, we are, we are)
        We are not beautiful, yeah
        Yeah, that's not who we are (We are, we are, we are)
        We are not beautiful (Beautiful)

        [Outro: Ed Sheeran]
        We are, we are, we are
        We are not beautiful
        ''',
        track_art='https://t2.genius.com/unsafe/222x222/https%3A%2F%2Fimages.genius.com%2Fe99160501d4dc49fa6767573cdaf0aaa.1000x1000x1.jpg',
        track_url='https://www.youtube.com/embed/74yb9E3WY1I',
    )


    db.session.add(track1)
    db.session.add(track2)
    db.session.add(track3)
    db.session.add(track4)
    db.session.add(track5)

    db.session.commit()


def undo_tracks():
    db.session.execute('TRUNCATE tracks RESTART IDENTITY CASCADE;')
    db.session.commit()
