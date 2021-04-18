import sqlite3
from datetime import datetime


create_sql ='''
CREATE TABLE procedures (
    id INTEGER PRIMARY KEY,
    name TEXT
);

CREATE TABLE appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    procedure_id INT,
    date DATE,
    CONSTRAINT procedures_FK FOREIGN KEY (procedure_id) REFERENCES procedures(id)
);
'''

procedures = [
        (1,'Масаж'),
        (2,'УЗД'),
        (3,'ЕКГ'),
        (4,'Терапевт'),
        (5,'Стоматолог'),
        (6,'Укол'),

]

appointments = [
        (1,datetime(2021, 1, 15, 13, 30)),
        (1,datetime(2021, 1, 28, 14, 20)),
        (1,datetime(2021, 2, 5, 10, 15)),
        (2,datetime(2021, 2, 20, 11, 32)),
        (2,datetime(2021, 3, 28, 15, 40)),
        (3,datetime(2021, 1, 15, 13, 30)),
        (3,datetime(2021, 1, 28, 14, 20)),
        (4,datetime(2021, 2, 5, 10, 15)),
        (4,datetime(2021, 2, 20, 11, 32)),
        (4,datetime(2021, 3, 28, 15, 40)),
        (4,datetime(2021, 1, 15, 13, 30)),
        (5,datetime(2021, 1, 28, 14, 20)),
        (5,datetime(2021, 2, 5, 10, 15)),
        (6,datetime(2021, 2, 20, 11, 32)),
        (6,datetime(2021, 3, 28, 15, 40)),
]
           

db_file = input("new_db path:")
con = sqlite3.connect(db_file)
cur = con.cursor()

cur.executescript(create_sql)

cur.executemany("INSERT INTO procedures VALUES (?, ?)", procedures)
cur.executemany("INSERT INTO appointments(procedure_id,date) VALUES (?, ?)", appointments)

con.commit()
con.close()

