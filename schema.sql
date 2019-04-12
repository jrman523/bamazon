drop database if exists bamazon_db;
create database  bamazon_db;
use bamazon_db;

create table products(
	item_id integer not null AUTO_INCREMENT,
    PRIMARY KEY (item_id),
    product_name varchar(40) not null,
    department_name varchar(20) not null,
    price float not null,
    stock_quantity integer not null
);

insert into bamazon_db.products (product_name,department_name,price,stock_quantity)
values ('Aibo puppy robot','home',4000,5),
('Roll-up TV','technology',700,20),
('8K arrives','technology',1400,10),
('Driverless people mover','technology',6000,1),
('Face unlocking car','Automotive',1500,6),
('Self-driving travel bag','travel',500,50),
('Deep sea robot','travel',4000,8),
('3D face scanner','art',8500,2),
('Smart underclothing','clothing',30,200),
('Camera for the blind','technology',2,9000);