import { Animal } from './animal';

export class Exhibit {

    public animals: Animal[] = [];

    public admission = 0;

    
    public event = {
        name: '',
        time: '',
        days: ['']
    }; 

    constructor(animals: Animal[], admission: number, event: {
            name: string; time: string; days: string[];
        }){
        this.animals = animals;
        this.admission = admission;
        this.event = event;

    }
}