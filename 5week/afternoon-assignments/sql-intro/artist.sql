-- Adding 3 artists to list
INSERT INTO artist(name)
VALUES ('Tenacious D'), ('DIO'), ('Colter Wall');
-- Top 10 descending
SELECT * FROM artist
ORDER BY name DESC
LIMIT 10;
-- Top 5 ascending
SELECT * FROM artist
ORDER BY name ASC
LIMIT 5;
-- All artists that start with "Black"
SELECT * FROM artist
WHERE name LIKE 'Black%';
-- All artists that contain "Black"
SELECT * FROM artist
WHERE name LIKE '%Black%'