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
    if 'DEVELOPMENT' in os.environ:
        test = True
    else:
        test = False
    return render_template("index.html",
                           page_title="Marine(1)",
                           test=test)


@app.route("/page_2")
def page_2():
    if 'DEVELOPMENT' in os.environ:
        test = True
    else:
        test = False
    return render_template("page_2.html",
                           test=test,
                           page_title="Marine(2)")


@app.route("/test")
def test():
    if 'DEVELOPMENT' in os.environ:
        test = True
    else:
        test = False
    return render_template("test.html",
                           test=test,
                           page_title="test")


@app.route("/drag_drop")
def drag_drop():
    if 'DEVELOPMENT' in os.environ:
        test = True
    else:
        test = False
    return render_template("drag-drop.html",
                           test=test,
                           page_title="Drag & Drop")


if __name__ == "__main__":
    debug = os.environ.get("DEVELOPMENT", False)
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=debug)
