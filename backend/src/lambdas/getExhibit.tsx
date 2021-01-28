import * as AWS from 'aws-sdk';
import { Exhibit } from '../models/exhibit';

// create dynamo client
let docClient = new AWS.DynamoDB.DocumentClient({
  region: 'us-west-2',
  endpoint: 'http://dynamodb.us-west-2.amazonaws.com',
});

// create handler
export const handler = async (event:any) => {
    let username = JSON.parse(event.body)
    const res = await getExhibitByUser(username);
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify(res)
        
    };
    return response;
};

// dao function
async function getExhibitByUser(username: string): Promise<Exhibit> {
    const params = {
      TableName: 'zooUsers',
      Key:{
        'username': username,
      },
      ProjectionExpression: 'exhibits'
    };
    return await docClient
      .get(params)
      .promise()
      .then((data) => {
        return data.Item as Exhibit;
      });
  }

