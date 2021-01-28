import axios from 'axios';
import { User } from '../models/user';

class userService {
  private URI: string;

  constructor() {
    this.URI = ''; // process.env.gatewayURI
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
