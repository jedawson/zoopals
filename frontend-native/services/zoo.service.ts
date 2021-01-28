import axios from 'axios';
import { Ticket } from '../models/ticket';

class zooService {
  private URI: string;

  constructor() {
    this.URI = ''; // process.env.gatewayURI
  }

  // get zoo

  // get inventoryitems

  // update inventoryitems

  // update animals

  // get exhibits

  // update exhibits (for an event)

  /* get tickets : result returns data. 
  I console logged the result object to see what is being returned.
  You need to get the data's body's results and from there the rows property,
  which is an array of ticket objects. */
  getTickets(): Promise<any[]> {
    return axios.get('https://4xp40d62ra.execute-api.us-west-2.amazonaws.com/default/tickets').then(result => result.data.rows);
  }

  // update tickets
}

export default new zooService();
