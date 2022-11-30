from app.models import db, ShoppingCartItem, environment, SCHEMA


def seed_shopping_cart_items():
    cartItem1 = ShoppingCartItem(
        shopping_cart_id=1,
        prod_id=1,
        prod_quantity=1
    )
    cartItem2 = ShoppingCartItem(
        shopping_cart_id=1,
        prod_id=2,
        prod_quantity=1
    )
    cartItem3 = ShoppingCartItem(
        shopping_cart_id=2,
        prod_id=3,
        prod_quantity=1
    )
    cartItem4 = ShoppingCartItem(
        shopping_cart_id=2,
        prod_id=4,
        prod_quantity=1
    )
    cartItem5 = ShoppingCartItem(
        shopping_cart_id=3,
        prod_id=5,
        prod_quantity=1
    )
    cartItem6 = ShoppingCartItem(
        shopping_cart_id=3,
        prod_id=6,
        prod_quantity=1
    )

    db.session.add(cartItem1)
    db.session.add(cartItem2)
    db.session.add(cartItem3)
    db.session.add(cartItem4)
    db.session.add(cartItem5)
    db.session.add(cartItem6)
    db.session.commit()


def undo_shopping_cart_items():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.shopping_cart_items RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM shopping_cart_items")

    db.session.commit()
