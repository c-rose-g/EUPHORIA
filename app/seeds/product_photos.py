from app.models import db, ProductPhoto, environment, SCHEMA


def seed_prod_photos():
    # product 1 -palette
    photo1 = ProductPhoto(
        product_id=1,
        prod_photo='https://www.sephora.com/productimages/sku/s2307536-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo2 = ProductPhoto(
        product_id=1,
        prod_photo='https://www.sephora.com/productimages/product/p455201-av-02-Lhero.jpg',
        prod_color_name='none',
    )
    photo3 = ProductPhoto(
        product_id=1,
        prod_photo='https://www.sephora.com/productimages/sku/s2307536-av-01-Lhero.jpg',
        prod_color_name='none',
    )
    # product 2 - highlighter
    photo4 = ProductPhoto(
        product_id=2,
        prod_photo='https://www.sephora.com/productimages/sku/s2362192-main-Lhero.jpg',
        prod_color_name='Bronze Gold',
    )
    photo5 = ProductPhoto(
        product_id=17,
        prod_photo='https://www.sephora.com/productimages/sku/s2518959-main-Lhero.jpg?pb=allure-2022-bestofbeauty-badge',
        prod_color_name='True Mauve',
    )
    # product 3 -
    photo6 = ProductPhoto(
        product_id=3,
        prod_photo='https://www.sephora.com/productimages/sku/s2316172-main-Lhero.jpg',
        prod_color_name='Light Pink',
    )
    photo7 = ProductPhoto(
        product_id=18,
        prod_photo='https://www.sephora.com/productimages/sku/s2316230-main-Lhero.jpg',
        prod_color_name='Rosewood',
    )
    # product 4 - pallete
    photo8 = ProductPhoto(
        product_id=4,
        prod_photo='https://www.sephora.com/productimages/sku/s2599660-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo9 = ProductPhoto(
        product_id=4,
        prod_photo='https://www.sephora.com/productimages/sku/s2599660-av-4-zoom.jpg',
        prod_color_name='none',
    )
    photo10 = ProductPhoto(
        product_id=4,
        prod_photo='https://www.sephora.com/productimages/sku/s2599660-av-7-zoom.jpg',
        prod_color_name='none',
    )
    # skincare
    # product 5
    photo11 = ProductPhoto(
        product_id=5,
        prod_photo='https://www.sephora.com/productimages/sku/s1985118-av-7-zoom.jpg',
        prod_color_name='none',

    )
    photo12 = ProductPhoto(
        product_id=5,
        prod_photo='https://www.sephora.com/productimages/sku/s1985118-av-7-zoom.jpg',
        prod_color_name='none',
    )
    # product 6
    photo13 = ProductPhoto(
        product_id=6,
        prod_photo='https://www.sephora.com/productimages/sku/s2406866-av-01-Lhero.jpg',
        prod_color_name='none',
    )
    photo14 = ProductPhoto(
        product_id=6,
        prod_photo='https://www.sephora.com/productimages/sku/s2406866-av-02-Lhero.jpg',
        prod_color_name='none',
    )
    # product 7
    photo15 = ProductPhoto(
        product_id=7,
        prod_photo='https://www.sephora.com/productimages/sku/s2286367-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo16 = ProductPhoto(
        product_id=7,
        prod_photo='https://www.sephora.com/productimages/product/p427417-av-8-zoom.jpg',
        prod_color_name='none',
    )
    # product 8
    photo17 = ProductPhoto(
        product_id=8,
        prod_photo='https://www.sephora.com/productimages/sku/s2421394-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo18 = ProductPhoto(
        product_id=8,
        prod_photo='https://www.sephora.com/productimages/sku/s2421394-main-Lhero.jpg',
        prod_color_name='none',
    )
    #  hair
    # product 9
    photo19 = ProductPhoto(
        product_id=9,
        prod_photo='https://www.sephora.com/productimages/sku/s2540201-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo20 = ProductPhoto(
        product_id=9,
        prod_photo='https://www.sephora.com/productimages/sku/s2540201-main-Lhero.jpg',
        prod_color_name='none',
    )
    # product 10
    photo21 = ProductPhoto(
        product_id=10,
        prod_photo='https://www.sephora.com/productimages/product/p427529-av-09-zoom.jpg',
        prod_color_name='none',
    )
    photo22 = ProductPhoto(
        product_id=10,
        prod_photo="https://www.sephora.com/productimages/sku/s2024792-main-Lhero.jpg",
        prod_color_name='none',
    )
    # product 11
    photo23 = ProductPhoto(
        product_id=11,
        prod_photo='https://www.sephora.com/productimages/product/p429717-av-02-Lhero.jpg',
        prod_color_name='none',
    )
    photo24 = ProductPhoto(
        product_id=11,
        prod_photo='https://www.sephora.com/productimages/product/p429717-av-05-zoom.jpg',
        prod_color_name='none',
    )
    # product 12
    photo25 = ProductPhoto(
        product_id=12,
        prod_photo='https://www.sephora.com/productimages/sku/s2118875-main-zoom.jpg?pb=2020-03-sephora-clean-2019',
        prod_color_name='none',
    )
    photo26 = ProductPhoto(
        product_id=12,
        prod_photo='https://www.sephora.com/productimages/sku/s2118875-av-02-Lhero.jpg',
        prod_color_name='none',
    )

    # product 13
    photo27 = ProductPhoto(
        product_id=13,
        prod_photo='https://www.sephora.com/productimages/sku/s2587913-main-Lhero.jpg',
        prod_color_name='none',
    )

    photo28 = ProductPhoto(
        product_id=13,
        prod_photo='https://www.sephora.com/productimages/sku/s2587913-main-Lhero.jpg',
        prod_color_name='none',
    )

    # product 14
    photo29 = ProductPhoto(
        product_id=14,
        prod_photo='https://www.sephora.com/productimages/product/p433663-av-02-Lhero.jpg',
        prod_color_name='none',
    )

    photo30 = ProductPhoto(
        product_id=14,
        prod_photo='https://www.sephora.com/productimages/sku/s2101319-main-Lhero.jpg',
        prod_color_name='none',
    )

    # product 15
    photo31 = ProductPhoto(
        product_id=15,
        prod_photo='https://www.sephora.com/productimages/sku/s513168-main-Lhero.jpg',
        prod_color_name='none',
    )

    photo32 = ProductPhoto(
        product_id=15,
        prod_photo='https://www.sephora.com/productimages/product/p12495-av-1-zoom.jpg',
        prod_color_name='none',
    )

    # product 16
    photo33 = ProductPhoto(
        product_id=16,
        prod_photo='https://www.sephora.com/productimages/product/p255506-av-06-zoom.jpg',
        prod_color_name='none',
    )

    photo34 = ProductPhoto(
        product_id=16,
        prod_photo='https://www.sephora.com/productimages/sku/s1377159-main-zoom.jpg',
        prod_color_name='none',
    )
    db.session.add(photo1)
    db.session.add(photo2)
    db.session.add(photo3)
    db.session.add(photo4)
    db.session.add(photo5)
    db.session.add(photo6)
    db.session.add(photo7)
    db.session.add(photo8)
    db.session.add(photo9)
    db.session.add(photo10)
    db.session.add(photo11)
    db.session.add(photo12)
    db.session.add(photo13)
    db.session.add(photo14)
    db.session.add(photo15)
    db.session.add(photo16)
    db.session.add(photo17)
    db.session.add(photo18)
    db.session.add(photo19)
    db.session.add(photo20)
    db.session.add(photo21)
    db.session.add(photo22)
    db.session.add(photo23)
    db.session.add(photo24)
    db.session.add(photo25)
    db.session.add(photo26)
    db.session.add(photo27)
    db.session.add(photo28)
    db.session.add(photo29)
    db.session.add(photo30)
    db.session.add(photo31)
    db.session.add(photo32)
    db.session.add(photo33)
    db.session.add(photo34)

    db.session.commit()

def undo_prod_photos():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.product_photos RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM product_photos")

    db.session.commit()
