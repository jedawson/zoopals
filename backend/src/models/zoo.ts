import { Exhibit } from './exhibit';

class Zoo {

    public exhibits: Exhibit[] = [];

    public profit = 0;

    public expenses = 0;

    constructor(exhibits: Exhibit[], profit: number, expenses: number){
        this.exhibits = exhibits;
        this.profit = profit;
        this.expenses = expenses;
    }
}