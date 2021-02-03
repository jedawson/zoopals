import { Animal } from '../models/animal';
import { Exhibit } from '../models/exhibit';
import { Customer, Manager, User, Zookeeper } from '../models/user';
import { Zoo } from '../models/zoo';

/**
 * userActions set up
 * payload should be a User (whether it's a Customer, Zookeeper, Manager)
 */
export enum UserActions {
  GetUser = 'GET_USER',
  LoginChange = 'CHANGE_LOGIN',
}
export interface UserAction<P> extends AppAction {
  type: UserActions;
  payload: P;
}

/**
 * exhibitActions setup
 * payload should be the animals within the given exhibit
 */
export enum ExhibitActions {
  GetAnimals = 'GET_ANIMALS',
  GetAnimal = 'GET_ANIMAL',
  GetExhibit = 'GET_EXHIBIT',
}
export interface ExhibitAction extends AppAction {
  type: ExhibitActions;
  payload: Animal | Animal[] | Exhibit;
}

/**
 * ZookeeperActions setup
 * payload can be either Zookeeper, array of Zookeepers, or the
 * exhibits that a particular Zookeeper has.
 * TODO: should this b
 */
export enum ZookeeperActions {
  GetExhibits = 'GET_EXHIBITS',
  GetZookeeper = 'GET_ZOOKEEPER',
  GetZookeepers = 'GET_ZOOKEEPERS',
}
export interface ZookeeperAction extends AppAction {
  type: ZookeeperActions;
  payload: Zookeeper | Zookeeper[] | Exhibit[];
}

/**
 * ZooActions setup
 * payload will be numbers
 */
export enum ZooActions {
  GetZoo = 'GET_ZOO'
}

export interface ZooAction extends AppAction {
  type: ZooActions;
  payload: Zoo;
}

export enum RequestActions {
  GetRequest = 'GET_REQUEST'
}

export interface RequestAction extends AppAction {
  type: RequestActions;
  payload: string;
}

export interface AppAction {
  type: string;
  payload: any;
}


/**
 * getUser takes in a User and returns an action with user as a payload
 * @param user - given User
 */
export function getUser(
  user: User | Customer | Zookeeper | Manager
): UserAction<User> {
  const action: UserAction<User> = {
    type: UserActions.GetUser,
    payload: user,
  };
  return action;
}

/**
 * loginAction does a loginChange with a payload of the given User
 * @param user - User
 */
export function loginAction(user: User): UserAction<User> {
  const action: UserAction<User> = {
    type: UserActions.LoginChange,
    payload: user,
  };
  return action;
}

/**
 * getExhibits returns the an array of exhibits of the given Zookeeper
 * @param zookeeper - Zookeeper
 */
export function getExhibits(zookeeper: Zookeeper): ZookeeperAction {
  const action: ZookeeperAction = {
    type: ZookeeperActions.GetExhibits,
    payload: zookeeper.exhibits,
  };
  return action;
}

/**
 * changeExpenses gets the expenses of the Zoo and returns an action with the
 * payload of the given zoo expenses
 * @param zoo - Zoo object to get the expenses from
 */
export function changeZoo(zoo: Zoo): ZooAction {
  const action: ZooAction = {
    type: ZooActions.GetZoo,
    payload: zoo,
  };
  return action;
}

/**
 * getAnimals takes in an exhibit and returns the animals in the exhibit as the payload
 * @param exhibit
 */
export function getAnimals(exhibit: Exhibit): ExhibitAction {
  const action: ExhibitAction = {
    type: ExhibitActions.GetAnimals,
    payload: exhibit.animals,
  };
  return action;
}

/**
 * getAnimal takes in an animal and returns the action containing the
 * given animal as the payload
 * @param animal - Animal
 */
export function getAnimal(animal: Animal): ExhibitAction {
  const action: ExhibitAction = {
    type: ExhibitActions.GetAnimal,
    payload: animal,
  };
  return action;
}

export function getExhibit(exhibit: Exhibit): ExhibitAction {
  const action: ExhibitAction = {
    type: ExhibitActions.GetExhibit,
    payload: exhibit,
  };
  return action;
}

export function getRequest(request: string): RequestAction {
  const action: RequestAction = {
    type: RequestActions.GetRequest,
    payload: request,
  };
  return action;
}
