import { Exhibit } from "./exhibit";

class User {

    public username = '';

    public password = '';

    public age = 0;
}

class Customer extends User {

    public tickets = []; // what is a ticket?

}
class Zookeeper extends User {

    public exhibits: Exhibit[] = [];

    public tasks: string[] = [];
}

class Manager extends User {

    public zookeepers: Zookeeper[] = [];

}
