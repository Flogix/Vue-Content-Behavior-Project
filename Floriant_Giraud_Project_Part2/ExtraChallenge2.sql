CREATE DATABASE CommercialWebDB;
USE CommercialWebDB;

CREATE TABLE Customers (
    CustID INT AUTO_INCREMENT PRIMARY KEY,         
    FirstName VARCHAR(20),                          
    LastName VARCHAR(20),                           
    Email VARCHAR(50) NOT NULL UNIQUE,              
    Province VARCHAR(40) NOT NULL,                  
    BirthDate DATE NOT NULL,                        
    City VARCHAR(40) NOT NULL                       
);

CREATE TABLE Invoices (
    InvoiceID INT AUTO_INCREMENT PRIMARY KEY,       
    InvoiceDate DATE NOT NULL,                      
    InvoiceNote TEXT,                               
    InvoiceDiscount DECIMAL(10, 2),                 
    InvoiceTotal DECIMAL(10, 2) NOT NULL,           
    CustID INT,                                     
    FOREIGN KEY (CustID) REFERENCES Customers(CustID)
);

ALTER TABLE Invoices
DROP COLUMN InvoiceDiscount;

ALTER TABLE Customers
MODIFY COLUMN FirstName VARCHAR(40) NOT NULL,
MODIFY COLUMN LastName VARCHAR(40) NOT NULL;

ALTER TABLE Customers
ADD COLUMN Phone VARCHAR(20) AFTER Email; 

INSERT INTO Customers (FirstName, LastName, Email, Phone, Province, BirthDate, City)
VALUES 
('Alice', 'Dupont', 'alice@mail.com', '555-0101', 'Quebec', '1990-05-15', 'Montreal'),
('Bob', 'Martin', 'bob@mail.com', '555-0102', 'Ontario', '1985-10-20', 'Toronto'),
('Charlie', 'Tremblay', 'charlie@mail.com', NULL, 'Quebec', '1992-03-25', 'Quebec City'),
('Diana', 'Prince', 'diana@mail.com', '555-0104', 'British Columbia', '1980-07-01', 'Vancouver');

INSERT INTO Invoices (InvoiceDate, InvoiceNote, InvoiceTotal, CustID)
VALUES 
('2023-01-10', 'Electronic purchase', 150.50, 1), 
('2023-02-15', 'Maintenance service', 300.00, 2), 
('2023-03-20', 'Subscription renewal', 50.00, 1), 
('2023-04-05', 'Consultation', 500.00, 4);       

UPDATE Customers
SET City = 'Laval'
WHERE CustID = 1;

UPDATE Invoices
SET InvoiceTotal = 1200.00
WHERE InvoiceID = 4;

SELECT CONCAT(c.FirstName, ' ', c.LastName) AS FullName, i.InvoiceDate, i.InvoiceTotal, i.InvoiceNote
FROM Customers c
JOIN Invoices i ON c.CustID = i.CustID;

SELECT CONCAT(c.FirstName, ' ', c.LastName) AS FullName, i.InvoiceTotal
FROM Invoices i
JOIN Customers c ON i.CustID = c.CustID
ORDER BY i.InvoiceTotal DESC
LIMIT 1;

SELECT CONCAT(FirstName, ' ', LastName) AS FullName, BirthDate
FROM Customers
ORDER BY BirthDate ASC;

SELECT c.FirstName, c.Province, i.InvoiceTotal
FROM Customers c
INNER JOIN Invoices i ON c.CustID = i.CustID
WHERE c.Province = 'Quebec';

SELECT c.Email, i.InvoiceTotal
FROM Customers c
INNER JOIN Invoices i ON c.CustID = i.CustID
WHERE i.InvoiceTotal > 100;