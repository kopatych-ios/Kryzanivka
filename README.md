### як запустити 
1. Встановити Python https://www.python.org/downloads/
2. встановити додаткові бібліотеки 
```
pip install sqlite3
pip install flask flask_sqlalchemy flask_wtf flask_login
```
3. Запустити
```
python app.py
```

### app.py 
Вхідна точка + конфігуграції

### views.py
роутинг і обробка запитів

### models.py 
модельки даних які описують таблиці бд

### auth.py
авторизація користувачів для адмінки 

### templates
html шаблони, по суті це і є фронтенд 

### static 
статичні фали 

### init.sql
додатковий файлик для внесення початкових даних в БД 
