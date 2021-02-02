import os
from flask import Flask, render_template, request, flash


app = Flask(__name__)
app.secret_key = 'some_secret'


@app.route("/")
def index():
    cards = 16
    x = 0
    number_list = []
    while x < cards:
        number_list.append(x)
        x = x + 1
    print(number_list)
    return render_template('index.html', page_title="Page 1", number_list=number_list)


@app.route("/page_2")
def page_2():
    # flash("Button clicked")
    cards = 16
    x = 0
    number_list = []
    while x < cards:
        number_list.append(x)
        x = x + 1
    print(number_list)
    return render_template("page_2.html", page_title="Page 2", number_list=number_list)


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
