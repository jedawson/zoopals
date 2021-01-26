import * as AWS from 'aws-sdk';
import { User } from '../models/user';

// create dynamo client
let docClient = new AWS.DynamoDB.DocumentClient({
  region: 'us-west-2',
  endpoint: 'http://dynamodb.us-west-2.amazonaws.com',
});

// create handler
export const handler = async () => {
  const users = await getUsers();
  if (users) {
    return JSON.stringify(users);
  } else {
    return Error('404'); // he said this was not a good way to do this
  }
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
