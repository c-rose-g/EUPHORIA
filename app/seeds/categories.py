from app.models import db, Category, environment, SCHEMA


def seed_categories():
    cat1 = Category(
        category_name='makeup')
    cat2 = Category(
        category_name='skincare')
    cat3 = Category(
        category_name='hair')
    cat4 = Category(
        category_name='fragrance')

    db.session.add(cat1)
    db.session.add(cat2)
    db.session.add(cat3)
    db.session.add(cat4)
    db.session.commit()


def undo_categories():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.categories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM categories")

    db.session.commit()
