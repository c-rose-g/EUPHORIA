from app.models import db, Product, environment, SCHEMA
# prod5 = Product(
#   product_brand='MAKE UP FOR EVER',
#   product_name="HD Skin Undetectable Longwear Foundation",
#   product_price=22.00,
#   product_quantity=100,
#   product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
#   # remove these before upgrading db
#   product_id='P479712',
#   skuId = '2514214',
#   )
# prod6 = Product(
#   product_brand='HUDA BEAUTY',
#   product_name="The New Nude Eyeshadow Palette",
#   product_price=65.00,
#   product_quantity=100,
#   product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
#   # remove these before upgrading db
#   product_id='P43818047',
#   skuId = '2137289',
#   )
# prod7 = Product(
#   product_brand='Grande Cosmetics',
#   product_name="GrandeLASH - MD Lash Enhancing Serum",
#   product_price=125.00,
#   product_quantity=100,
#   product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
#   # remove these before upgrading db
#   product_id='P419219',
#   skuId = '1923275',
#   )
# prod8 = Product(
#   product_brand='Armani Beauty',
#   product_name="Giorgio Armani Luminous Silk Perfect Glow Flawless Oil-Free Foundation",
#   product_price=69.00,
#   product_quantity=100,
#   product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
#   # remove these before upgrading db
#   product_id='P393401',
#   skuId = '1491380',
#   )
# prod9 = Product(
#   product_brand='Charlotte Tilbury',
#   product_name="Hollywood Flawless Filter",
#   product_price=46.00,
#   product_quantity=100,
#   product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
#   # remove these before upgrading db
#   product_id='P434104',
#   skuId = '2419786',
#   )
# prod10 = Product(
#   product_brand='MAKE UP FOR EVER',
#   product_name="Artist Color Pencil Brow, Eye & Lip Liner",
#   product_price=22.00,
#   product_quantity=100,
#   product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
#   # remove these before upgrading db
#   product_id='P430969',
#   skuId = '2072437',
#   )
# prod11 = Product(
#   product_brand='NARS',
#   product_name="Radiant Creamy Concealer",
#   product_price=31.00,
#   product_quantity=100,
#   product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
#   # remove these before upgrading db
#   product_id='P377873',
#   skuId = '2172310',
#   )
# prod12 = Product(
#   product_brand='Dior',
#   product_name="Dior Addict Lip Glow",
#   product_price=38.00,
#   product_quantity=100,
#   product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
#   # remove these before upgrading db
#   product_id='P236816',
#   skuId = '2579340',
#   )
# prod13 = Product(
#   product_brand='Charlotte Tilbury',
#   product_name="Pillow Talk Beautifying Lip Set",
#   product_price=49.00,
#   product_quantity=100,
#   product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
#   # remove these before upgrading db
#   product_id='2619146',
#   skuId = 'P501333',
#   )
# prod14 = Product(
#   product_brand='Hourglass',
#   product_name="Ambient Lighting Edit Unlocked Face Palette",
#   product_price=85.00,
#   product_quantity=100,
#   product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
#   # remove these before upgrading db
#   product_id='P502387',
#   skuId = '2596039',
#   )
# prod15 = Product(
#   product_brand='CLINIQUE',
#   product_name="Almost Lipstick",
#   product_price=22.00,
#   product_quantity=100,
#   product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
#   # remove these before upgrading db
#   product_id='P122751',
#   skuId = '70680',
#   )
# prod16 = Product(
#   product_brand='Lancôme',
#   product_name="Teint Idole Ultra 24H Long Wear Matte Foundation",
#   product_price=52.00,
#   product_quantity=100,
#   product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
#   # remove these before upgrading db
#   product_id='P308201',
#   skuId = '1399120',
#   )
# prod17 = Product(
#   product_brand='Laura Mercier',
#   product_name="Translucent Loose Setting Powder",
#   product_price=40.00,
#   product_quantity=100,
#   product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
#   # remove these before upgrading db
#   product_id='P109908',
#   skuId = '870618',
#   )
# prod18 = Product(
#   product_brand='CLINIQUE',
#   product_name="Take The Day Off Cleansing Balm Makeup Remover",
#   product_price=34.50,
#   product_quantity=100,
#   product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
#   # remove these before upgrading db
#   product_id='P126301',
#   skuId = '886267',
#   )
# prod19 = Product(
#   product_brand='Glow Recipe',
#   product_name="Watermelon Glow Niacinamide Dew Drops",
#   product_price=49.00,
#   product_quantity=100,
#   product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
#   # remove these before upgrading db
#   product_id='P466123',
#   skuId = '2404846',
#   )
# prod20 = Product(
#   product_brand='The Ordinary',
#   product_name="Multi-Peptide Lash and Brow Serum",
#   product_price=14.50,
#   product_quantity=100,
#   product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
#   # remove these before upgrading db
#   product_id='P500423',
#   skuId = '2532588',
#   )
# prod25 = Product(
#   product_brand='LANEIGE',
#   product_name="Sweet Dream Trio",
#   product_price=32.00,
#   product_quantity=100,
#   product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
#   # remove these before upgrading db
#   product_id='P501237',
#   skuId = '2595239',
#   )
# prod26 = Product(
#   product_brand='Youth To The People',
#   product_name="Superfood Antioxidant Cleanser",
#   product_price=64.00,
#   product_quantity=100,
#   product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
#   # remove these before upgrading db
#   product_id='P411387',
#   skuId = '1863588',
#   )
# prod27 = Product(
#   product_brand='Drunk Elephant',
#   product_name="Protini™ Polypeptide Firming Moisturizer",
#   product_price=68.00,
#   product_quantity=100,
#   product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
#   # remove these before upgrading db
#   product_id='P427421',
#   skuId = '2025633',
#   )
# prod28 = Product(
#   product_brand='CLINIQUE',
#   product_name="Moisture Surge™ 100H Auto-Replenishing Hydrator Moisturizer",
#   product_price=82.00,
#   product_quantity=100,
#   product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
#   # remove these before upgrading db
#   product_id='P468351',
#   skuId = '2421717',
#   )
# prod29 = Product(
#   product_brand="Kiehl's Since 1851",
#   product_name="Ultra Facial Moisturizing Cream with Squalane",
#   product_price=74.00,
#   product_quantity=100,
#   product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
#   # remove these before upgrading db
#   product_id='P421996',
#   skuId = '2172526',
#   )
# prod30 = Product(
#   product_brand="Kiehl's Since 1851",
#   product_name="Powerful-Strength Vitamin C Serum",
#   product_price=110.00,
#   product_quantity=100,
#   product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
#   # remove these before upgrading db
#   product_id='P427529',
#   skuId = '2024792',
#   )
# prod38 = Product(
#   product_brand="CHANEL",
#   product_name="N°5 Eau de Parfum",
#   product_price=146.00,
#   product_quantity=100,
#   product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
#   # remove these before upgrading db
#   product_id='P65510',
#   skuId = '465690',
#   )


