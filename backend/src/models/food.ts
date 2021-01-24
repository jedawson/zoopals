export class Food {

    public name = '';
    
    public foodType = ''; // either animal or person

    public stock = 0;

    public price = 0;

    constructor(name: string, stock: number, price: number){
        this.name = name;
        this.stock = stock;
        this.price = price;
    }
}