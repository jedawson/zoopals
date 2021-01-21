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
* Animal
  * has a zookeeper
  * has information - diet, species, name
  * has exhibit it belongs to
* Inventory
  * has food for animals
    * food type, amount (in meals probably ie one feeding = -1 stock)


## DynamoDB
Events
* User created
* Task completed
* 

## PostgreSQL