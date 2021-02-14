# ZooPals - Group One

## Write-Up
Welcome to the Zoopals (Group One). Our application will manage our zoo, ZOONAME. It will focus on managing and keeping track of animals and their needs as well as customers and zoo events. The roles in the application include a customer, employee, and manager. All roles have personal data, however employees and managers have tasks and managers have special tasks.

The backend will manage the authentication of users and calculations. The calculations might include total revenue per day, total customer satisfaction rating, and the total number of vaccinations given to the animals. 
The concession stand will offer dippin' dots® (the ice cream of the future!!)™ for sale.

# Brainstorming
## Roles
* Zookeepers
* Customers
* Managers

### Managers
* The Managers can bring in new animals and deliver new animals.
* Can restock food/supplies
* Managers can also do whatever a Zookeeper can.
* Managers can assign the zookeeper role.

### Zookeepers
* The Zookeepers can perform tasks
  * feed the animals
  * clean out the habitats
  * train the animals to do tricks
*  Zookeepers each manage a group of animals.
* Zookeepers can also do whatever a Customer can.

### Customers
Customers can visit the zoo and upgrade their tickets to view certain special animals. Customers can also have a "happiness" rating to determine how much they enjoyed the Zoo.

### Animals
Animals can have location, name, diets, etc. 🐫 🐱‍👤🎠🐭🐹🦄🐴🦓🐸🐷🐼🐨🐽🐾🐒🦍🐩🐏🐘🦡🦥🦘🦔🐉🦎🦈🐬🐳🐋🐙🦞🦀🦢🐥🐛🕷

## Application Layers

### Front-End
Managers, Zookeepers, Customers can use a mobile app. Their TV app can view the livestreams of the animals. 🎥
The mobile app can allow the customers to purchase tickets and get a timeslot. 
Managers can add in animals.
Zookeepers can add in feeding times.
Animals can keep track of their vaccinations.

### Back-End
The back end deals with getting data from the databases. It contains methods for authenticating the user, methods for fetching specific data, and calculating amounts such as food and money.

### DynamoDB
AWS's NoSQL so for schemaless objects. It could store a log of all the events that happen e.g. ticket sold, animal fed, streams watched, etc.

### RDS/PostgreSQL
This database's responsibilities are for storing the more structured data with clearly-defined relationships.

### Data we need to keep track of
#### Exhibit
* types of animals
* Zookeeper / Manager => 1 keeper per exhibit or manager?

#### Animals
* id / name
* diet
* Zookeeper
* vaccination
  
#### People - For All Role Types
* name
* role

#### Zookeeper
* ids/names of animals they take care of
* amount of food per type? (like grain, fruit, veggie, meat)
* makes request for food orders
  
#### Manager
* ids
* add/remove animal
* manage food inventory
* manage zookeeper role
* manage events
  
#### Customer
* ids/name
* favorite animal
* ids of purchased tickets
* customer age: child, student, adult, senior
 
#### Overall Zoo Information
* ticket prices
* tickets sold?
* number of animals
* number of employees 
  
#### Ticket
* date
* time
* customer name
* status: available for sale, sold, refunded, used, no show
* price of tickets

#### Event
* id
* date&time
* location
* name of event

## Use Cases
### General User
* As a [role], I can log in.
* As a Customer, I can register.
* As a Customer, I can buy a ticket.
* As a Customer, I can view ticket prices (general admission and special exhibits).
### Zookeeper
* As a Zookeeper, I can view all the animals I'm in charge of.
* As a Zookeeper, I can feed the animals I take care of.
* As a Zookeeper, I can clean the exhibit.
* As a Zookeeper, I can request for food orders.
* As a Zookeeper, I can complete tasks assigned by Manager.
### Manager
* As a Manager, I can view the Zookeepers and their responsibilities?
* As a Manager, I can order food/supplies. 
* As a Manager, I can add/remove Zookeepers (from zoo and/or exhibit).
* As a Manager, I can add/remove animals (from zoo and/or exhibit).
* As a Manager, I can create an event/exhibit.
* As a Manager, I can assign tasks to Zookeepers.
### System
* As a System, I can keep track of the food.
  * Track when Manager orders food and when Zookeeper feeds animals 
* As a System, I can keep track of the number of tickets sold.
* As a System, I can calculate the ticket price from a Customer's age.
* As a System, I can calculate the total revenue each day.
* As a System, I can calculate the concession stand's profit.
* As a System, I can keep track of the number of tasks completed or in progress each day.