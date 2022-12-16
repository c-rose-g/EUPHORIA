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
        prod_photo='https://www.sephora.com/productimages/product/p420533-av-02-hero.jpg',
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
    # MORE MAKEUP
    # product 19
    photo35 = ProductPhoto(
        product_id=19,
        prod_photo='https://www.sephora.com/productimages/sku/s2137289-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo36 = ProductPhoto(
        product_id=20,
        prod_photo='https://www.sephora.com/productimages/sku/s1491380-main-Lhero.jpg?pb=2020-03-allure-best-2018',
        prod_color_name='none',
    )
    photo37 = ProductPhoto(
        product_id=21,
        prod_photo='https://www.sephora.com/productimages/sku/s2606085-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo38 = ProductPhoto(
        product_id=22,
        prod_photo='https://www.sephora.com/productimages/sku/s2115954-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo39 = ProductPhoto(
        product_id=23,
        prod_photo='https://www.sephora.com/productimages/sku/s2072437-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo40 = ProductPhoto(
        product_id=24,
        prod_photo='https://www.sephora.com/productimages/sku/s2209906-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo41 = ProductPhoto(
        product_id=25,
        prod_photo='https://www.sephora.com/productimages/sku/s2209906-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo42 = ProductPhoto(
        product_id=26,
        prod_photo='https://www.sephora.com/productimages/sku/s1863588-main-Lhero.jpg?pb=clean-planet-positive-badge-2021',
        prod_color_name='none',
    )
    photo43 = ProductPhoto(
        product_id=27,
        prod_photo='https://www.sephora.com/productimages/sku/s2025633-main-Lhero.jpg?pb=2020-03-sephora-clean-2019',
        prod_color_name='none',
    )
    photo44 = ProductPhoto(
        product_id=28,
        prod_photo='https://www.sephora.com/productimages/sku/s2404846-main-Lhero.jpg?pb=clean-planet-positive-badge-2021',
        prod_color_name='none',
    )
    photo45 = ProductPhoto(
        product_id=29,
        prod_photo='https://www.sephora.com/productimages/sku/s2421717-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo46 = ProductPhoto(
        product_id=30,
        prod_photo='https://www.sephora.com/productimages/sku/s2404721-main-Lhero.jpg?pb=2020-03-sephora-clean-2019',
        prod_color_name='none',
    )
    photo47 = ProductPhoto(
        product_id=31,
        prod_photo='https://www.sephora.com/productimages/sku/s2215945-main-Lhero.jpg?pb=clean-planet-positive-badge-2021',
        prod_color_name='none',
    )
    photo48 = ProductPhoto(
        product_id=32,
        prod_photo='https://www.sephora.com/productimages/sku/s1932920-main-Lhero.jpg?pb=2020-03-sephora-clean-2019',
        prod_color_name='none',
    )
    photo49 = ProductPhoto(
        product_id=33,
        prod_photo='https://www.sephora.com/productimages/sku/s2172526-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo50 = ProductPhoto(
        product_id=34,
        prod_photo='https://www.sephora.com/productimages/sku/s2024792-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo51 = ProductPhoto(
        product_id=35,
        prod_photo='https://www.sephora.com/productimages/sku/s1499482-main-Lhero.jpg?pb=2020-03-sephora-clean-2019',
        prod_color_name='none',
    )
    photo52 = ProductPhoto(
        product_id=36,
        prod_photo='https://www.sephora.com/productimages/sku/s1499482-main-Lhero.jpg?pb=2020-03-sephora-clean-2019',
        prod_color_name='none',
    )
    photo53 = ProductPhoto(
        product_id=37,
        prod_photo='https://www.sephora.com/productimages/sku/s2592095-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo54 = ProductPhoto(
        product_id=38,
        prod_photo='https://www.sephora.com/productimages/sku/s2547248-main-Lhero.jpg?pb=allure-2022-bestofbeauty-badge',
        prod_color_name='none',
    )
    photo55 = ProductPhoto(
        product_id=39,
        prod_photo='https://www.sephora.com/productimages/sku/s2118867-main-Lhero.jpg?pb=2020-03-sephora-clean-2019',
        prod_color_name='none',
    )
    photo56 = ProductPhoto(
        product_id=40,
        prod_photo='https://www.sephora.com/productimages/sku/s2611663-main-Lhero.jpg?pb=2020-03-sephora-clean-2019',
        prod_color_name='none',
    )
    photo57 = ProductPhoto(
        product_id=41,
        prod_photo='https://www.sephora.com/productimages/sku/s2605913-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo58 = ProductPhoto(
        product_id=42,
        prod_photo='https://www.sephora.com/productimages/sku/s2592095-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo59 = ProductPhoto(
        product_id=43,
        prod_photo='https://www.sephora.com/productimages/sku/s2473064-main-Lhero.jpg?pb=2020-03-sephora-clean-2019',
        prod_color_name='none',
    )
    photo60 = ProductPhoto(
        product_id=44,
        prod_photo='https://www.sephora.com/productimages/sku/s2210722-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo61 = ProductPhoto(
        product_id=45,
        prod_photo='https://www.sephora.com/productimages/sku/s2033264-main-Lhero.jpg?pb=2020-03-sephora-clean-2019',
        prod_color_name='none',
    )
    photo62 = ProductPhoto(
        product_id=46,
        prod_photo='https://www.sephora.com/productimages/sku/s2437267-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo63 = ProductPhoto(
        product_id=47,
        prod_photo='https://www.sephora.com/productimages/sku/s2612844-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo64 = ProductPhoto(
        product_id=48,
        prod_photo='https://www.sephora.com/productimages/sku/s2266765-main-Lhero.jpg?pb=2020-03-sephora-clean-2019',
        prod_color_name='none',
    )
    photo65 = ProductPhoto(
        product_id=49,
        prod_photo='https://www.sephora.com/productimages/sku/s2593101-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo66 = ProductPhoto(
        product_id=50,
        prod_photo='https://www.sephora.com/productimages/sku/s2587939-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo67 = ProductPhoto(
        product_id=51,
        prod_photo='https://www.sephora.com/productimages/sku/s465690-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo68 = ProductPhoto(
        product_id=52,
        prod_photo='https://www.sephora.com/productimages/sku/s2467371-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo69 = ProductPhoto(
        product_id=53,
        prod_photo='https://www.sephora.com/productimages/sku/s1237379-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo70 = ProductPhoto(
        product_id=54,
        prod_photo='https://www.sephora.com/productimages/sku/s2249688-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo71 = ProductPhoto(
        product_id=55,
        prod_photo='https://www.sephora.com/productimages/sku/s2040475-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo72 = ProductPhoto(
        product_id=56,
        prod_photo='https://www.sephora.com/productimages/sku/s1688852-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo73 = ProductPhoto(
        product_id=57,
        prod_photo='https://www.sephora.com/productimages/sku/s2163970-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo74 = ProductPhoto(
        product_id=58,
        prod_photo='https://www.sephora.com/productimages/sku/s2176063-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo75 = ProductPhoto(
        product_id=59,
        prod_photo='https://www.sephora.com/productimages/sku/s1739317-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo76 = ProductPhoto(
        product_id=60,
        prod_photo='https://www.sephora.com/productimages/sku/s1449289-main-Lhero.jpg',
        prod_color_name='none',
    )
    photo77 = ProductPhoto(
        product_id=61,
        prod_photo='https://www.sephora.com/productimages/sku/s1788058-main-Lhero.jpg',
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
    db.session.add(photo35)
    db.session.add(photo36)
    db.session.add(photo37)
    db.session.add(photo38)
    db.session.add(photo39)
    db.session.add(photo40)
    db.session.add(photo41)
    db.session.add(photo42)
    db.session.add(photo43)
    db.session.add(photo44)
    db.session.add(photo45)
    db.session.add(photo46)
    db.session.add(photo47)
    db.session.add(photo48)
    db.session.add(photo49)
    db.session.add(photo50)
    db.session.add(photo51)
    db.session.add(photo52)
    db.session.add(photo53)
    db.session.add(photo54)
    db.session.add(photo55)
    db.session.add(photo56)
    db.session.add(photo57)
    db.session.add(photo58)
    db.session.add(photo59)
    db.session.add(photo60)
    db.session.add(photo61)
    db.session.add(photo62)
    db.session.add(photo63)
    db.session.add(photo64)
    db.session.add(photo65)
    db.session.add(photo66)
    db.session.add(photo67)
    db.session.add(photo68)
    db.session.add(photo69)
    db.session.add(photo70)
    db.session.add(photo71)
    db.session.add(photo72)
    db.session.add(photo73)
    db.session.add(photo74)
    db.session.add(photo75)
    db.session.add(photo76)
    db.session.add(photo77)
    db.session.commit()

def undo_prod_photos():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.product_photos RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM product_photos")

    db.session.commit()
