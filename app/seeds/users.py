from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo', last_name='Smith', email='demo@aa.io', password='password')
    sebastian = User(
        first_name='Sebastian', last_name='Jakubowski', email='sebastian@aa.io', password='password')
    mozell = User(
        first_name='Mozell', last_name='Rogahn', email='mozell@aa.io', password='password')

    db.session.add(demo)
    db.session.add(sebastian)
    db.session.add(mozell)
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
