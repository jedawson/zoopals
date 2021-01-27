import axios from 'axios';
import { Exhibit } from '../models/exhibit';
import { Zoo } from '../models/zoo';

class zooService {
  private URI: string;

  constructor() {
    this.URI = ''; // process.env.gatewayURI
  }

  // get zoo
  getZoo(): Promise<Zoo> {
    return axios
      .get(this.URI)
      .then((result) => result.data)
      .catch((err) => {
        console.error(`Error getZoo: ${err}`);
      });
  }
  // get inventoryitems

  // update inventoryitems

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

  // update exhibits (for an event)

  // get tickets

  // update tickets
}

export default new zooService();
