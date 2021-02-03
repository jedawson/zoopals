import { Exhibit } from './exhibit';
import { Ticket } from './ticket';

export class User {
  public username = '';

  public password = '';

  public age = 0;

  constructor(username: string, password: string, age: number) {
    this.username = username;
    this.password = password;
    this.age = age;
  }
}

export class Customer extends User {
  public role: string = 'Customer';

  public tickets: Ticket[] = [];

  public membershipLevel: string = 'Basic'; //like gold or silver

  constructor(username: string, password: string, age: number) {
    super(username, password, age);
  }
}

export class Zookeeper extends User {
  public role: string = 'Zookeeper';

  public exhibits: Exhibit[] = [];

  public tasks: string[] = [];

  constructor(username: string, password: string, age: number) {
    super(username, password, age);
  }
}

export class Manager extends User {
  public role: string = 'Manager';

  public zookeepers: string[] = []; // should the manager extend zookeeper or user? like should a manager do zookeper things or just manage them?

  constructor(username: string, password: string, age: number) {
    super(username, password, age);
  }
}
