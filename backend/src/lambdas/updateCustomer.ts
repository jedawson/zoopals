import * as AWS from 'aws-sdk';
import { Customer, Manager, User, Zookeeper } from '../models/user';

// create dynamo client
let docClient = new AWS.DynamoDB.DocumentClient({
  region: 'us-west-2',
  endpoint: 'http://dynamodb.us-west-2.amazonaws.com',
});

// create handler
export const handler = async (event: any) => {
  let user = JSON.parse(event.body);
  let success = await updateCustomer(user);
  console.log(success);
  let response: any = 'failed';

  if (success) {
    // send back updated user to make sure updates happened
    let user = await getUserByUsername(event.body.username);
    if (user) {
      response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT"
        },
        body: JSON.stringify(user)
      };
    }
  }
  
  return response;
};



// dao function
async function updateCustomer(user: Customer) {
  const params = {
      TableName: 'zooUsers',
      Key: {
          'username': user.username
      },
      UpdateExpression: 'set #tickets = :t',
      ExpressionAttributeNames: {
        '#tickets': 'tickets',
    },
      ExpressionAttributeValues: {
          ':t': user.tickets,
      },
      ReturnValues: 'UPDATED_NEW'
  };
  return await docClient.update(params).promise().then((data) => {
      return true;
  }).catch(error => {
      return null;
  });
}

async function getUserByUsername(name: string): Promise<User | Customer | Zookeeper | Manager | null> {
  // GetItem api call allows us to get something by the key
  const params = {
      TableName: 'zooUsers',
      Key: {
          'username': name
      }
  };
  return await docClient.get(params).promise().then((data) => {
      if (data && data.Item) {
          return data.Item as User | Customer | Zookeeper | Manager;
      } else {
          return null;
      }
  })
}
