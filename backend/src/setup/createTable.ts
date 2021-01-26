import * as AWS from 'aws-sdk';
import userService from '../services/user.service';
import { Customer, Zookeeper, Manager } from '../models/user';
import { Animal } from '../models/animal';
import { Exhibit } from '../models/exhibit';
import logger from '../log';

// Set the region
AWS.config.update({ region: 'us-west-2' });

// Create a DynamoDB service object
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

const removeUsers = {
  TableName: 'zooUsers',
};

const customerSchema = {
  AttributeDefinitions: [
    {
      AttributeName: 'username',
      AttributeType: 'S',
    },
  ],
  KeySchema: [
    {
      AttributeName: 'username',
      KeyType: 'HASH',
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 3,
    WriteCapacityUnits: 3,
  },
  TableName: 'zooUsers',
  StreamSpecification: {
    StreamEnabled: false,
  },
};

ddb.deleteTable(removeUsers, function (err, data) {
  if (err) {
    logger.error(
      'Unable to delete user table. Error JSON:',
      JSON.stringify(err, null, 2)
    );
  } else {
    logger.trace(
      'Deleted user table. Table description JSON:',
      JSON.stringify(data, null, 2)
    );
  }
  setTimeout(() => {
    ddb.createTable(customerSchema, (err, data) => {
      if (err) {
        // log the error
        logger.error('Create user table error: ' + err);
      } else {
        // celebrate, I guess
        logger.info('Created user table successfully: ' + data);
        setTimeout(() => {
          populateUserTable();
        }, 10000);
      }
    });
  }, 5000);
});

// populate table with customers
let customer1 = new Customer('dolittle', 'password', 40);
let customer2 = new Customer('steveirwin', 'password', 40);
let customer3 = new Customer('janegoodall', 'password', 40);

// create starter animals
let lion1 = new Animal('Larry', 'Lion', 'Meat');
let lion2 = new Animal('Leo', 'Lion', 'Meat');
let lion3 = new Animal('Linda', 'Lion', 'Meat');
let wallaby1 = new Animal('Wally', 'Wallaby', 'Grass');
let wallaby2 = new Animal('Wanda', 'Wallaby', 'Grass');
let wallaby3 = new Animal('Willy', 'Wallaby', 'Grass');

// create starter exhibits
let lionExhibit = new Exhibit('Lion Exhibit', [lion1, lion2, lion3]);
let wallabyExhibit = new Exhibit('Wallaby Exhibit', [
  wallaby1,
  wallaby2,
  wallaby3,
]);

// populate table with zookeepers
let zookeeper1 = new Zookeeper('Zookeeper1', 'password', 30);
zookeeper1.exhibits.push(lionExhibit);
let zookeeper2 = new Zookeeper('Zookeeper2', 'password', 30);
zookeeper2.exhibits.push(wallabyExhibit);

// populate table with managers
let manager1 = new Manager('Manager1', 'password', 30);
manager1.zookeepers.push(zookeeper1, zookeeper2);

function populateUserTable() {
  userService.addUser(customer1).then(() => {});
  userService.addUser(customer2).then(() => {});
  userService.addUser(customer3).then(() => {});
  userService.addUser(zookeeper1).then(() => {});
  userService.addUser(zookeeper2).then(() => {});
  userService.addUser(manager1).then(() => {});
}
