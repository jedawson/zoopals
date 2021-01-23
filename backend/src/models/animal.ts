export class Animal {

    public zookeeper = '';

    public information = {
        name: '',
        species: '',
        diet: ['']
    };

    public exhibit = '';


    constructor(zookeeper: string, information: { name: string; species: string; diet: string[]; }, exhibit: string){
        this.zookeeper = zookeeper;
        this.information = information;
        this.exhibit = exhibit;
    }
}