def seed_products():
    prod1 = Product(
        product_name="Born This Way The Natural Nudes Eyeshadow Palette",
        product_category='Makeup',
        product_brand='Too Faced',
        product_price=52.00,
        product_quantity=100,
        product_description="A palette of modern nude shades inspired by the beautiful nuances of real skin tones.",
        # remove these before upgrading db
        # product_id='P455201',
        # skuId = '2307536',
    )
    prod2 = Product(
        product_name="Soft Pinch Liquid Blush",
        product_brand='Rare Beauty by Selena Gomez',
        product_category='Makeup',
        product_price=20.00,
        product_quantity=100,
        product_description="A weightless, long-lasting liquid blush that blends and builds beautifully for a soft, healthy flush. Available in matte and dewy finishes.",
        # remove these before upgrading db
        # product_id='P97989778',
        # skuId = '2518959',
    )
    prod3 = Product(
        product_name="Lip Glow Oil",
        product_brand='Dior',
        product_category='Makeup',
        product_price=38.00,
        product_quantity=100,
        product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
        # remove these before upgrading db
        # product_id='P453814',
        # skuId = '2316172',
    )
    prod4 = Product(
        product_brand='Makeup BY MARIO',
        product_name="Ethereal Eyes Eyeshadow Palette",
        product_category='Makeup',
        product_price=68.00,
        product_quantity=100,
        product_description="A multi-finish eyeshadow palette with 12 neutral, translucent shades in sueded matte, natural metallic, and glossy shimmer finishes",
        # remove these before upgrading db
        # product_id='P501527',
        # skuId = '2599660',
    )

    # Skincare
    prod5 = Product(
        product_brand='Sol de Janeiro',
        product_name="Brazilian Crush Cheirosa '62 Bum Bum Hair & Body Fragrance Mist",
        product_category='Skincare',
        product_price=35.00,
        product_quantity=100,
        product_description="A body Fragrance mist, bursting with an alluring pistachio and salted caramel scent, to be used on body, hair, and lingerie.",
        # remove these before upgrading db
        # product_id='P417312',
        # skuId = '1930759',
    )
    prod6 = Product(
        product_brand='Tatcha',
        product_name="The Dewy Skin Cream Plumping & Hydrating Moisturizer",
        product_category='Skincare',
        product_price=82.00,
        product_quantity=100,
        product_description="A rich cream that feeds skin with plumping hydration and antioxidant-packed Japanese purple rice for a dewy, healthy glow.",
        # remove these before upgrading db
        # product_id='P441101',
        # skuId = '2181006',
    )
    prod7 = Product(
        product_brand='The Ordinary',
        product_name="Niacinamide 10% + Zinc 1% Oil Control Serum",
        product_category='Skincare',
        product_price=11.70,
        product_quantity=100,
        product_description="A high-strength vitamin-and-mineral blemish formula with 10 percent pure niacinamide and one percent zinc PCA.",
        # remove these before upgrading db
        # product_id='P427417',
        # skuId = '2031391',
    )
    prod8 = Product(
        product_brand="Paula's Choice",
        product_name="Skin Perfecting 2% BHA Liquid Exfoliant",
        product_category='Skincare',
        product_price=49.00,
        product_quantity=100,
        product_description="A daily leave-on exfoliant with two percent salicylic acid to sweep away dead skin cells, unclog pores, and visibly smooth wrinkles&mdash;practically overnight.",
        # remove these before upgrading db
        # product_id='P469502',
        # skuId = '2421360',
    )
    # hair
    prod9 = Product(
        product_brand="Dyson",
        product_name="Airwrap™ Multi-Styler Complete Long",
        product_category='hair',
        product_price=599.00,
        product_quantity=100,
        product_description="A multi-styler curl, shape, smooth, and hide flyaways with no extreme heat&mdash;re-engineered barrels that now curl in both directions, brushes for straighter styles, and a new Coanda Smoothing dryer harness enhanced Coanda airflow for faster, better, easier styling.",
        # remove these before upgrading db
        # product_id='P437979',
        # skuId = '2540201',
    )
    prod10 = Product(
        product_brand="Kiehl's Since 1851",
        product_name="Powerful-Strength Vitamin C Serum",
        product_category='hair',
        product_price=110.00,
        product_quantity=100,
        product_description="A potent vitamin C serum formulated with 12.5 percent vitamin C and hyaluronic acid.",
        # remove these before upgrading db
        # product_id='P427529',
        # skuId = '2024792',
    )
    prod11 = Product(
        product_brand="T3",
        product_name="Twirl Trio Interchangeable Clip Curling Iron Set: 1”, 1.25”, 1.5",
        product_category='hair',
        product_price=335.00,
        product_quantity=100,
        product_description="A curling iron set to create beautiful waves. ",
        # remove these before upgrading db
        # product_id='P429717',
        # skuId = '2045763',
    )
    prod12 = Product(
        product_brand="Olaplex",
        product_name="No. 5 Bond Maintenance™ Conditioner",
        product_category='hair',
        product_price=30.00,
        product_quantity=100,
        product_description="A nourishing and reparative hydrating conditioner for soft, shiny hair with perfect slip to prevent tangles. Patented OLAPLEX Bond Building Technology™ supports bond repair to protect from daily damage, frizz, and split ends.",
        # remove these before upgrading db
        # product_id='P433173',
        # skuId = '2118875',
    )
