DROP TABLE IF EXISTS actors;

CREATE TABLE actors (
    Actors VARCHAR PRIMARY KEY,
    Age INTEGER NOT NULL,
    Oscars INTEGER
);

INSERT INTO actors (Actors, Age, Oscars) VALUES ('Leonardo DiCaprio', 41, 1);
INSERT INTO actors (Actors, Age, Oscars) VALUES ('Jennifer Lawrence', 25, 1);
INSERT INTO actors (Actors, Age, Oscars) VALUES ('Samuel L. Jackson', 67, 0);
INSERT INTO actors (Actors, Age, Oscars) VALUES ('Meryl Streep', 66, 3);
INSERT INTO actors (Actors, Age, Oscars) VALUES ('John Cho', 43, 0);


SELECT * FROM actors WHERE Oscars > 1;
SELECT * FROM actors WHERE Age > 30;