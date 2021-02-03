import * as AWS from 'aws-sdk';

export class User {

  public username = '';
  public password = '';
  public age = 0;

  constructor(username: string, password: string, age: number) {
      this.username = username;
      this.password = password;
      this.age = age;
  }
}

export class Customer extends User {

  public role: string = 'Customer';
  public tickets: Ticket[] = [];
  public membershipLevel:string = 'Basic'; //like gold or silver

  constructor(username: string, password: string, age: number) {
      super(username, password, age);
  }
}

export class SpecialEvent {

  public name = '';
  public dateTime = '';
  
}

export class Ticket {

  public price = 0;
  public ticketType = ''; // like child, student, adult, senior
  public specialEvent: SpecialEvent = new SpecialEvent();
  
}

// create dynamo client
let docClient = new AWS.DynamoDB.DocumentClient({
  region: 'us-west-2',
  endpoint: 'https://dynamodb.us-west-2.amazonaws.com',
});

// create handler
export const handler = async (event: any): Promise<any> => {
  console.log(event.body)
  let parsedBody = JSON.parse(event.body)
  console.log(parsedBody)
  let username = parsedBody.username;
  let password = parsedBody.password;
  let age = parsedBody.age;
  let inputCustomer = new Customer(username, password, age);
  let customer = await addCustomer(inputCustomer);
  if (customer) {
    const response = {
      statusCode: 200,
      headers: {
          "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify(customer)
    };
    return response;
  }
};



// dao function
async function addCustomer(customer: Customer): Promise<Customer | null> {
  // GetItem api call allows us to get something by the key
  const params = {
      TableName: 'zooUsers',
      Item: customer,
      ConditionExpression: '#username <> :username',
      ExpressionAttributeNames: {
          '#username': 'username',
          //'#role': 'role'
      },
      ExpressionAttributeValues: {
          ':username': customer.username,
          //':role': user.role
      }
  };
  return await docClient.put(params).promise().then((data) => {
      if (data) {
        console.log('user successfully created')
        console.log(JSON.stringify(customer))
          return customer;
      } else {
          return null;
      }
  })
}