-- Order made from USA
SELECT COUNT(billing_country) FROM invoice
WHERE billing_country = 'USA'
-- Largest order total amount
SELECT * FROM invoice
ORDER BY total DESC
LIMIT 1;
-- Smallest order total amount
SELECT * FROM invoice
ORDER BY total ASC
LIMIT 1;
-- Orders more than $5
SELECT * FROM invoice
WHERE total > 5;
-- Count orders smaller than $5
SELECT COUNT(total) FROM invoice
WHERE total < 5;
-- Count orders in CA, TXX or AZ (use IN)
SELECT COUNT(billing_state) FROM invoice
WHERE billing_state IN ('CA', 'TX', 'AZ');
-- Average total of orders
SELECT AVG(total) FROM invoice;
-- Total sum of orders
SELECT SUM(total) FROM invoice;
-- Update invoice with invoice_id of 5 to have total order amount of 24
UPDATE invoice
SET total = 24
WHERE invoice_id=5;
-- Delete invoice with invoice_id of 1
DELETE FROM invoice
WHERE invoice_id = 1;