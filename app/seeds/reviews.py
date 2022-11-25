from app.models import db, Review, environment, SCHEMA

def seed_reviews():
  review1 = Review(
    prod_id = '1',
    user_id = '1',
    review_msg = 'this is great!'
    )
  review2 = Review(
    prod_id = '2',
    user_id = '2',
    review_msg = 'this is horrible.'
    )
  review3 = Review(
    prod_id = '3',
    user_id = '3',
    review_msg = 'this made my face look 1000x better.'
    )
  review4 = Review(
    prod_id = '4',
    user_id = '1',
    review_msg = 'I love it!'
    )
  review5 = Review(
    prod_id = '5',
    user_id = '2',
    review_msg = 'this brought me so much joy.'
    )
  review6 = Review(
    prod_id = '6',
    user_id = '3',
    review_msg = 'I use this everyday religiously.'
    )
  review7 = Review(
    prod_id = '7',
    user_id = '1',
    review_msg = 'this is the best thing to happen to me since the invention of potatoes.'
    )
  review8 = Review(
    prod_id = '8',
    user_id = '2',
    review_msg = 'I bought one for each of my friends.'
    )
  review9 = Review(
    prod_id = '9',
    user_id = '3',
    review_msg = 'I recommend this to all my friends.'
    )
  review10 = Review(
    prod_id = '10',
    user_id = '1',
    review_msg = 'How did I live without this?'
    )
  review11 = Review(
    prod_id = '11',
    user_id = '2',
    review_msg = 'I make sure to pick this up every few months.'
    )
  review12 = Review(
    prod_id = '12',
    user_id = '3',
    review_msg = 'meh, I found a better one.'
    )
  review13 = Review(
    prod_id = '13',
    user_id = '1',
    review_msg = "you won't regret trying this out."
    )
  review14 = Review(
    prod_id = '14',
    user_id = '2',
    review_msg = 'This is a staple in my daily routine.'
    )
  review15 = Review(
    prod_id = '15',
    user_id = '3',
    review_msg = 'how could I have lived without this.'
    )
  review16 = Review(
    prod_id = '16',
    user_id = '1',
    review_msg = 'This has been my signature scent ever since I was in high school. Everyone knows as my signature scent. Friends will text me anytime they smell this on someone else, thats how big of an impact this has made on my friends.'
    )

  db.session.add(review1)
  db.session.add(review2)
  db.session.add(review3)
  db.session.add(review4)
  db.session.add(review5)
  db.session.add(review6)
  db.session.add(review7)
  db.session.add(review8)
  db.session.add(review9)
  db.session.add(review10)
  db.session.add(review11)
  db.session.add(review12)
  db.session.add(review13)
  db.session.add(review14)
  db.session.add(review15)
  db.session.add(review16)

def undo_reviews():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM reviews")

    db.session.commit()
