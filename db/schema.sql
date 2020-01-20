DROP DATABASE IF EXISTS burger_DB;

CREATE DATABASE burger_DB;

USE burger_DB;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name: VARCHAR(50) NOT NULL,
    completed BOOLEAN
)
