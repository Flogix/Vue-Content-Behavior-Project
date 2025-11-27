CREATE DATABASE ChallengeDB;
USE ChallengeDB;

CREATE TABLE Employees (
    EmpID INT AUTO_INCREMENT PRIMARY KEY,          
    FirstName VARCHAR(40) NOT NULL,                
    LastName VARCHAR(40) NOT NULL,                 
    Email VARCHAR(50) NOT NULL UNIQUE,             
    JobTitle VARCHAR(40) NOT NULL,                
    HireDate DATE NOT NULL,                        
    Salary DECIMAL(10, 2) CHECK (Salary BETWEEN 15000 AND 50000) 
);

CREATE TABLE Customers (
    CustID INT AUTO_INCREMENT PRIMARY KEY,         
    FirstName VARCHAR(40) NOT NULL,                
    LastName VARCHAR(40) NOT NULL,              
    Email VARCHAR(50) NOT NULL UNIQUE,          
    Province VARCHAR(40) NOT NULL DEFAULT 'Ontario',  
    City VARCHAR(40) NOT NULL                     
);