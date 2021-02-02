import os
from flask import Flask, render_template, request, flash


app = Flask(__name__)
app.secret_key = 'some_secret'


@app.route("/")
def index():
    return render_template('index.html', page_title="Page 1")


@app.route("/page_2")
def page_2():
    # flash("Button clicked")
    return render_template("page_2.html", page_title="Page 2")


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
