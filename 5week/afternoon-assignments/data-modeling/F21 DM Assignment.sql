CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
user_email VARCHAR(50),
user_name VARCHAR(20),
user_password VARCHAR(50)
);

CREATE TABLE recipes (
recipe_id SERIAL PRIMARY KEY,
user_id INT NOT NULL users(user_id),
recipe_name VARCHAR(50),
instructions VARCHAR(5000)
);

CREATE TABLE ingredients (
ingredient_id SERIAL PRIMARY KEY,
ingredient_name VARCHAR(50)
);

CREATE TABLE grocery_list (
grocery_id SERIAL PRIMARY KEY,
user_id INT NOT NULL users(user_id),
ingredient_recipe_id INT NOT NULL ingredient_recipe(ingredient_recipe_id)
);

CREATE TABLE ingredient_recipe (
ingredient_recipe_id SERIAL PRIMARY KEY,
ingredient_id INT NOT NULL ingredients(ingredient_id),
recipe_id INT NOT NULL recipes(recipe_id),
ingredient_amount NUMERIC
);