import flask
import flask_login

from models import Admin
from app import app

login_manager = flask_login.LoginManager()
login_manager.init_app(app)


@login_manager.user_loader
def load_user(id):
    return Admin.query.get(int(id))


@login_manager.unauthorized_handler
def unauthorized_handler():
    if flask.request.method == 'GET':
        return flask.render_template('login.html')

    username = flask.request.form.get('username')
    admin = Admin.query.filter_by(username = username).first()

    if admin is not None and admin.check_password(flask.request.form['password']):
        flask_login.login_user(admin)
        return flask.redirect('/admin')

    return 'Bad login'


@app.route('/logout')
def logout():
    flask_login.logout_user()
    return flask.redirect('/')
