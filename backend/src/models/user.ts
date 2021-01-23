import { Exhibit } from "./exhibit";

export class User {

    public username = '';

    public password = '';

    public age = 0;
}

export class Customer extends User {
    public ticketIds:string[] = []; // Is ticketID necessary or maybe instead an array of tickets?
    public membershipLevel:string = ''; //like gold or silver

}

export class Zookeeper extends User {

    public exhibits: Exhibit[] = [];

    public tasks: string[] = [];
}

export class Manager extends User {

    public zookeepers: Zookeeper[] = []; // should the manager extend zookeeper or user? like should a manager do zookeper things or just manage them?

}
