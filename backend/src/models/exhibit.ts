import { Animal } from './animal';
import { SpecialEvent } from './ticket';

export class Exhibit {

    public name = '';

    public animals: Animal[] = [];

    public specialEvent: SpecialEvent = new SpecialEvent;

    constructor(name: string, animals: Animal[]){
        this.name = name;
        this.animals = animals;
    }
}