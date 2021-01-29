import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { Animal } from '../models/animal';
import { Exhibit } from '../models/exhibit';
import { Customer, Manager, User, Zookeeper } from '../models/user';
import { Zoo } from '../models/zoo';
import { AppAction } from './action';
import reducer from './reducer';

// changed to specific role types because
// Typescript kept saying "X attribute does not exist on type User"
export interface UserState {
  user: User | Customer | Zookeeper | Manager;
  loginUser: User | Customer | Zookeeper | Manager;
}

export interface AnimalState {
  animals: Animal[];
  animal: Animal;
  exhibit: Exhibit;
}

//exhibit state - necessary?
export interface ExhibitState {
  exhibits: Exhibit[];
}

// zoo state
export interface ZooState {
  zoo: Zoo;
}

// inventory state? I think so if we have a table for them

export interface ZooNameState
  extends UserState,
    AnimalState,
    ExhibitState,
    ZooState {}

const store: Store<ZooNameState, AppAction> = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;
