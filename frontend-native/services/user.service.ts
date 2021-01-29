import axios from 'axios';
import { Customer, Manager, User, Zookeeper } from '../models/user';

class userService {
  private URI: string;

  constructor() {
    this.URI = ''; // process.env.gatewayURI
  }

  signIn(username:string, password:string): Promise<Customer|Zookeeper|Manager> {
    return axios
      .post('ec2-54-188-26-201.us-west-2.compute.amazonaws.com:3000/users', 
      {username:username, password:password})
      .then((result) => {
        return result.data
      })
      .catch((err) => {
        console.log(`Error logging in: ${err}`);
        return null;
      })
  }
  // get user
  getLogin(): Promise<User> {
    return axios
      .get(this.URI, { withCredentials: true })
      .then((result) => {
        console.log(`getLogin: ${result}`);
        return result.data;
      })
      .catch((err) => {
        console.log(`Error logging in: ${err}`);
        return null;
      });
  }
  // add user

  // update user
  updateUser(user: User): Promise<null> {
    return axios
      .put(this.URI, user)
      .then((result) => null)
      .catch((err) => {
        console.log(`Update user error: ${err}`);
        return null;
      });
  }
  // get zookeepers
}

export default new userService();
