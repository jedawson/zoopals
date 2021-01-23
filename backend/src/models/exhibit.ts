import { Animal } from './animal';
import { SpecialEvent } from './ticket';

export class Exhibit {

    public name = '';

    public animals: Animal[] = [];

    public specialEvent?: SpecialEvent;

    constructor(name: string, animals: Animal[], specialEvent?: SpecialEvent){
        this.name = name;
        this.animals = animals;
        if (specialEvent) {
            this.specialEvent = specialEvent;
        }

    }
}