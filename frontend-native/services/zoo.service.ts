import axios from 'axios';
import { Exhibit } from '../models/exhibit';
import { Zoo } from '../models/zoo';
import { Ticket } from '../models/ticket';

class zooService {
  private URI: string;

  constructor() {
    this.URI = 'https://4xp40d62ra.execute-api.us-west-2.amazonaws.com/default';
  }

  // get zoo
  getZoo() {
    return axios
      .get(`${this.URI}/statistics`)
      .then((result) => result.data)
      .catch((err) => {
        console.error(`Error getZoo: ${err}`);
      });
  }

  // get animal food
    getAnimalFood() {
      return axios.get(`${this.URI}/animalfoods`)
        .then((result) => result.data.rows).catch(err => console.error(`getAnimalFood error: ${err}`));
    }

  // update animal food
  updateAnimalFood(idAndStock: string) {
    return axios.put(`${this.URI}/animalfoods`, idAndStock)
      .then((result) => result).catch(err => console.error(`getAnimalFood error: ${err}`));
  }

  // update animals
  getAnimalsByExhibit(exhibit: Exhibit) {
    return axios
      .get(`${this.URI}/${exhibit}`)
      .then((result) => result.data)
      .catch((err) => {
        console.error(`getAnimalsByExhibit error: ${err}`);
      });
  }
  // get exhibits
  getExhibitByZookeeper(username: string): Promise<Exhibit[]> {
    return axios
      .get('arn:aws:lambda:us-west-2:640280721521:function:getExhibitByUser')
      .then((result) => result.data).catch(err => console.error(`getExhibitByZookeeper error: ${err}`));
  }
  // update exhibits (for an event)

  // get tickets
  getTickets(): Promise<Ticket[]> {
    return axios
      .get(`${this.URI}/tickets`)
      .then((result) => result.data.rows).catch(err => console.error(`getTickets error: ${err}`));
  }

  // update tickets
  updateTickets(number: number) {
    return axios.put(`${this.URI}/tickets`, number)
    .then((result) => result).catch(err => console.error(`updateTickets error: ${err}`));
  }

  // update profit
  updateProfit(number: number) {
    return axios.put(`${this.URI}/statistics/profit`, number)
    .then((result) => result).catch(err => console.error(`updateProfit error: ${err}`));
  }

  // update Expenses
  updateExpenses(number: number) {
    return axios.put(`${this.URI}/statistics/expenses`, number)
    .then((result) => result).catch(err => console.error(`updateProfit error: ${err}`));
  }

  // update request restock
  updateRequestRestock(string: string) {
    return axios.put(`${this.URI}/animalfoods/restockrequest`, string)
    .then((result) => result).catch(err => console.error(`updateRequestRestock error: ${err}`));;
  }
}

export default new zooService();
