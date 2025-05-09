--create database MyStoreDB

create table AccountMember(
MemberID nvarchar(20) primary key not null,
MemberPassword nvarchar(80) not null,
FullName nvarchar(80) not null,
EmailAddress nvarchar(100) not null,
MemberRole int not null
)

create table Categories(
CategoryID int primary key not null,
CategoryName nvarchar(15) not null
)

create table Products(
ProductID int primary key not null,
ProductName nvarchar(40) not null,
CategoryID int references Categories(CategoryID) not null,
UnitsInStock smallint null,
UnitPrice money null
)

USE MyStoreDB;
GO

-- 1. Insert sample members

--delete from AccountMember
INSERT INTO AccountMember (MemberID, MemberPassword, FullName,      EmailAddress,            MemberRole) VALUES
  ('user001', ('pass123'), 'Alice Nguyen', 'alice@example.com',      0),
  ('user002', ('secret456'),'Bob Tran',    'bob.tran@example.com',   0),
  ('mod001',  ('modpass'),  'Carol Pham',  'carol.pham@example.com', 1),
  ('admin1',  ('admin789'), 'David Le',    'david.le@example.com',    2),
  ('user003', ('hello321'), 'Eve Vo',      'eve.vo@example.com',      0);
GO

-- 2. Insert sample categories
INSERT INTO Categories (CategoryID, CategoryName) VALUES
  (10, 'Electronics'),
  (20, 'Books'),
  (30, 'Clothing'),
  (40, 'Toys');
GO

-- 3. Insert sample products
INSERT INTO Products (ProductID, ProductName,           CategoryID, UnitsInStock, UnitPrice) VALUES
  (1001, 'Smartphone X1',          10,          50,          799.99),
  (1002, 'Wireless Headphones',    10,          150,         199.50),
  (2001, 'The Great Novel',        20,          200,          14.99),
  (2002, 'Learning SQL Guide',     20,          120,          29.95),
  (3001, 'Men''s T-Shirt Black',    30,          75,           19.99),
  (4001, 'Building Blocks Set',     40,          30,           49.99);
GO
