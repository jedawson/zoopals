/********************
	Delete Tables if they exist
*****************/

drop table if exists inventoryItems cascade;
drop table if exists animal cascade;
drop table if exists exhibit cascade;
drop table if exists ticket cascade;
drop table if exists specialEvent cascade;
drop table if exists zoo cascade;

/******************************************************
   Create Tables
******************************************************/

create table inventoryItems
(
	itemID serial primary key not null,
	stock int default 0 check (stock >=0),
	price float not null,
	foodName text not null,
	foodType text not null,
	zooID int
);

create table animal
(
	animalID serial primary key not null,
	animalName text not null,
	species text not null,
	diet text not null,
	exhibitID int
);

create table exhibit
(
	exhibitID serial primary key not null,
	exhibitName text not null,
	zooID int,
	specialEventID int
);

create table ticket
(
	ticketID serial primary key not null,
	price float not null,
	ticketType text not null,
	zooID int,
	specialEventID int
);

create table specialEvent
(
	specialEventID serial primary key not null,
	specialEventName text not null,
	specialEventDate text not null,
	specialEventTime text not null,
	ticketsSold int default 0,
	request text default ''
);

create table zoo
(
	zooID serial primary key not null,
	profit float not null,
	expenses float not null
);

/******************************************************
   Create Foreign Keys
******************************************************/
-- exhibit HAS MANY animals and HAS A special event
alter table animal add constraint fk_animalExhibitID
    foreign key (exhibitID) references exhibit (exhibitID) on delete cascade on update cascade;
   
alter table exhibit add constraint fk_exhibitSpecialEventID
    foreign key (specialEventID) references specialEvent (specialEventID) on delete cascade on update cascade;
   
-- ticket HAS A special event
alter table ticket add constraint fk_ticketSpecialEventID
    foreign key (specialEventID) references specialEvent (specialEventID) on delete cascade on update cascade;
   
-- zoo HAS MANY exhibits and HAS MANY tickets available
alter table exhibit add constraint fk_exhibitZooID 
	foreign key (zooID) references zoo (zooID) on delete cascade on update cascade;
 
alter table ticket add constraint fk_ticketZooID
    foreign key (zooID) references zoo (zooID) on delete cascade on update cascade;

-- zoo HAS MANY inventory items
alter table inventoryItems add constraint fk_inventoryItemsZooID
	foreign key (zooID) references zoo (zooID) on delete cascade on update cascade;

/******************************************************
   Populate Tables
******************************************************/

-- this is for deleting all the data and reseting the auto-increment value:
-- truncate TABLENAME restart identity cascade;

-- create a zoo
insert into zoo (profit, expenses) values (0, 0);

-- add an event that tickets can reference
insert into specialevent (specialeventname, datetime) values ('General Admission', 'All Day');

-- add tickets
insert into ticket (price, tickettype, zooid, specialeventid) values ('5.00', 'Child', 1, 1);
insert into ticket (price, tickettype, zooid, specialeventid) values ('10.00', 'Senior', 1, 1);
insert into ticket (price, tickettype, zooid, specialeventid) values ('12.00', 'Student', 1, 1);
insert into ticket (price, tickettype, zooid, specialeventid) values ('15.00', 'Adult', 1, 1);

-- add exhibits
insert into exhibit (exhibitname, zooid) values ('Lion Exhibit', 1);
insert into exhibit (exhibitname, zooid) values ('Wallaby Exhibit', 1);

-- add animals
insert into animal (animalname, species, diet, exhibitid) values ('Larry', 'Lion', 'Meat', 1);
insert into animal (animalname, species, diet, exhibitid) values ('Leo', 'Lion', 'Meat', 1);
insert into animal (animalname, species, diet, exhibitid) values ('Linda', 'Lion', 'Meat', 1);
insert into animal (animalname, species, diet, exhibitid) values ('Wally', 'Wallaby', 'Grass', 2);
insert into animal (animalname, species, diet, exhibitid) values ('Wanda', 'Wallaby', 'Grass', 2);
insert into animal (animalname, species, diet, exhibitid) values ('Willy', 'Wallaby', 'Grass', 2);

-- add inventoryItems
insert into inventoryitems (stock, price, foodname, foodtype, zooid) values (10, 6.99, 'Burger', 'For People', 1);
insert into inventoryitems (stock, price, foodname, foodtype, zooid) values (10, 2.99, 'Fries', 'For People', 1);
insert into inventoryitems (stock, price, foodname, foodtype, zooid) values (10, 0.99, 'Soda', 'For People', 1);
insert into inventoryitems (stock, price, foodname, foodtype, zooid) values (10, 10.99, 'Grass', 'For Animals', 1);
insert into inventoryitems (stock, price, foodname, foodtype, zooid) values (10, 10.99, 'Meat', 'For Animals', 1);