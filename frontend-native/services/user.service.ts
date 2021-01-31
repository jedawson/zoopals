import axios from 'axios';
import { Customer, Manager, User, Zookeeper } from '../models/user';

class userService {
  private URI: string;

  constructor() {
    this.URI = ''; // process.env.gatewayURI
  }

  signIn(username:string, password:string): Promise<Customer|Zookeeper|Manager> {
    return axios
      .post('https://8cf402b61d.execute-api.us-west-2.amazonaws.com/default/users/login', 
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
      .put('https://8cf402b61d.execute-api.us-west-2.amazonaws.com/default/users/' + user.username, user)
      .then((result) => result.data)
      .catch((err) => {
        console.log(`Update user error: ${err}`);
        return null;
      });
  }
  // get zookeepers
}

export default new userService();
