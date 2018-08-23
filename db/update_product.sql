UPDATE FROM products
WHERE product_id = $1;
UPDATE products 
SET description = $2 
WHERE product_id = $1;