CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    person_id INTEGER,
    product_name VARCHAR(30),
    product_price NUMERIC,
    quantity NUMERIC
);

INSERT INTO orders(person_id, product_name, product_price, quantity)
VALUES (51, 'Orderific order', 69.42, 42), (33, 'axe', 75.00, 1), (33, 'shield', 80.00, 1), (51, 'baby powder', 7.99, 3);

SELECT * FROM orders;

SELECT SUM(quantity) FROM orders;

SELECT SUM(product_price * quantity) FROM orders;

SELECT SUM(product_price * quantity),person_id FROM orders
GROUP BY person_id;