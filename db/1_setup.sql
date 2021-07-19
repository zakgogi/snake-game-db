DROP TABLE IF EXISTS scores;

CREATE TABLE scores (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    score int NOT NULL
);