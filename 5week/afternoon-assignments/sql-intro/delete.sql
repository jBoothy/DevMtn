-- INSERT INTO animals ( name, type, age ) 
-- VALUES ('Leo', 'lion', 12),
-- ('Jerry', 'mouse', 4),
-- ('Marty', 'zebra', 10),
-- ('Gloria', 'hippo', 8),
-- ('Alex', 'lion', 9),
-- ('Melman', 'giraffe', 15),
-- ('Nala', 'lion', 2),
-- ('Marie', 'cat', 1),
-- ('Flounder', 'fish', 8);

-- Delete "lion" entries
DELETE FROM animals
WHERE type='lion';
-- Delete animals that start with "M"
DELETE FROM animals
WHERE name LIKE 'M%';
-- Delete entries whose age is less than 9
DELETE FROM animals
WHERE age<9;