CREATE TABLE person (
    person_id SERIAL PRIMARY KEY,
    person_name VARCHAR(30),
    person_age NUMERIC,
    person_height NUMERIC,
    person_city VARCHAR(30),
    person_favorite_color VARCHAR(20)
)

INSERT INTO person(person_name, person_age, person_height, person_city,person_favorite_color)
VALUES ('John', 28, 185.42, 'Salem', 'Indigo'), ('Cassidy', 26, 152.4, 'Salem', 'Blue'), ('Rick', 54, 198.12, 'Salem', 'Red'), ('John Sr', 49, 177.8, 'Springville', 'Green'), ('Kayson', 23, 186.42, 'Spanish Fork', 'Blue');
-- Height descending
SELECT * FROM person WHERE person_height
ORDER BY person_height DESC
-- Height ascending
SELECT * FROM person WHERE person_height
ORDER BY person_height ASC
-- Age descending
SELECT * FROM person WHERE person_age
ORDER BY person_age DESC
-- Age older than 20
SELECT * FROM person WHERE person_age > 20
-- Age exactly 18
SELECT * FROM person WHERE person_age = 18
-- Age less than 20 and older than 30
SELECT * FROM person WHERE person_age < 20 OR person_age > 30
-- Age not 27
SELECT * FROM person WHERE person_age != 27
-- Not red
SELECT * FROM person WHERE person_favorite_color != 'Red'
-- Not red and not blue
SELECT * FROM person WHERE person_favorite_color != 'Red' OR person_favorite_color != 'Blue'
-- Favorite color is orange or green
SELECT * FROM person WHERE person_favorite_color = 'Orange' OR person_favorite_color = 'Green'
-- Favorite color is orange, green or blue (use IN)
SELECT * FROM person WHERE person_favorite_color IN ('Orange', 'Green', 'Blue')
-- Favorite color is yellow or purple (use IN)
SELECT * FROM person WHERE person_favorite_color IN ('Yellow', 'Indigo', 'Purple')