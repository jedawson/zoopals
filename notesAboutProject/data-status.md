# Data Distribution
Class definitions to determine what information we need to keep track of so we can plan the databases and their respective tables. 
* Person (not a table)
  * has personal information - age, username, password, 
* Zookeeper extends Person
  * has exhibits that they are assigned to 
  * has tasks
* Customer extends Person
  * has tickets
* Manager extends Person
  * has Zookeepers they manage
* Zoo
  * has exhibits
  * has profit
  * has expenses
  * has ticket prices
    * childTicket
    * studentTicket
    * adultTicket
    * seniorTicket
* Animal
  * has a zookeeper
  * has information - diet, species, name
  * has exhibit it belongs to
* Exhibits
  * has animals
  * has admission price
  * has special events like feedings, dolphin shows
* Inventory
  * has food for animals
    * food type, amount (in meals probably ie one feeding = -1 stock)
  * has food for purchase by customers


## DynamoDB
Events
* User created
* Task completed
* 

Animal
* Name
* Zookeeper
* diet
* species
* exhibit

Person / User
* Username
* Password
* Age
* Role
* AnimalsToTakeCareOf
* 

## PostgreSQL

Zoo
* 