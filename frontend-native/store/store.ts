import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { Animal } from '../models/animal';
import { Exhibit } from '../models/exhibit';
import { Customer, Manager, User, Zookeeper } from '../models/user';
import { Zoo } from '../models/zoo';
import { AppAction } from './action';
import reducer from './reducer';

export interface UserState {
  user: Customer | Zookeeper | Manager;
  loginUser: Customer | Zookeeper | Manager;
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
