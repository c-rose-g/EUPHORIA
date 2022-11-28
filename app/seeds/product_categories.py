from app.models import db, Product_category, environment, SCHEMA

def seed_product_categories():
  pc1 = Product_category(
    prod_id= 1,
    category_id=1
    )
  pc2 = Product_category(
    prod_id= 2,
    category_id=1
    )
  pc3 = Product_category(
    prod_id= 3,
    category_id=1
    )
  pc4 = Product_category(
    prod_id= 4,
    category_id=1
    )
  pc5 = Product_category(
    prod_id= 5,
    category_id=2
    )
  pc6 = Product_category(
    prod_id= 6,
    category_id=2
    )
  pc7 = Product_category(
    prod_id= 7,
    category_id=2
    )
  pc8 = Product_category(
    prod_id= 8,
    category_id=2
    )
  pc9 = Product_category(
    prod_id= 9,
    category_id=3
    )
  pc10 = Product_category(
    prod_id= 10,
    category_id=3
    )
  pc11 = Product_category(
    prod_id= 11,
    category_id=3
    )
  pc12 = Product_category(
    prod_id= 12,
    category_id=3
    )
  pc13 = Product_category(
    prod_id= 13,
    category_id=4
    )
  pc14 = Product_category(
    prod_id= 14,
    category_id=4
    )
  pc15 = Product_category(
    prod_id= 15,
    category_id=4
    )
  pc16 = Product_category(
    prod_id= 16,
    category_id=4
    )

  db.session.add(pc1)
  db.session.add(pc2)
  db.session.add(pc3)
  db.session.add(pc4)
  db.session.add(pc5)
  db.session.add(pc6)
  db.session.add(pc7)
  db.session.add(pc8)
  db.session.add(pc9)
  db.session.add(pc10)
  db.session.add(pc11)
  db.session.add(pc12)
  db.session.add(pc13)
  db.session.add(pc14)
  db.session.add(pc15)
  db.session.add(pc16)
  db.session.commit()
def undo_product_categories():
   if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.product_categories RESTART IDENTITY CASCADE;")
   else:
        db.session.execute("DELETE FROM product_categories")

   db.session.commit()
