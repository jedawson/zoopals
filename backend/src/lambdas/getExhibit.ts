import * as AWS from 'aws-sdk';
import { Exhibit } from '../models/exhibit';

// create dynamo client
let docClient = new AWS.DynamoDB.DocumentClient({
  region: 'us-west-2',
  endpoint: 'https://dynamodb.us-west-2.amazonaws.com',
});

interface MyEvent {
  // username: any;
  body: string;
  // username: string
}
// create handler
export const handler = async (event: MyEvent) => {
    // let username = event.path.substring(event.path.lastIndexOf('/')+1, event.path.length);
    let username = JSON.parse(event.body).username;
    const res = await getExhibitByUser(username);
    // console.log(`username: ${username}`)
    // console.log(`res: ${res}`)
    // console.log(event)
    let response;
    if (res) {
      response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify(res)   
    };
    } else {
      response = {
        statusCode: 400,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({})
        
    };
    }
    
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

