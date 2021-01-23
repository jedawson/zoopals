import { Exhibit } from './exhibit';

class Zoo {

    public exhibits: Exhibit[] = [];

    public profit = 0;

    public expenses = 0;

    // tickets?
    public ticketPrices = {
        childTicket: 0,
        studentTicket: 0,
        adultTicket: 0,
        seniorTicket: 0
    };

    constructor(exhibits: Exhibit[], profit: number, expenses: number, ticketPrices: { childTicket: number; studentTicket: number; adultTicket: number; seniorTicket: number; }){
        this.exhibits = exhibits;
        this.profit = profit;
        this.expenses = expenses;
        this.ticketPrices = ticketPrices;
    }
}