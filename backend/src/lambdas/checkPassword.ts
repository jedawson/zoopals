import * as AWS from "aws-sdk";
import { User, Customer, Manager, Zookeeper } from "../models/user";

// create dynamo client
let docClient = new AWS.DynamoDB.DocumentClient({
  region: "us-west-2",
  endpoint: "https://dynamodb.us-west-2.amazonaws.com",
});

// create handler
export const handler = async (event: any): Promise<any> => {
  console.log(event);
  let username = JSON.parse(event.body).username;
  let password = JSON.parse(event.body).password;
  console.log(username);
  let user = await getUserByUsername(username);
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    },
    body: "",
  };
  if (user && user.password == password) {
    response.body = JSON.stringify(user);
    return response;
  } else {
    response.statusCode = 403;
    response.body = "Unauthorized";
  }
  return response;
};

// dao function
async function getUserByUsername(
  name: string
): Promise<User | Customer | Zookeeper | Manager | null> {
  // GetItem api call allows us to get something by the key
  const params = {
    TableName: "zooUsers",
    Key: {
      username: name,
    },
  };
  return await docClient
    .get(params)
    .promise()
    .then((data) => {
      if (data && data.Item) {
        return data.Item as User | Customer | Zookeeper | Manager;
      } else {
        return null;
      }
    });
}
