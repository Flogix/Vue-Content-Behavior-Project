INSERT INTO Employees (FirstName, LastName, Email, JobTitle, HireDate, Salary)
VALUES 
('John', 'Doe', 'john.doe@example.com', 'Manager', '2022-01-15', 45000),
('Jane', 'Smith', 'jane.smith@example.com', 'Assistant', '2023-03-10', 30000),
('Mike', 'Brown', 'mike.brown@example.com', 'Assistant', '2023-06-20', 25000);

INSERT INTO Customers (FirstName, LastName, Email, City) 
VALUES 
('Alice', 'Green', 'alice@test.com', 'Toronto'),
('Bob', 'White', 'bob@test.com', 'Ottawa'), 
('Charlie', 'Black', 'charlie@test.com', 'Hamilton');

SELECT * FROM Employees;

SELECT AVG(Salary) AS AverageSalary FROM Employees;


SELECT JobTitle, COUNT(*) FROM Employees GROUP BY JobTitle;

UPDATE Customers 
SET City = 'Mississauga' 
WHERE CustID = 1;