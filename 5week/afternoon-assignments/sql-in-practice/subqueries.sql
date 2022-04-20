-- 1
SELECT * FROM invoice
WHERE invoice_id IN (
SELECT invoice_id FROM invoice_line 
WHERE unit_price >.99
);
-- 2

-- 3

-- 4

-- 5

-- 6