# Fragrance
    prod13 = Product(
        product_brand="Carolina Herrera",
        product_name="Good Girl Eau de Parfum",
        product_category='Fragrance',
        product_price=175.00,
        product_quantity=100,
        product_description="A sensual and evocative Fragrance with notes of tuberose, jasmine, and tonka bean.",
        # remove these before upgrading db
        # product_id='P420533',
        # skuId = '1960707',
    )
    prod14 = Product(
        product_brand="TOM FORD",
        product_name="Ombré Leather Eau de Parfum",
        product_category='Fragrance',
        product_price=210.00,
        product_quantity=100,
        product_description="A warm, spicy Fragrance with notes of leather, patchouli, and vetiver.",
        # remove these before upgrading db
        # product_id='P433663',
        # skuId = '2101319',
    )
    prod15 = Product(
        product_brand="CHANEL",
        product_name="COCO MADEMOISELLE Eau de Parfum",
        product_category='Fragrance',
        product_price=146.00,
        product_quantity=100,
        product_description="Irresistibly sexy, irrepressibly spirited. A sparkling Oriental Fragrance that recalls a daring young Coco Chanel. An absolutely modern composition with a strong yet surprisingly fresh character.",
        # remove these before upgrading db
        # product_id='P12495',
        # skuId = '513168',
    )

    prod16 = Product(
        product_brand="Viktor&Rolf",
        product_name="Flowerbomb",
        product_category='Fragrance',
        product_price=220.00,
        product_quantity=100,
        product_description="A warm floral Fragrance with intoxicating notes of cattleya, jasmine, and rose.",
        # remove these before upgrading db
        # product_id='P255506',
        # skuId = '1377159',
    )
    prod17 = Product(
        product_name="Soft Pinch Liquid Blush",
        product_brand='Rare Beauty by Selena Gomez',
        product_category='Makeup',
        product_price=20.00,
        product_quantity=100,
        product_description="A weightless, long-lasting liquid blush that blends and builds beautifully for a soft, healthy flush. Available in matte and dewy finishes.",
        # remove these before upgrading db
        # product_id='P97989778',
        # skuId = '2518959',
    )
    prod18 = Product(
        product_name="Lip Glow Oil",
        product_brand='Dior',
        product_category='Makeup',
        product_price=38.00,
        product_quantity=100,
        product_description="A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
        # remove these before upgrading db
        # product_id='P453814',
        # skuId = '2316172',
    )

    # MORE makeup
    prod19 = Product(
        product_name="The New Nude Eyeshadow Palette",
        product_brand='HUDA BEAUTY',
        product_category='Makeup',
        product_price=32.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2137289-main-Lhero.jpg
        # product_id='P43818047',
        # skuId = '2137289',
    )
    prod20 = Product(
        product_name="Giorgio Armani Luminous Silk Perfect Glow Flawless Oil-Free Foundation",
        product_brand='Armani Beauty',
        product_category='Makeup',
        product_price=45.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s1491380-main-Lhero.jpg?pb=2020-03-allure-best-2018
        # product_id='P393401',
        # skuId = '1491380',
    )
    prod21 = Product(
        product_name="Airbrush Flawless Finish Setting Powder",
        product_brand='Charlotte Tilbury',
        product_category='Makeup',
        product_price=46.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2606085-main-Lhero.jpg
        # product_id='P433526',
        # skuId = '2606085',
    )
    prod22 = Product(
        product_name="Hollywood Contour Wand",
        product_brand='Charlotte Tilbury',
        product_category='Makeup',
        product_price=40.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2115954-main-Lhero.jpg
        # product_id='P434002',
        # skuId = '2115954',
    )
    prod23 = Product(
        product_name="Artist Color Pencil Brow, Eye & Lip Liner",
        product_brand='MAKE UP FOR EVER',
        product_category='Makeup',
        product_price=22.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2072437-main-Lhero.jpg
        # product_id='P430969',
        # skuId = '2072437',
    )
    prod24 = Product(
        product_name="Matte Velvet Skin Blurring Powder Foundation",
        product_brand='MAKE UP FOR EVER',
        product_category='Makeup',
        product_price=40.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2209906-main-Lhero.jpg
        # product_id='P443566',
        # skuId = '2209906',
    )
    # MORE skincare
    prod25 = Product(
        product_name="Take The Day Off Cleansing Balm Makeup Remover",
        product_brand='CLINIQUE',
        product_category='Skincare',
        product_price=34.50,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s886267-main-Lhero.jpg
        # product_id='P126301',
        # skuId = '886267',
    )
    prod26 = Product(
        product_name="Superfood Antioxidant Cleanser",
        product_brand='Youth To The People',
        product_category='Skincare',
        product_price=64.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s1863588-main-Lhero.jpg?pb=clean-planet-positive-badge-2021
        # product_id='P411387',
        # skuId = '1863588',
    )
    prod27 = Product(
        product_name="Protini™ Polypeptide Firming Moisturizer",
        product_brand='Drunk Elephant',
        product_category='Skincare',
        product_price=68.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2025633-main-Lhero.jpg?pb=2020-03-sephora-clean-2019
        # product_id='P427421',
        # skuId = '2025633',
    )

    prod28 = Product(
        product_name="Watermelon Glow Niacinamide Dew Drops",
        product_brand='Glow Recipe',
        product_category='Skincare',
        product_price=49.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2404846-main-Lhero.jpg?pb=clean-planet-positive-badge-2021
        # product_id='P466123',
        # skuId = '2404846',
    )
    prod29 = Product(
        product_name="Moisture Surge™ 100H Auto-Replenishing Hydrator Moisturizer",
        product_brand='CLINIQUE',
        product_category='Skincare',
        product_price=82.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2421717-main-Lhero.jpg
        # product_id='P468351',
        # skuId = '2421717',
    )
    prod30 = Product(
        product_name="D-Bronzi™ Anti-Pollution Bronzing Drops with Peptides",
        product_brand='Drunk Elephant',
        product_category='Skincare',
        product_price=36.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2404721-main-Lhero.jpg?pb=2020-03-sephora-clean-2019
        # product_id='P479842',
        # skuId = '2535144',
    )
    prod31 = Product(
        product_name="Barrier+ Triple Lipid-Peptide Face Cream",
        product_brand='Skinfix',
        product_category='Skincare',
        product_price=78.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2215945-main-Lhero.jpg?pb=clean-planet-positive-badge-2021
        # product_id='P442840',
        # skuId = '2215945',
    )
    prod32 = Product(
        product_name="The Water Cream Oil-Free Pore Minimizing Moisturizer",
        product_brand='Tatcha',
        product_category='Skincare',
        product_price=82.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s1932920-main-Lhero.jpg?pb=2020-03-sephora-clean-2019
        # product_id='P418218',
        # skuId = '1932920',
    )
    prod33 = Product(
        product_name="Ultra Facial Moisturizing Cream with Squalane",
        product_brand="Kiehl's Since 1851",
        product_category='Skincare',
        product_price=74.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2172526-main-Lhero.jpg
        # product_id='P421996',
        # skuId = '2172526',
    )
    prod34 = Product(
        product_name="Powerful-Strength Vitamin C Serum",
        product_brand="Kiehl's Since 1851",
        product_category='Skincare',
        product_price=110.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2024792-main-Lhero.jpg
        # product_id='P427529',
        # skuId = '2024792',
    )
    prod35 = Product(
        product_name="Alpha Beta® Extra Strength Daily Peel Pads",
        product_brand="Dr. Dennis Gross Skincare",
        product_category='Skincare',
        product_price=150.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s1499482-main-Lhero.jpg?pb=2020-03-sephora-clean-2019
        # product_id='P269122',
        # skuId = '1499482',
    )
    prod36 = Product(
        product_name="Glowscreen Sunscreen SPF 40 PA+++ with Hyaluronic Acid + Niacinamide",
        product_brand="Supergoop!",
        product_category='Skincare',
        product_price=46.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2535656-main-Lhero.jpg?pb=2020-03-sephora-clean-2019
        # product_id='P456218',
        # skuId = '2535656',
    )
    # Hair
    prod37 = Product(
        product_name="Honey Infused Hydration Hair Set",
        product_brand="Gisou",
        product_category='Hair',
        product_price=76.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2592095-main-Lhero.jpg
        # product_id='P501741',
        # skuId = '2592095',
    )
    prod38 = Product(
        product_name="Leave-In Molecular Repair Hair Mask",
        product_brand="K18 Biomimetic Hairscience",
        product_category='Hair',
        product_price=75.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2547248-main-Lhero.jpg?pb=allure-2022-bestofbeauty-badge
        # product_id='P479846',
        # skuId = '2547248',
    )
    prod39 = Product(
        product_name="No. 4 Bond Maintenance™ Shampoo",
        product_brand="Olaplex",
        product_category='Hair',
        product_price=30.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2118867-main-Lhero.jpg?pb=2020-03-sephora-clean-2019
        # product_id='P433172',
        # skuId = '2118867',
    )
    prod40 = Product(
        product_name="Smooth Talker Double Agent Straightening Blow Dry Brush Hair Set",
        product_brand="amika",
        product_category='Hair',
        product_price=150.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2611663-main-Lhero.jpg?pb=2020-03-sephora-clean-2019
        # product_id='P501408',
        # skuId = '2611663',
    )
    prod41 = Product(
        product_name="Moroccanoil Treatment Hair Oil",
        product_brand="Moroccanoil",
        product_category='Hair',
        product_price=48.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2605913-main-Lhero.jpg
        # product_id='P412090',
        # skuId = '2605913',
    )
    prod42 = Product(
        product_name="Honey Infused Hydration Hair Set",
        product_brand="Gisou",
        product_category='Hair',
        product_price=76.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2592095-main-Lhero.jpg
        # product_id='P501741',
        # skuId = '2592095',
    )
    prod43 = Product(
        product_name="GRO Hair Serum for Thinning Hair",
        product_brand="Vegamour",
        product_category='Hair',
        product_price=148.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2473064-main-Lhero.jpg?pb=2020-03-sephora-clean-2019
        # product_id='P473007',
        # skuId = '2473064',
    )
    prod44 = Product(
        product_name="Multi-Peptide Serum for Hair Density",
        product_brand="The Ordinary",
        product_category='Hair',
        product_price=17.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2210722-main-Lhero.jpg
        # product_id='P442831',
        # skuId = '2210722',
    )
    prod45 = Product(
        product_name="No. 3 Hair Repair Perfector",
        product_brand="Olaplex",
        product_category='Hair',
        product_price=30.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2033264-main-Lhero.jpg?pb=2020-03-sephora-clean-2019
        # product_id='P428224',
        # skuId = '2033264',
    )
    prod46 = Product(
        product_name="Dream Coat Supernatural Spray Anti-Frizz Treatment",
        product_brand="COLOR WOW",
        product_category='Hair',
        product_price=28.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2437267-main-Lhero.jpg
        # product_id='P469065',
        # skuId = '2437267',
    )
    prod47 = Product(
        product_name="Hydrating Shampoo, Conditioner & Moroccanoil Treatment Set",
        product_brand="Moroccanoil",
        product_category='Hair',
        product_price=68.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2612844-main-Lhero.jpg
        # product_id='P502713',
        # skuId = '2612844',
    )
    prod48 = Product(
        product_name="No. 7 Bonding Hair Oil",
        product_brand="Olaplex",
        product_category='Hair',
        product_price=30.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2266765-main-Lhero.jpg?pb=2020-03-sephora-clean-2019
        # product_id='P447376',
        # skuId = '2266765',
    )
    prod49 = Product(
        product_name="The Double Shot Jackpot Kit",
        product_brand="Drybar",
        product_category='Hair',
        product_price=155.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2593101-main-Lhero.jpg
        # product_id='P501731',
        # skuId = '2593101',
    )
    # MORE Fragrance
    prod50 = Product(
        product_name="Mini Good Girl Eau de Parfum",
        product_brand="Carolina Herrera",
        product_category='Fragrance',
        product_price=15.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2587939-main-Lhero.jpg
        # product_id='P484038',
        # skuId = '2587939',
    )
    prod51 = Product(
        product_name="N°5 Eau de Parfum",
        product_brand="CHANEL",
        product_category='Fragrance',
        product_price=90.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s465690-main-Lhero.jpg
        # product_id='P65510',
        # skuId = '465690',
    )
    prod52 = Product(
        product_name="Miss Dior Eau de Parfum",
        product_brand="Dior",
        product_category='Fragrance',
        product_price=185.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2467371-main-Lhero.jpg
        # product_id='P474316',
        # skuId = '2467371',
    )
    prod53 = Product(
        product_name="CHANCE EAU TENDRE Eau de Toilette",
        product_brand="CHANEL",
        product_category='Fragrance',
        product_price=125.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s1237379-main-Lhero.jpg
        # product_id='P258612',
        # skuId = '1237379',
    )
    prod54 = Product(
        product_name="Donna Born In Roma Eau de Parfum",
        product_brand="Valentino",
        product_category='Fragrance',
        product_price=138.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2249688-main-Lhero.jpg
        # product_id='P449116',
        # skuId = '2249688',
    )
    prod55 = Product(
        product_name="COCO MADEMOISELLE Eau de Parfum Intense",
        product_brand="CHANEL",
        product_category='Fragrance',
        product_price=124.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2040475-main-Lhero.jpg
        # product_id='P429692',
        # skuId = '2040475',
    )
    prod56 = Product(
        product_name="Black Opium Eau de Parfum",
        product_brand="Yves Saint Laurent",
        product_category='Fragrance',
        product_price=175.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s1688852-main-Lhero.jpg
        # product_id='P394534',
        # skuId = '1688852',
    )
    prod57 = Product(
        product_name="VANILLA | 28",
        product_brand="KAYALI",
        product_category='Fragrance',
        product_price=118.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2163970-main-Lhero.jpg
        # product_id='P439406',
        # skuId = '2163970',
    )
    prod58 = Product(
        product_name="Marc Jacobs Fragrances",
        product_brand="Mini Daisy Perfume Set",
        product_category='Fragrance',
        product_price=25.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s2176063-main-Lhero.jpg
        # product_id='P442304',
        # skuId = '2176063',
    )
    prod59 = Product(
        product_name="Sauvage Eau de Toilette",
        product_brand="Dior",
        product_category='Fragrance',
        product_price=62.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s1739317-main-Lhero.jpg
        # product_id='P400057',
        # skuId = '1739317',
    )
    prod60 = Product(
        product_name="Tobacco Vanille",
        product_brand="TOM FORD",
        product_category='Fragrance',
        product_price=70.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s1449289-main-Lhero.jpg
        # product_id='P393151',
        # skuId = '1449289',
    )
    prod61 = Product(
        product_name="'REPLICA' By the Fireplace",
        product_brand="Maison Margiela",
        product_category='Fragrance',
        product_price=32.00,
        product_quantity=100,
        product_description="",
        # remove these before upgrading db
        # https://www.sephora.com/productimages/sku/s1788058-main-Lhero.jpg
        # product_id='P404758',
        # skuId = '1788058',
    )
    db.session.add(prod1)
    db.session.add(prod2)
    db.session.add(prod3)
    db.session.add(prod4)
    db.session.add(prod5)
    db.session.add(prod6)
    db.session.add(prod7)
    db.session.add(prod8)
    db.session.add(prod9)
    db.session.add(prod10)
    db.session.add(prod11)
    db.session.add(prod12)
    db.session.add(prod13)
    db.session.add(prod14)
    db.session.add(prod15)
    db.session.add(prod16)
    db.session.add(prod17)
    db.session.add(prod18)
    db.session.add(prod19)
    db.session.add(prod20)
    db.session.add(prod21)
    db.session.add(prod22)
    db.session.add(prod23)
    db.session.add(prod24)
    db.session.add(prod25)
    db.session.add(prod26)
    db.session.add(prod27)
    db.session.add(prod28)
    db.session.add(prod29)
    db.session.add(prod30)
    db.session.add(prod31)
    db.session.add(prod32)
    db.session.add(prod33)
    db.session.add(prod34)
    db.session.add(prod35)
    db.session.add(prod36)
    db.session.add(prod37)
    db.session.add(prod38)
    db.session.add(prod39)
    db.session.add(prod40)
    db.session.add(prod41)
    db.session.add(prod42)
    db.session.add(prod43)
    db.session.add(prod44)
    db.session.add(prod45)
    db.session.add(prod46)
    db.session.add(prod47)
    db.session.add(prod48)
    db.session.add(prod49)
    db.session.add(prod50)
    db.session.add(prod51)
    db.session.add(prod52)
    db.session.add(prod53)
    db.session.add(prod54)
    db.session.add(prod55)
    db.session.add(prod56)
    db.session.add(prod57)
    db.session.add(prod58)
    db.session.add(prod59)
    db.session.add(prod60)
    db.session.add(prod61)
    db.session.commit()


def undo_products():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM products")

    db.session.commit()
