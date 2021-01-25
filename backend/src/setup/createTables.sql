/******************************************************
   Create Tables
******************************************************/

create table inventoryItem
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
	dateTime text not null
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
    foreign key (exhibitID) references exhibit (exhibitID) on delete no action on update no action;
   
alter table exhibit add constraint fk_exhibitSpecialEventID
    foreign key (specialEventID) references specialEvent (specialEventID) on delete no action on update no action;
   
-- ticket HAS A special event
alter table ticket add constraint fk_ticketSpecialEventID
    foreign key (specialEventID) references specialEvent (specialEventID) on delete no action on update no action;
   
-- zoo HAS MANY exhibits and HAS MANY tickets available
alter table exhibit add constraint fk_exhibitZooID
    foreign key (zooID) references zoo (zooID) on delete no action on update no action;
 
alter table ticket add constraint fk_ticketZooID
    foreign key (zooID) references zoo (zooID) on delete no action on update no action;