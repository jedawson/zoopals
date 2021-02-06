import axios from 'axios';
import { Exhibit } from '../models/exhibit';
import { Ticket } from '../models/ticket';
import { Customer, Manager, User, Zookeeper } from '../models/user';

class userService {
  private URI: string;

  constructor() {
    this.URI = 'https://8cf402b61d.execute-api.us-west-2.amazonaws.com/default'; // process.env.gatewayURI
  }

  signIn(
    username: string,
    password: string
  ): Promise<Customer | Zookeeper | Manager> {
    return axios
      .post(`${this.URI}/users`, {
        username: username,
        password: password,
      })
      .then((result) => {
        return result.data;
      })
      .catch((err) => {
        console.log(`Error logging in: ${err}`);
        return null;
      });
  }

  getUserExhibit(username: string): Promise<Exhibit[]> {
    return axios
      .post(`${this.URI}/users/login`, { username: username })
      .then((result) => {
        return result.data.exhibits;
      })
      .catch((err) => {
        console.log(`Error getting user exhibits: ${err}`);
        return null;
      });
  }

  getUserTickets(username: string): Promise<Ticket[]> {
    return axios
      .post(`${this.URI}/users/login`, { username: username })
      .then((result) => {
        return result.data.tickets;
      })
      .catch((err) => {
        console.log(`Error getting user tickets: ${err}`);
        return null;
      });
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
  addCustomer(user: Customer): Promise<Customer | null> {
    return axios
      .post(`${this.URI}/users/register`, user)
      .then((response) => {
        console.log(`addCustomer: ${response}`);
        return response.data;
      })
      .catch((err) => {
        console.log(`Error adding customer`);
        return null;
      });
  }

  // update customer
  updateCustomer(user: Customer): Promise<null> {
    return axios
      .put(`${this.URI}/users/customers`, user)
      .then((result) => result.data)
      .catch((err) => {
        console.log(`Update user error: ${err}`);
        return null;
      });
  }
  // get zookeepers
  getZookeeperByName(username: string): Promise<Zookeeper> {
    return axios
      .post(`${this.URI}/users/zookeepers/`, { username: username })
      .then((result) => result.data)
      .catch((err) => {
        console.log(`Get Zookeeper Error: ${err}`);
        return null;
      });
  }
  //update zookeepers
  updateZookeeper(user: Zookeeper): Promise<null> {
    return axios
      .put(`${this.URI}/users/zookeepers`, user)
      .then((result) => result.data)
      .catch((err) => {
        console.log(`Update user error: ${err}`);
        return null;
      });
  }
}

export default new userService();
