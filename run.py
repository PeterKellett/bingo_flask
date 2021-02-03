import os
from flask import Flask, render_template, request, flash, url_for, redirect
from flask_pymongo import PyMongo

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
    cards = list(mongo.db.ladies.find())
    x = 0
    y = 0
    for card in cards:
        card.update({'x': x, 'y': y})
        print(card)
        x += 1
        if x == 4:
            x = 0
            y += 1
    return render_template('index.html',
                           page_title="Page 1",
                           cards=cards)


@app.route("/page_2")
def page_2():
    # flash("Button clicked")
    return render_template("page_2.html",
                           page_title="Page 2")


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
