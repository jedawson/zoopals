import * as AWS from 'aws-sdk';
import userService from './user.service'
import { User, Customer, Zookeeper, Manager } from '../models/user'

// Set the region
AWS.config.update({ region: 'us-west-2' });

// Create a DynamoDB service object
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

const removeUsers = {
    TableName: 'zooUsers'
}

const customerSchema = {
    AttributeDefinitions: [
        {
            AttributeName: 'username',
            AttributeType: 'S'
        }
    ],
    KeySchema: [
        {
            AttributeName: 'username',
            KeyType: 'HASH'
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 3,
        WriteCapacityUnits: 3
    },
    TableName: 'zooUsers',
    StreamSpecification: {
        StreamEnabled: false
    }
};

ddb.deleteTable(removeUsers, function (err, data) {
    if (err) {
        console.error('Unable to delete table. Error JSON:', JSON.stringify(err, null, 2));
    } else {
        console.log('Deleted table. Table description JSON:', JSON.stringify(data, null, 2));
    }
    setTimeout(()=>{
        ddb.createTable(customerSchema, (err, data) => {
            if (err) {
                // log the error
                console.log('Error', err);
            } else {
                // celebrate, I guess
                console.log('Table Created', data);
                setTimeout(()=>{
                    populateUserTable();
                }, 10000);
            }
        });
    }, 5000);
});

let customer1 = new Customer();
customer1.username = 'dolittle'
customer1.password = 'pass'
customer1.age = 40
customer1.membershipLevel = 'basic'

let customer2 = new Customer();
customer2.username = 'steveirwin'
customer2.password = 'pass'
customer2.age = 40
customer2.membershipLevel = 'basic'

let customer3 = new Customer();
customer3.username = 'janegoodall'
customer3.password = 'pass'
customer3.age = 40
customer3.membershipLevel = 'basic'

function populateUserTable() {
    userService.addUser(customer1).then(()=>{});
    userService.addUser(customer2).then(()=>{});
    userService.addUser(customer3).then(()=>{});
}

