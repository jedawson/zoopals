import * as AWS from 'aws-sdk';
import { Customer } from '../models/user';

// create dynamo client
let docClient = new AWS.DynamoDB.DocumentClient({
  region: 'us-west-2',
  endpoint: 'https://dynamodb.us-west-2.amazonaws.com',
});

// create handler
export const handler = async (event: any) => {
  let user = JSON.parse(event.body);
  let success = await updateCustomer(user);
  console.log(success);
  let response: any = 'failed';

  if (success) {
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

