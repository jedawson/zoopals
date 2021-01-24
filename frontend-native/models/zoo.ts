import { Exhibit } from './exhibit';
import { Ticket } from './ticket';

export class Zoo {

    public exhibits: Exhibit[] = [];

    public profit = 0;

    public expenses = 0;

    public ticketsAvailable: Ticket[] = [];

}