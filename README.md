# Zoo Management App

## Project Description
This zoo management native application allows for different users to perform different actions based on their roles. Customers can view and purchase tickets for the zoo, zookeepers can complete tasks for exhibits and animals they are in charge of, and the zoo manager can manage the inventory and set specific tasks.

## Technologies Used
* TypeScript - version 4.1.3
* React Native - version 0.63
* Expo - version 40.0
* Axios - version 0.21
* AWS DynamoDB - version 2019.11.21
* PostgresSQL (Amazon RDS) - version 12.4
* AWS Lambda 
* Amazon API Gateway 
* Jest - version 26.6.3

## Features
* Users can register an account, log in, and log out.
* Users can view their profiles.
* Customers can view owned tickets and all zoo exhibits. 
* Customers can purchase tickets.
* Zookeepers can view all animals they take care of, and tasks needed to complete.
* Zookeepers can request for more food orders and complete tasks.
* Managers can view all staff members and inventory amounts.
* Managers can assign tasks to zookeepers and restock inventory.
* The system can calculate total revenue, update number of tickets sold, and keep track of inventory amount.

### To-Do
* Implement an add and remove feature for animals, exhibts, and staff.
* Implement a task progress tracker for Zookeepers.

## Getting Started
In the terminal run these commands:
1. To clone: `git clone https://github.com/jedawson/zoopals.git`
2. Install dependencies in both backend and frontend: `npm install`
3. Setup tables from the backend folder: `npm run setup`
4. Start up application from the frontend folder: `expo-cli start`

## Usage
Usernames to log in with (roles are in parentheses)
* janegoodall (Customer)
* jeffcorwin (Customer)
* Zookeeper1 (Zookeeper)
* Zookeeper2 (Zookeeper)
* Manager1 (Manager)

All passwords are `pass`. Once logged in, you can navigate to available tabs to perform actions.

## Contributors
[Cynthia Enciso](https://github.com/cyenciso)

[Jonathan Dawson](https://github.com/jedawson)

[Kathryn Clark](https://github.com/kathrync23)

[Nina Nguyen](https://github.com/ninancode) 

## License
None.
