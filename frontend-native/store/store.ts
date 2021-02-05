import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { Animal } from '../models/animal';
import { AnimalFood } from '../models/animalFood';
import { Exhibit } from '../models/exhibit';
import { Ticket } from '../models/ticket';
import { Customer, Manager, User, Zookeeper } from '../models/user';
import { Zoo } from '../models/zoo';
import { AppAction } from './action';
import reducer from './reducer';

// changed to specific role types because
// Typescript kept saying "X attribute does not exist on type User"
export interface UserState {
  addCustomer: Customer;
  user: User | Customer | Zookeeper | Manager;
  loginUser: Manager | Zookeeper | Customer | User;
}

export interface AnimalState {
  animals: Animal[];
  animal: Animal;
  exhibit: Exhibit;
}

//exhibit state - necessary?
export interface ExhibitState {
  exhibits: Exhibit[];
  exhibit: Exhibit;
}

// zoo state
export interface ZooState {
  zoo: Zoo;
}

export interface ZookeeperState {
  zookeeper: Zookeeper;
  zookeepers: Zookeeper[];
}

// inventory state
export interface InventoryState {
  foodItems: AnimalFood[];
}

// inventory state
export interface TicketState {
  tickets: Ticket[];
}

// request state
export interface RequestState {
  request: string;
}

export interface ZooNameState
  extends UserState,
    AnimalState,
    ExhibitState,
    ZookeeperState,
    InventoryState,
    RequestState,
    TicketState,
    ZooState {}

const store: Store<ZooNameState, AppAction> = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;
