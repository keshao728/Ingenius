from flask.cli import AppGroup

from .users import seed_users, undo_users
from .tracks import seed_tracks, undo_tracks
from .annotations import seed_annotations, undo_annotations
from .comments import seed_comments, undo_comments
from .votes import seed_vote, undo_vote

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_users()
        undo_tracks()
        undo_annotations()
        undo_comments()
        undo_vote()

    seed_users()
    # Add other seed functions here
    seed_tracks()
    seed_annotations()
    seed_comments()
    seed_vote()

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_tracks()
    undo_annotations()
    undo_comments()
    undo_vote()
    # Add other undo functions here
