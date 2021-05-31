-- create database table


CREATE TABLE students(
    std_id SERIAL PRIMARY KEY, fullname VARCHAR(255),
    email VARCHAR(255), phone NUMERIC, address VARCHAR(555),
    course VARCHAR(200), message VARCHAR(555)
);
