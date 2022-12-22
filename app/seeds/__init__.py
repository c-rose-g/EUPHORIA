from flask.cli import AppGroup
from .users import seed_users, undo_users
from .products import seed_products, undo_products
from .product_photos import seed_prod_photos, undo_prod_photos
from .reviews import seed_reviews, undo_reviews
from .categories import seed_categories, undo_categories
from .product_categories import seed_product_categories, undo_product_categories
from .shopping_carts import seed_shopping_carts, undo_shopping_carts
from .shopping_cart_items import seed_shopping_cart_items, undo_shopping_cart_items
from app.models.db import db, environment, SCHEMA
# from .purchase_histories import seed_purchase_histories, undo_purchase_histories

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
        # undo_shopping_cart_items()
        undo_shopping_carts()
        undo_product_categories()
        undo_categories()
        undo_prod_photos()
        undo_reviews()
        undo_products()
        undo_users()
    # Add other seed functions here
    seed_users()
    seed_products()
    seed_reviews()
    seed_prod_photos()
    seed_categories()
    seed_product_categories()
    seed_shopping_carts()
    seed_shopping_cart_items()



# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_shopping_cart_items()
    undo_shopping_carts()
    undo_product_categories()
    undo_categories()
    undo_prod_photos()
    undo_reviews()
    undo_products()
    undo_users()
    # Add other undo functions here
