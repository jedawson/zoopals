import * as AWS from 'aws-sdk';
import { User } from '../models/user';

// create dynamo client
let docClient = new AWS.DynamoDB.DocumentClient({
  region: 'us-west-2',
  endpoint: 'https://dynamodb.us-west-2.amazonaws.com',
});

// create handler
export const handler = async () => {
  const users = await getUsers();
  const response = {
    statusCode: 200,
    headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body: JSON.stringify(users)
  };
  return response;
};



// dao function
async function getUsers(): Promise<User[]> {
  const params = {
    TableName: 'zooUsers',
  };
  return await docClient
    .scan(params)
    .promise()
    .then((data) => {
      return data.Items as User[];
    });
}
