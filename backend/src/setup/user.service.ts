import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import dynamo from '../dynamo/dynamo';
import logger from '../log';
import { User, Customer, Zookeeper, Manager } from '../models/user';

class UserService {
    private doc: DocumentClient;
    constructor() {
        // The documentClient. This is our interface with DynamoDB
        this.doc = dynamo; // We imported the DocumentClient from dyamo.ts
    }

    // async getUsers(): Promise<User[]> {
    //     const params = {
    //         TableName: 'users'
    //     };
    //     return await this.doc.scan(params).promise().then((data) => {
    //         return data.Items as User[];
    //     })
    // }

    //getUser
    // async getUserByName(name: string): Promise<User | null> {
    //     // GetItem api call allows us to get something by the key
    //     const params = {
    //         TableName: 'users',
    //         Key: {
    //             'name': name
    //         }
    //     };
    //     return await this.doc.get(params).promise().then((data) => {
    //         if (data && data.Item) {
    //             logger.debug(`data.Item: ${JSON.stringify(data.Item)}`);
    //             return data.Item as User;
    //         } else {
    //             return null;
    //         }
    //     })
    // }

    async addUser(user: User | Customer | Zookeeper | Manager): Promise<boolean> {
        const params = {
            TableName: 'zooUsers',
            Item: user,
            ConditionExpression: '#username <> :username',
            ExpressionAttributeNames: {
                '#username': 'username',
            },
            ExpressionAttributeValues: {
                ':username': user.username,
            }
        };

        return await this.doc.put(params).promise().then((result) => {
            logger.info('Successfully created item');
            return true;
        }).catch((error) => {
            logger.error(error);
            return false;
        });
    }

    // async updateUser(user: User) {
    //     const params = {
    //         TableName: 'users',
    //         Key: {
    //             'name': user.name
    //         },
    //         UpdateExpression: 'set password = :p, money = :m',
    //         ExpressionAttributeValues: {
    //             ':m': user.money,
    //             ':p': user.password
    //         },
    //         ReturnValues: 'UPDATED_NEW'
    //     };
    //     return await this.doc.update(params).promise().then((data) => {
    //         logger.debug(data);
    //         return true;
    //     }).catch(error => {
    //         logger.error(error);
    //         return false;
    //     });
    // }
}

const userService = new UserService();
export default userService;
