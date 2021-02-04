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

export class Animal {

  public name = '';

  public species = '';

  public diet = '';

  constructor(name: string, species: string, diet: string){
      this.name = name;
      this.species = species;
      this.diet = diet;
  }
}

export class SpecialEvent {

  public name = '';

  public dateTime = '';
  
}

export class Exhibit {

  public name = '';

  public animals: Animal[] = [];

  public specialEvent: SpecialEvent = new SpecialEvent;

  constructor(name: string, animals: Animal[]){
      this.name = name;
      this.animals = animals;
  }
}

export class Zookeeper extends User {

  public role: string = 'Zookeeper';

  public exhibits: Exhibit[] = [];

  public tasks: string[] = [];

  constructor(username: string, password: string, age: number) {
      super(username, password, age);
  }
}


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
  console.log(user)
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
      //logger.info('Updated Zookeeper successfully');
      return true;
    })
    .catch((error) => {
      //logger.error('Error updating Zookeeper: ' + error);
      return null;
    });
}
