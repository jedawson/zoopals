import axios from 'axios';
import { Exhibit } from '../models/exhibit';
import { Customer, Manager, User, Zookeeper } from '../models/user';

class userService {
  private URI: string;

  constructor() {
    this.URI = ''; // process.env.gatewayURI
  }

  signIn(username:string, password:string): Promise<Customer|Zookeeper|Manager> {
    return axios
      .post(this.URI, 
      {username:username, password:password})
      .then((result) => {
        return result.data
      })
      .catch((err) => {
        console.log(`Error logging in: ${err}`);
        return null;
      })
  }

  getUserExhibit(username:string): Promise<Exhibit[]> {
    return axios
      .post('https://8cf402b61d.execute-api.us-west-2.amazonaws.com/default/users/login', 
      {username:username})
      .then((result) => {
        return result.data.exhibits
      })
      .catch((err) => {
        console.log(`Error getting user exhibits: ${err}`);
        return null;
      })
  }
  
  // get user
  // to do: i don't think that we're using this, so can it be deleted?
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
  addCustomer(user: Customer): Promise<Customer|null> {
    return axios
    .post('https://8cf402b61d.execute-api.us-west-2.amazonaws.com/default/users/register', user)
    .then((response) => {
      console.log(`addCustomer: ${response}`);
      return response.data
    })
    .catch((err) => {
      console.log(`Error adding customer`);
      return null;
    })
  }

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
