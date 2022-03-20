select *
from users 

-- @block
DELETE FROM users
where email = 'email@bla.de'

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name varchar(255),
    last_name varchar(255),
    password varchar(255),
    username varchar(255) not null,
    city varchar(255),
    created_on timestamp not null default now(),
    email varchar(255) unique not null
);
CREATE TABLE book (
    book_id SERIAL PRIMARY KEY,
    title varchar(255),
    author varchar(255),
    isbn int unique
);
CREATE TABLE requests (
    user_id int references users(user_id),
    book_id int references book(book_id)
);
CREATE TABLE offers (
    user_id int references users(user_id),
    book_id int references book(book_id),
    comment varchar(255)
);
GRANT ALL PRIVILEGES ON DATABASE booktrading TO postgres;