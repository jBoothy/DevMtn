-- Customers with fax numbers and set numbers to null
UPDATE customer
SET fax = NULL
WHERE fax IS NOT NULL;
-- Customers with no company (null) and set their company to "Self"
UPDATE customer
SET company = 'Self'
WHERE company = NULL;
-- Customer Julia Barnett and change last name to Thompson
UPDATE customer
SET last_name = 'Thompson'
WHERE first_name = 'Julia' AND last_name = 'Barnett';
-- Customer email luisrojas@yahoo.cl and change support rep to 4
UPDATE customer
SET support_rep_id = 4
WHERE email = 'luisrojas@yahoo.cl';
-- All track genre Metal and have no composer. Set compost to "The darkness around us"
UPDATE track
SET composer = 'The darkness around us'
WHERE genre_id = 3 AND composer IS NULL;