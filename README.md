
### як запустити 
1. Встановити Python https://www.python.org/downloads/
2. встановити додаткові бібліотеки 
```
pip install sqlite3
pip install flask flask_sqlalchemy flask_wtf
```
3. ініціалізувати БД
```
python ./initdb.py
```
4. Запустити додаток
```
python ./app.py
```

### initdb.py 
Скрипт генерації тестової бази sqlite з тестовими даними

### app.py 
Основний код бекенду 

### form.py 
формочка для вхідних даних

### models.py 
модельки даних які в бд зберігаються

## templates
html шаблони, по суті це і є фронтенд 
