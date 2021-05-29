INSERT OR IGNORE INTO admins
( username, password_hash)
VALUES('admin', 'pbkdf2:sha256:150000$EvfqjLc2$12be7b2e8da409ccc69f3358660277f6af0e738fb07d628afebfc6b9612719e9');


INSERT OR IGNORE INTO services
(name)
VALUES
('Массаж'),
('Салон Краси'),
('Сауна'),
('Солярій'),
('Фітнес');