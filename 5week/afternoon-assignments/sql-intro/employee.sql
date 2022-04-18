-- Employee first and last names only in Calgary
SELECT first_name, last_name FROM employee
WHERE city='Calgary';
-- Birthdate of youngest employee
SELECT first_name, last_name, birth_date FROM employee
ORDER BY birth_date DESC
LIMIT 1;
-- Birthdate of oldest employee
SELECT first_name, last_name, birth_date FROM employee
ORDER BY birth_date ASC
LIMIT 1;
-- Reports to Nancy Edwards
SELECT employee_id FROM employee
WHERE first_name='Nancy' AND last_name = 'Edwards';
SELECT * FROM employee
WHERE reports_to = 2;
-- How many people in Lethbridge
SELECT COUNT(city) FROM employee
WHERE city = 'Lethbridge'