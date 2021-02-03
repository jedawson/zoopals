import { Exhibit } from './exhibit';
import { Ticket } from './ticket';

export class User {
  public username: string = '';
  public password: string = '';
  public age: number = 0;
  public role: string = 'Customer';
}

export class Customer extends User {
  public role: string = 'Customer';
  public tickets: Ticket[] = [];
  public membershipLevel: string = 'Basic'; //like gold or silver
}

export class Zookeeper extends User {
  public role: string = 'Zookeeper';
  public exhibits: Exhibit[] = [];
  public tasks: string[] = [];
}

export class Manager extends User {
  public role: string = 'Manager';
  public zookeepers: string[] = [];
}
