import * as AWS from 'aws-sdk';
import logger from '../log';
import { Customer, Manager, User, Zookeeper } from '../models/user';

// create dynamo client
let docClient = new AWS.DynamoDB.DocumentClient({
  region: 'us-west-2',
  endpoint: 'https://dynamodb.us-west-2.amazonaws.com',
});

// create handler
export const handler = async (event: any) => {
  let user = JSON.parse(event.body);
  let success = await updateZookeeper(user);
  console.log(success);
  let response: any = 'failed';

  if (success) {
    response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT',
      },
      body: JSON.stringify(user),
    };
  }

  return response;
};

async function updateZookeeper(user: Zookeeper) {
  const params = {
    TableName: 'zooUsers',
    Key: {
      username: user.username,
    },
    UpdateExpression: 'set #tasks = :tasks',
    ExpressionAttributeNames: {
      '#tasks': 'tasks',
    },
    ExpressionAttributeValues: {
      ':tasks': user.tasks,
    },
    ReturnValues: 'UPDATED_NEW',
  };

  return await docClient
    .update(params)
    .promise()
    .then((data) => {
      logger.info('Updated Zookeeper successfully');
      return true;
    })
    .catch((error) => {
      logger.error('Error updating Zookeeper: ' + error);
      return null;
    });
}
