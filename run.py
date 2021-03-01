import os
from flask import Flask, render_template, request, flash, url_for, redirect, jsonify
from flask_pymongo import PyMongo
import random
if os.path.exists("env.py"):
    import env as config

from bson.objectid import ObjectId

app = Flask(__name__)
app.secret_key = os.getenv("SECRET", "randomstring123")

app.config["MONGO_DBNAME"] = 'bingo'
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")

mongo = PyMongo(app)


@app.route("/")
def index():
    return render_template("index.html",
                           page_title="Marine(1)")


@app.route("/page_2")
def page_2():
    return render_template("page_2.html",
                           page_title="Marine(2)")


@app.route("/page_3")
def page_3():
    # Get/shuffle and cut the cards
    cards = list(mongo.db.ladies.find())
    random.shuffle(cards)
    sliced_cards = cards[0:16]
    # Index the cards for x and y configuration
    x = 0
    y = 0
    for card in sliced_cards:
        card.update({'x': x, 'y': y})
        x += 1
        if x == 4:
            x = 0
            y += 1
    # Serve the cards
    return render_template('index.html',
                           page_title="Page 1",
                           cards=sliced_cards)


@app.route("/test")
def test():
    # flash("Button clicked")
    cards = list(mongo.db.marine.find())
    sliced_cards = cards[0:3]
    print(sliced_cards)
    test_array = ["a", "b", "c"]
    # Index the cards for x and y configuration
    x = 0
    y = 0
    for card in sliced_cards:
        print(x, card)
        card.update({'x': x, 'y': y})
        x += 1
        if x == 5:
            x = 0
            y += 1
    return render_template("test.html",
                           page_title="test",
                           cards=sliced_cards,
                           test_array=test_array)


if __name__ == "__main__":
    debug = os.environ.get("DEVELOPMENT", False)
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=debug)
