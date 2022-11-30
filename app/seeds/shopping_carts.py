from app.models import db, ShoppingCart, environment, SCHEMA

def seed_shopping_carts():
  cart1 = ShoppingCart(
    user_id = 1
    )
  cart2 = ShoppingCart(
    user_id = 2
    )
  cart3 = ShoppingCart(
    user_id = 3
    )
  db.session.add(cart1)
  db.session.add(cart2)
  db.session.add(cart3)
  db.session.commit()


def undo_shopping_carts():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.shopping_carts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM shopping_carts")

    db.session.commit()
