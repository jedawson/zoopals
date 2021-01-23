import { Exhibit } from "./exhibit";

class User {

    public username = '';

    public password = '';

    public age = 0;
}

class Customer extends User {

    public ticketIDs = [];
    public membershipLevel:string = '';

}
class Zookeeper extends User {

    public exhibits: Exhibit[] = [];

    public tasks: string[] = [];
}

class Manager extends User {

    public zookeepers: Zookeeper[] = []; // should the manager extend zookeeper or user? like should a manager do zookeper things or just manage them?

}
