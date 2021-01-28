import axios from 'axios';
import { Exhibit } from '../models/exhibit';

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
  getExhibitByZookeeper(username:string) : Promise<Exhibit[]> {
    return axios.get('arn:aws:lambda:us-west-2:640280721521:function:getExhibitByUser').then(result => result.data)
  }
  // update exhibits (for an event)

  // get tickets

  // update tickets
}

export default new zooService();
