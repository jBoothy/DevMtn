-- All albums

-- SELECT * FROM album;

-- Showing name and artist ID from artist table

-- SELECT name, artist_id FROM artist;

-- Picking out songs from album using artist ID

-- SELECT * FROM album WHERE artist_id=1;

-- Selecting all customer table

-- SELECT * FROM customer;

-- Getting amount of customers on table

-- SELECT COUNT(*) FROM customer;

-- Finding location of customers

-- SELECT * FROM customer WHERE city = 'Paris';

-- Customer location ordering it in ABC

-- SELECT * FROM customer WHERE city IN ('Paris','Rome', 'Berlin')
-- ORDER BY city ASC --DESC is decending

-----------------------------------------------------------------
-- Creating a new table

-- CREATE TABLE food(
--   food_id SERIAL PRIMARY KEY,
--   food_name VARCHAR(30) NOT NULL,
--   food_price NUMERIC,
--   is_good BOOLEAN
--   );

-- INSERT INTO food(food_name, food_price, is_good)
-- VALUES('Hamburger', 6.99, TRUE), ('Hot Dog', 4.95, TRUE), ('Noodles', 0, TRUE);

-- DELETE FROM food
-- WHERE food_id = 1;

-- UPDATE food
-- SET food_name = 'Broccoli', food_price = 3.50, is_good = FALSE
-- WHERE food_id = 3;
  
-- INSERT INTO food (food_name, food_price, is_good)
-- VALUES ('Pizza', 7.00, TRUE);

-- SELECT * FROM food;