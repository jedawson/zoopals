import axios from 'axios';
import { Exhibit } from '../models/exhibit';
import { Ticket } from '../models/ticket';

class zooService {
  private URI: string;

  constructor() {
    this.URI = 'https://4xp40d62ra.execute-api.us-west-2.amazonaws.com/default';
  }

  /**
   * this gets all of the statistics in the Zoo from postgreSQL.
   * profit, expenses, and tickets sold
   * This is for the Manager home view.
   */
  getZoo() {
    return axios
      .get(`${this.URI}/statistics`)
      .then((result) => result.data)
      .catch((err) => {
        console.error(`Error getZoo: ${err}`);
      });
  }

  /**
   * gets the inventory and types of food that the Zoo currently has
   * from PostgreSQL.
   */
  getAnimalFood() {
    return axios
      .get(`${this.URI}/animalfoods`)
      .then((result) => result.data.rows)
      .catch((err) => console.error(`getAnimalFood error: ${err}`));
  }

  /**
   * updates the amount of food based on the given id and stock.
   * @param idAndStock - id of the food and stock number to change it to
   */
  updateAnimalFood(idAndStock: string) {
    return axios
      .put(`${this.URI}/animalfoods`, idAndStock)
      .then((result) => result)
      .catch((err) => console.error(`getAnimalFood error: ${err}`));
  }

  /**
   * gets the animals within an exhibit.
   * @param exhibit -
   */
  getAnimalsByExhibit(exhibit: Exhibit) {
    return axios
      .get(`${this.URI}/${exhibit}`)
      .then((result) => result.data)
      .catch((err) => {
        console.error(`getAnimalsByExhibit error: ${err}`);
      });
  }
  // get exhibit by zookeeper
  getExhibitByZookeeper(username: string): Promise<Exhibit[]> {
    return axios
      .get('arn:aws:lambda:us-west-2:640280721521:function:getExhibitByUser')
      .then((result) => result.data)
      .catch((err) => console.error(`getExhibitByZookeeper error: ${err}`));
  }
  //get all zoo exhibits
  getExhibits(): Promise<[]> {
    return axios.get(`${this.URI}/exhibits`).then((result) => result.data.rows);
  }

  //get all zoo animals
  getAnimals(): Promise<[]> {
    return axios.get(`${this.URI}/animals`).then((result) => result.data.rows);
  }

  // get tickets
  getTickets(): Promise<Ticket[]> {
    return axios
      .get(`${this.URI}/tickets`)
      .then((result) => result.data.rows)
      .catch((err) => console.error(`getTickets error: ${err}`));
  }

  // update tickets
  updateTickets(number: number) {
    return axios
      .put(`${this.URI}/tickets`, number)
      .then((result) => result)
      .catch((err) => console.error(`updateTickets error: ${err}`));
  }

  // update profit
  updateProfit(number: number) {
    return axios
      .put(`${this.URI}/statistics/profit`, number)
      .then((result) => result)
      .catch((err) => console.error(`updateProfit error: ${err}`));
  }

  // update Expenses
  updateExpenses(number: number) {
    return axios
      .put(`${this.URI}/statistics/expenses`, number)
      .then((result) => result)
      .catch((err) => console.error(`updateProfit error: ${err}`));
  }

  // update request restock
  updateRequestRestock(string: string) {
    return axios
      .put(`${this.URI}/animalfoods/restockrequest`, string)
      .then((result) => result)
      .catch((err) => console.error(`updateRequestRestock error: ${err}`));
  }
}

export default new zooService();
