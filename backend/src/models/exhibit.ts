import { Animal } from './animal';
import { SpecialEvent } from './ticket';

export class Exhibit {

    public animals: Animal[] = [];

    public admission = 0;

    public specialEvent?: SpecialEvent;

    constructor(animals: Animal[], admission: number, specialEvent?: SpecialEvent){
        this.animals = animals;
        this.admission = admission;
        
        if (specialEvent) {
            this.specialEvent = specialEvent;
        }

    }
}