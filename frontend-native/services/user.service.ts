import axios from 'axios';
import { Exhibit } from '../models/exhibit';
import { Ticket } from '../models/ticket';
import { Customer, Manager, User, Zookeeper } from '../models/user';

class userService {
  private URI: string;

  constructor() {
    this.URI = 'https://8cf402b61d.execute-api.us-west-2.amazonaws.com/default'; // process.env.gatewayURI
  }

  /**
   * sign in for the user to login
   * @param username - username of user
   * @param password - password of user
   */
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

  /**
   * gets the Exhibits of the Zookeeper based on their username.
   * @param username - username of Zookeeper
   */
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

  /**
   * gets the tickets of the specified Customer
   * @param username - name of the Customer to get the tickets of
   */
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

  /**
   * adds a customer to the DynamoDB database.
   * @param user - the user to add
   */
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

  /**
   * updates the Customer with the properties that changed. This is mostly
   * for the tickets array.
   * @param user - user with updated properties
   */
  updateCustomer(user: Customer): Promise<null> {
    return axios
      .put(`${this.URI}/users/customers`, user)
      .then((result) => result.data)
      .catch((err) => {
        console.log(`Update user error: ${err}`);
        return null;
      });
  }

  /**
   * gets the Zookeeper's information based on their username.
   * @param username - username to search for in the database
   */
  getZookeeperByName(username: string): Promise<Zookeeper> {
    return axios
      .post(`${this.URI}/users/zookeepers/`, { username: username })
      .then((result) => result.data)
      .catch((err) => {
        console.log(`Get Zookeeper Error: ${err}`);
        return null;
      });
  }
  /**
   * updates the Zookeeper based on the given User object. This is
   * mostly for the Zookeeper tasks.
   * @param user - Zookeeper object with the changed properties.
   */
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
