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

    track6 = Track(
        user_id=3,
        track_title="Shouldn't Be",
        artist="Luke Chiang",
        album="",
        release_date=date(2019, 5, 1),
        produced_by="Stephen Moyer",
        lyrics='''
        [Intro]
        I can't stop feeling like none of this matters at

        [Verse 1]
        Fool around, tell me words
        That you don't mean
        I'm already numb to it
        I'm already numb to it
        Feed me lies, tear me up, break me down
        I don't wanna be playin' these games
        [Pre-Chorus]
        I'm already used to them
        I'm already used to you being this cold

        [Chorus]
        But keepin' you close shouldn't be hard
        If you were honest when you said you missed me
        You've played with my pride
        Making me feel like we had something real

        [Verse 2]
        I know we've been over this, it's nothin' new
        You're still gonna be leaving me here
        It's easier hatin' you than missing you
        But I don't wanna be feelin' this way

        [Pre-Chorus]
        I'm already through with it
        I'm already tired of thinking at all

        [Chorus]
        'Cause keepin' you close shouldn't be hard
        If you were honest when you said you missed me
        You've played with my pride
        Making me feel like we had something real
        And making you stay shouldn't feel wrong
        This is the last time I'll ask you to listen
        I've played all my cards
        Would you feel a thing if you saw me right now?

        [Bridge]
        No matter what I say to you, you're gone
        I've been tryin' in vain to hold on
        No matter what I say

        [Chorus]
        Keepin' you close shouldn't be hard
        If you were honest when you said you've missed me
        You've played with my pride
        Making me feel like we had something real
        And making you stay shouldn't feel wrong
        This is the last time I'll ask you to listen
        I've played all my cards
        Would you feel a thing if you saw me right now?
        ''',
        track_art='https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2F60a28ef85642ff232562de00c1630a99.500x500x1.jpg',
        track_url='https://www.youtube.com/embed/hsLiJP2rqS8',
    )

    track7 = Track(
        user_id=3,
        track_title="Town and Country",
        artist="The Sinful Savage Tigers",
        album="Rain is the Soup of the Dogs in Heaven",
        release_date=date(2009, 5, 19),
        produced_by="",
        lyrics='''
        Make me your first time
        And I'll make a little promise that I’m gonna make you mine
        And well these wheels beat a path to your door
        If I didn't know no better, I'd say that what they’re there for
        And teach me the words to say
        And I'll say 'em really sweet in an extra special way
        And hey, each moment that pass us by
        Is never comin' back, it don't matter how we try to know
        Was it long ago? Was is so, was it so, was it so long ago?

        And what was that song?
        It was a back flip sigh, thunder kid sixty-five
        Who was that boy, oh that you used to talk to
        I didn't know
        No one ever knew who their way
        You looked at me funny, honey
        As we drove all night to another town and country
        Marry me on a cloudless day
        You can wear a pretty dress that we buy along the way
        From the little chapel with a pope inside
        Got a garden at the back with a swing set and a slide
        Honey, move anywhere that serves cold beer
        And we'll stand, we'll holler, and we’ll sing, and we’ll cheer
        'Cause we’re not leavin' 'till we drain our cups
        Turn the lights off, the band is packin' up to go
        Have they far to go?
        Was it so, was it so, was it so long ago?

        And what was that song?
        It was a back flip sigh, thunder kid sixty-five
        Who was that boy, oh that you used to talk to
        I didn’t know
        No one ever knew who their way
        You looked at me funny, honey
        As we spent all night...

        Flat on our backs starin' at the starry dome
        Orion's belt is gettin' tighter and his arrows have all flown
        And sewn up the edges of space and time
        Where there ain't no reason, we're sure there ain't no rhyme
        Would ya marry me in a gas balloon?
        We could float up to the stars, take pictures of the moon
        And soon the earth is gonna fall into the sun
        Fry all the saints and the sinners, everyone we know
        And even those we don't
        Was it so, was it so, was it so long ago?
        And what was that song?
        It was a back flip sigh, thunder kid sixty-five
        Who was that boy, oh that you used to talk to
        I didn't know
        No one ever knew who their way
        You looked at me funny, honey
        As we spent all night in another town and country
        In another town and country
        ''',
        track_art='https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2Fed7966b5b6444840b9a6307c66345d0f.500x500x1.jpg',
        track_url='https://www.youtube.com/embed/cgJvMWj3cLc',
    )

    track8 = Track(
        user_id=3,
        track_title="Panther",
        artist="Made in Heights",
        album="Without My Enemy What Would I Do",
        release_date=date(2014, 11, 19),
        produced_by="Sabzi",
        lyrics='''
        [Chorus]
        Feel you get closer now
        Closer than you've been
        But I need you in my arms, my eyes, my soul
        My sunlit skies
        Yeah, I need you in my arms now
        Closer than you've been
        I need you in my life, my eyes, my soul
        My sunlit skies

        [Verse 1]
        Just a quick wick, summer flame, burnin' in the glass
        Gotta dig down low to stay lit
        Crazy can't stay long and you wanna move fast but
        Good things take wit
        Gimme your devotion, baby
        And we'll set the charms that thrill me so good
        Feel the race of our hearts strip the paint from the cars
        Steady as we move
        Don't got money on my mind, go and search my thoughts
        Only green on my riverbanks
        Throw my pennies on your line to fill you up
        Pour my love down to make it rain
        [Pre-Chorus]
        'Cause I need you in my arms, my eyes, my soul
        My sunlit skies
        Yeah, I need you in my arms (Ooh, oh-oh-oh)

        [Chorus]
        Feel you get closer now
        Much closer than you've been
        But I need you in my arms, my eyes, my soul
        My sunlit skies
        Yeah, I need you in my arms now
        Closer than you've been
        I need you in my life, my eyes, my soul
        My sunlit skies

        [Instrumental Bridge]

        [Verse 2]
        Got nobody on my mind, go and search my thoughts
        Only you on my riverbanks
        Throw my hours on your line, no need to rush
        Pour my love down to make it rain

        [Pre-Chorus]
        'Cause I need you in my arms, my eyes, my soul
        My sunlit skies
        Yeah, I need you in my arms (Ooh, ooh-oh-oh)

        [Chorus]
        Feel you get closer now
        Much closer than you've been
        But I need you in my arms, my eyes, my soul
        My sunlit skies
        Yeah, I need you in my arms now
        Closer than you've been
        I need you in my life, my eyes, my soul
        My sunlit skies
        I need you in my arms
        ''',
        track_art='https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2F55f485e305b226ef7db504e95d944fa0.1000x1000x1.jpg',
        track_url='https://www.youtube.com/embed/xTl6K8IRoUk',
    )

    track9 = Track(
        user_id=3,
        track_title="Caroline",
        artist="Colter Wall",
        album="Imaginary Appalachia",
        release_date=date(2015, 6, 2),
        produced_by="Jason Plumb",
        lyrics='''
        [Chorus 1]
        There's a place where the sun doth shine
        And the birds keep time with the pines up yonder
        That's the home of my Caroline
        She's dancing in the sky

        [Verse 1]
        Oh how sweet when we meet
        On the golden streets of the great wide valley
        These old chains around my feet
        They're pulling me back down
        [Chorus 2]
        Caroline, oh Caroline
        I'll be home just any old time
        The grave in the garden won't be satisfied
        Till your name's next to mine

        [Verse 2]
        And my bones do break and my hands do shake
        As I lie in the wake of time's cruel slaughter
        But if I die before I wake
        I'm gonna see my Caroline

        [Chorus 2]
        Caroline, oh Caroline
        I'll be home just any old time
        The grave in the garden won't be satisfied
        Till your name's next to mine

        [Chorus 1]
        There's a place where the sun doth shine
        And the birds keep time with the pines up yonder
        That's the home of my Caroline
        She's dancing in the sky

        [Chorus 2]
        Caroline, oh Caroline
        I'll be home just any old time
        The grave in the garden won't be satisfied
        Till your name's next to mine

        Caroline, my Caroline
        I'll be home just any old time
        The grave in the garden won't be satisfied
        Until your name is next to mine
        ''',
        track_art='https://t2.genius.com/unsafe/286x286/https%3A%2F%2Fimages.genius.com%2F88c87621d8189973e5d542f34fd93aa5.1000x1000x1.jpg',
        track_url='https://www.youtube.com/embed/Q82-5XizdiQ',
    )

    track10 = Track(
        user_id=3,
        track_title="Pieces of You",
        artist="nothing, nowhere",
        album="",
        release_date=date(2014, 10, 6),
        produced_by="nothing, nowhere",
        lyrics='''
        [Intro]
        All the pieces of you fit perfectly in the hole inside my heart
        And I'd be lying if I tried telling you that you're not everything I want

        [Verse 1]
        Yeah, I keep a picture of you in my pocket
        And last night, I almost lost it
        I used to think I should quit you
        But I'm so addicted, it hurts
        Remember the nights that we would stare at the lights by the train tracks
        And you would always listen to Dashboard
        That was the first time that I realized
        [Chorus]
        All the pieces of you fit perfectly in the hole inside my heart
        And I'd bе lying if I tried telling you that you're not еverything I want
        'Cause I tried running away
        But I came right back today
        Just hoping that you'd let me say, "I'm sorry"
        'Cause all the pieces of you fit perfectly in the hole inside my heart
        Inside my heart

        [Verse 2]
        I wasn't ready for this, looking in hindsight
        It's like bringing a knife to a gunfight
        And sometimes, I listen to your voicemails
        Need something to fill the void
        Remember the night we almost got in a fight in your driveway?
        And you told me that you needed space
        That was the last time that I realized

        [Chorus]
        All the pieces of you fit perfectly in the hole inside my heart
        And I'd be lying if I tried telling you that you're not everything I want
        'Cause I tried running away
        But I came right back today
        Just hoping that you'd let me say, "I'm sorry" (Sorry)
        'Cause all the pieces of you fit perfectly in the hole inside my heart
        Inside my heart
        (Inside my, inside my, inside my heart)

        [Outro]
        Remember the nights that we would stare at the lights by the train tracks
        And you would always listen to Dashboard
        That was the first time that I realized (Realized)
        All the pieces of you fit perfectly in the hole inside my heart
        ''',
        track_art='https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2F9d9a2b906cea8a2d6d5077e6c57c15a6.1000x1000x1.jpg',
        track_url='https://www.youtube.com/embed/YErEZo38-VQ',
    )

    track11 = Track(
        user_id=3,
        track_title="JFK",
        artist="SIDNĒ",
        album="SYD",
        release_date=date(2020, 3, 20),
        produced_by="",
        lyrics='''
        I knew from the minute I saw you
        I knew with all my heart I'd adore you
        I can't find the right words
        To explain again and again
        I knew from the minute I saw you

        I'd be the one to watch you leave
        And never come back again
        To dream of the start while
        I'm living inside the end
        You either have the mercy left to stay
        Or the longing to run
        It's good to watch you leave
        And never come back again
        I knew from the minute you kissed me
        I felt your hand reminisce in mine
        I didn't know a goodnight
        Could be a final goodbye
        But I saw it in the weight of your footstep
        I saw it in the tremble of your breath

        I'd be the one to watch you leave
        And never come back again
        To dream of the start while
        I'm living inside the end
        You either have the mercy left to stay
        Or the longing to run
        It's good to watch you leave
        And never come back again

        Time will tell me how much I can take
        The arms around me are like my end of days
        Time will tell me how much I can take
        I'll stay here

        And be the one to watch you leave
        And never come back again
        To dream of the start while
        I'm living inside the end
        You either have the mercy left to stay
        Or the longing to run
        It's good to watch you leave
        And never come back again
        Leave and never come back again
        ''',
        track_art='https://t2.genius.com/unsafe/210x210/https%3A%2F%2Fimages.genius.com%2Fe6ff3f5469e21b48ac9c6563c82e4cae.700x700x1.jpg',
        track_url='https://www.youtube.com/embed/QccUq66u3TQ',
    )

    track12 = Track(
        user_id=3,
        track_title="Sheep In Wolves Clothes",
        artist="little hurricane",
        album="Gold Fever",
        release_date=date(2014, 4, 29),
        produced_by="",
        lyrics='''
        You told to me stay here
        I'll be right back
        It’s just a matter of time
        I nearly tore myself in two
        Looking for you in my mind
        You told me you need me
        You didn't say why
        Hold on and trust that
        You would never lie
        All I know is
        You’re here by my side
        I've got you here
        I've got you here
        I've got you here
        I've got you here
        When the Sun is burning red
        We'll shine like diamonds
        When our old lives are dead
        Leave them behind us
        All my questions'll
        Be answered in the dark
        I've got you here
        I've got you here
        I need you to leave me
        But please don't ask why
        I beg you to trust that
        Everything will be fine
        I'm alive as long
        As you're here inside
        I've got you here
        I've got you here
        When the Sun is burning red
        We'll shine like diamonds
        When our old lives are dead
        Leave them behind us
        All my questions'll
        Be answered in the dark
        I've got you here
        I've got you here
        You're way behind the time
        I know what you don't
        From your head down to your toes
        You're a sheep in wolves’ clothes
        I've got you here
        I've got you here
        When the Sun is burning red
        We'll shine like diamonds
        When our old lives are dead
        Leave them behind us
        All my questions'll
        Be answered in the dark
        I've got you here
        I've got you here
        I've got you here
        I've got you here.
        ''',
        track_art='https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2Fe45870466f6fb5973e3c181d00f81c40.1000x1000x1.jpg',
        track_url='https://www.youtube.com/embed/4RN1qMdcgV8',
    )

    track13 = Track(
        user_id=2,
        track_title="Kirby",
        artist="Aesop Rock",
        album="The Impossible Kid",
        release_date=date(2019, 4, 29),
        produced_by="",
        lyrics='''
        [Hook]
        Hey Kirby
        Whatcha doing Kirby
        Whatcha doing there
        Hey Kirby
        Whatcha doing Kirby
        Whatcha doing there

        [Verse 1]
        Hobgoblin, shots of hot Strongid
        Vaccine queen deem church socks hostage
        9 weeks awesome, hides in a slipper
        Look in her eye like she might be a wizard
        Cold met a cat lady in a parking lot
        She got the heroes of tomorrow in a cardboard box
        And probably hoarding 40 more in the corners of Fort Knox
        Swapped 20 on the spot and cop the warlock
        Back at the haunt, found God in the hamper
        Briefs on her head playing Walking With a Panther
        Good around misery and golden era samplers
        Jeopardy and Wheel at the heels of her handlers
        Bet, more than a pet to worship
        It's an MD recommended sense of purpose
        Here to bat around keys and the means to euphoria
        Soon to be hailed, the greatest of all warriors
        [Hook]
        Hey Kirby
        Whatcha doing Kirby
        Whatcha doing there (I'm not takin' no shorts)
        Hey Kirby
        Whatcha doing Kirby
        Why'd you eat that leaf (Yo, yo, yo)

        [Verse 2]
        Homie don't fetch, only woke to stretch
        Under a thought bubble rich with bowls of goldfish
        Skittish in the company of stranger danger
        Otherwise, chase draw strings, tails and lasers
        In a steel cage match with a maze of cables
        Brazen, game-face based on Azazel
        Oversized ears up, puke in the Meow Mix
        Shred a pair of earbuds, remedy his cowlick
        [slurp]: Thanks Kirbs, looking like a milli
        Keep an old man sharp, keep a cold Chantilly
        Spun plum dizzy in a frisky moment
        Never lands on her feet though, I think she's broken
        Mouser in training, nap on the toaster
        Decorate her cubicle with dogs playing poker
        15 years taking prescriptions
        Now a shrink like, "I dunno, maybe get a kitten"

        [Hook]
        Hey Kirby
        Whatcha doing Kirby
        Whatcha doing there
        Hey Kirby
        Whatcha doing Kirby
        Whatcha doing there
        ''',
        track_art='https://t2.genius.com/unsafe/268x268/https%3A%2F%2Fimages.genius.com%2F1d8582e283f0f4d717c0ba1fe12df744.1000x1000x1.jpg',
        track_url='https://www.youtube.com/embed/7T_KKiQiolk',
    )

    track14 = Track(
        user_id=2,
        track_title="Sheep In Wolves Clothes",
        artist="little hurricane",
        album="Gold Fever",
        release_date=date(2014, 4, 29),
        produced_by="",
        lyrics='''
        You told to me stay here
        I'll be right back
        It’s just a matter of time
        I nearly tore myself in two
        Looking for you in my mind
        You told me you need me
        You didn't say why
        Hold on and trust that
        You would never lie
        All I know is
        You’re here by my side
        I've got you here
        I've got you here
        I've got you here
        I've got you here
        When the Sun is burning red
        We'll shine like diamonds
        When our old lives are dead
        Leave them behind us
        All my questions'll
        Be answered in the dark
        I've got you here
        I've got you here
        I need you to leave me
        But please don't ask why
        I beg you to trust that
        Everything will be fine
        I'm alive as long
        As you're here inside
        I've got you here
        I've got you here
        When the Sun is burning red
        We'll shine like diamonds
        When our old lives are dead
        Leave them behind us
        All my questions'll
        Be answered in the dark
        I've got you here
        I've got you here
        You're way behind the time
        I know what you don't
        From your head down to your toes
        You're a sheep in wolves’ clothes
        I've got you here
        I've got you here
        When the Sun is burning red
        We'll shine like diamonds
        When our old lives are dead
        Leave them behind us
        All my questions'll
        Be answered in the dark
        I've got you here
        I've got you here
        I've got you here
        I've got you here.
        ''',
        track_art='https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2Fe45870466f6fb5973e3c181d00f81c40.1000x1000x1.jpg',
        track_url='https://www.youtube.com/embed/4RN1qMdcgV8',
    )


    track15 = Track(
        user_id=2,
        track_title="Long Legged Larry",
        artist="Aesop Rock",
        album="",
        release_date=date(2014, 3, 19),
        produced_by="",
        lyrics='''
        [Intro]
        With a body length of about 20 centimeters
        Bullfrogs are the largest frogs in North America
        As well as the champion jumpers

        [Verse 1]
        Long Legged Larry was a frog at the pond
        Jump so high, might miss him while he gone
        Jump over anything, even King Kong
        Jumping Jack Flash was his favorite song
        Now once upon a time there was a cat in a tree
        Chased a squirrel up, been stuck since three
        The fireman came, said "It's too high for me"
        How's that cat gonna ever get free?
        Young Jack Turner was a staple on the block
        Said he knew about a frog with an XL hop
        The neighbors startеd laughing, but Jackie wouldn't stop
        Ran off, came back, guess who hе got?
        Well, it was Long Legged Larry, didn't open his mouth
        Like a rocket to the moon through a cumulus cloud
        Touch down safe, lay the scaredy-cat on the ground
        If you listen real close, you can still hear the crowd
        [Chorus]
        Go Larry, go Larry, go, go, go Larry
        Go Larry, go Larry, go, go, go, go, go

        [Verse 2]
        Larry doesn't care
        Jump so high grow a beard in the air
        Jump over anything, even Times Square
        Yelling "Long Legged Larry for mayor!, Here! Here!"
        Now once upon a time there was a princess in a cell
        In the tower of a castle, through a forest on a hill
        Half the men that ever sought her out had fallen ill
        All the men that ever tried to climb the wall had fell
        Handful gather at the base of the place
        Each claim way braver than the bravest you've faced
        Bunch of dingbats yapping about saving the day
        But wait, a silhouetted amphibian face in haze
        Well, it was Long Legged Larry on the back of a steed
        Leapt up yelling "Jordan!" Kiss the girl on the cheek
        Touch down safe, show the lady back to her peeps
        If you listen real close, you can still hear the streets

        [Chorus]
        Go Larry, go Larry, go, go, go Larry
        Go Larry, go Larry, go, go, go, go, go

        [Verse 3]
        Larry's on the case
        Jump so high pluck a star out of space
        Jump over anything, even Salt Lake
        Jump into the mosh pit, jump out of a cake
        Now once upon a time there was a circus in town
        Some went for the cotton candy, some for the clowns
        But the high wire act was the most profound
        Had a poodle on a unicycle, rose in her mouth
        Ten o'clock show get the poodle in position
        Ten seconds in the unicycle starts tipping
        Now the poodle barely clinging to the wire by her mittens
        But what the heck is that thing in the distance?
        Ribbit, Long Legged Larry, a sight for sore eyes
        Known to give a dog a ride seconds after he arrives
        Touch down safe, give her some kibbles and rawhide
        If you listen real close, you can still hear the vibe

        [Chorus]
        Go Larry, go Larry, go, go, go Larry
        Go Larry, go Larry, go, go, go, go, go
        ''',
        track_art='https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2F7b6dfe38098a1bc93c7bc74474735ab6.1000x1000x1.png',
        track_url='https://www.youtube.com/embed/us3pCHd8PLs',
    )


    db.session.add(track1)
    db.session.add(track2)
    db.session.add(track3)
    db.session.add(track4)
    db.session.add(track5)
    db.session.add(track6)
    db.session.add(track7)
    db.session.add(track8)
    db.session.add(track9)
    db.session.add(track10)
    db.session.add(track11)
    db.session.add(track12)
    db.session.add(track13)
    db.session.add(track14)
    db.session.add(track15)

    db.session.commit()


def undo_tracks():
    db.session.execute('TRUNCATE tracks RESTART IDENTITY CASCADE;')
    db.session.commit()
