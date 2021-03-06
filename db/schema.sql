DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	id INT AUTO_INCREMENT
    , burger_name VARCHAR(30) NOT NULL
    , devoured BOOLEAN DEFAULT true NOT NULL
    , PRIMARY KEY(id)
    );