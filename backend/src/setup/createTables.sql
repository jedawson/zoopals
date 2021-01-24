/******************************************************
   Create Tables
******************************************************/

create table food
(
	foodID serial primary key not null,
	stock int default 0 check (stock >=0),
	price float not null,
	foodType text not null
);

create table inventory
(
	inventoryID serial primary key not null,
	foodID int
);

create table animal
(
	animalID serial primary key not null,
	animalName text not null,
	species text not null,
	diet text not null
);

create table exhibit
(
	exhibitID serial primary key not null,
	exhibitName text not null,
	specialEventID int,
	animalID int
);

create table ticket
(
	ticketID serial primary key not null,
	price float not null,
	ticketType text not null,
	specialEventID int
);

create table specialEvent
(
	specialEventID serial primary key not null,
	specialEventName text not null,
	dateTime text not null
);

create table zoo
(
	zooID serial primary key not null,
	profit float not null,
	expenses float not null,
	ticketID int,
	exhibitID int
);

/******************************************************
   Create Foreign Keys
******************************************************/

-- inventory HAS MANY food
alter table inventory add constraint fk_inventoryFoodID
    foreign key (foodID) references food (foodID) on delete no action on update no action;
	
-- exhibit HAS MANY animals and HAS A special event
alter table exhibit add constraint fk_exhibitAnimalID
    foreign key (animalID) references animal (animalID) on delete no action on update no action;
   
alter table exhibit add constraint fk_exhibitSpecialEventID
    foreign key (specialEventID) references specialEvent (specialEventID) on delete no action on update no action;
   
-- ticket HAS A special event
alter table ticket add constraint fk_ticketSpecialEventID
    foreign key (specialEventID) references specialEvent (specialEventID) on delete no action on update no action;
   
-- zoo HAS MANY exhibits and HAS MANY tickets available
alter table zoo add constraint fk_zooExhibitID
    foreign key (exhibitID) references exhibit (exhibitID) on delete no action on update no action;
 
alter table zoo add constraint fk_zooTicketID
    foreign key (ticketID) references ticket (ticketID) on delete no action on update no action;