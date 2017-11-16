# Labs
Repo for Facebook Bootcamp Grand Rapids lab work

copyright Holly J. Huber


Northwind database SQL Lab


1. Select all the records from the "Customers" table.

SELECT * 
FROM customers;

2. Get distinct countries from the Customers table.

SELECT DISTINCT country 
FROM customers;


3. Get all the records from the table Customers where the Customer’s ID starts with “BL”.

SELECT * 
FROM customers 
WHERE customerid LIKE 'BL%';


4. Get the first 100 records of the orders table.

SELECT * 
FROM orders LIMIT 100;


5. Get all customers that live in the postal codes 1010, 3012, 12209, and 05023.

SELECT * 
FROM customers 
WHERE postalcode IN ('1010', '3012', '12209', '05023');


6. Get all orders where the ShipRegion is not equal to NULL.

SELECT * 
FROM orders 
WHERE shipregion IS NOT NULL;


7. Get all customers ordered by the country, then by the city.

SELECT * 
FROM customers 
ORDER BY country, city;


8. Add a new customer to the customers table. You can use whatever values/

INSERT INTO customers (customerid, contactname, companyname, city)
    values ('IITHI', 'Maddie Murphy', 'Island InfoTech', 'Honolulu');


9. Update all ShipRegion to the value ‘EuroZone’ in the Orders table, where the
ShipCountry is equal to France.

UPDATE orders 
SET shipregion = 'EuroZone' 
WHERE shipcountry = 'France';


10. Delete all orders from `order_details` that have quantity of 1.

DELETE FROM order_details 
WHERE quantity  = 1;


11. Calculate the average, max, and min of the quantity at the `order details` table.

SELECT orderid, MAX(quantity), MIN(quantity), AVG(quantity) 
FROM order_details;


12. Calculate the average, max, and min of the quantity at the `order details` table,
grouped by the orderid.


SELECT MAX(quantity), MIN(quantity), AVG(quantity) 
FROM order_details 
GROUP BY orderid;

//or display with orderid

SELECT orderid, MAX(quantity), MIN(quantity), AVG(quantity) 
FROM order_details 
GROUP BY orderid;

//or display count too!


SELECT orderid, COUNT(orderid), MAX (quantity), MIN (quantity), AVG (quantity) 
FROM order_details 
GROUP BY orderid;

13. Find the CustomerID that placed order 10290 (orders table)

SELECT customerid 
FROM orders 
WHERE orderid='10290';

BONUS:
14. Do an inner join, left join, right join on orders and customers tables. 

SELECT * 
FROM customers 
JOIN orders 
ON customers.customerid = orders.customerid;

SELECT * 
FROM orders 
LEFT JOIN customers 
ON orders.customerid = customers.customerid;

SELECT * 
FROM orders 
RIGHT JOIN customers 
ON orders.customerid = customers.customerid;

15. Get employees’ firstname for all employees who report to no one. 

SELECT firstname 
FROM employees 
WHERE reportsto IS NULL;

16. Get employees’ firstname for all employees who report to Andrew.

SELECT firstname 
FROM employees 
WHERE reportsto = 2;

//would this require a SELF JOIN??
