import { Animal } from '../models/animal';
import { Exhibit } from '../models/exhibit';
import { Customer, User, Zookeeper } from '../models/user';
import { Zoo } from '../models/zoo';
import * as Actions from './action';
import { ZooNameState } from './store';

// define initial state
export const initialState: ZooNameState = {
  user: new User(),
  loginUser: new User(),
  addCustomer: new Customer(),
  animals: [],
  animal: new Animal(),
  exhibits: [],
  exhibit: new Exhibit(),
  zoo: new Zoo(),
  zookeeper: new Zookeeper(),
  zookeepers: [],
  // food: new
};

const reducer = (
  state: ZooNameState = initialState,
  action: Actions.AppAction
): ZooNameState => {
  const newState = { ...state };

  switch (action.type) {
    case Actions.UserActions.GetUser:
      newState.user = action.payload as User;
      return newState;
    case Actions.UserActions.LoginChange:
      newState.loginUser = action.payload as User;
      return newState;
    case Actions.UserActions.RegisterChange:
      newState.addCustomer = action.payload as Customer;
      return newState;
    case Actions.ExhibitActions.GetAnimals:
      newState.animals = action.payload as Animal[];
      return newState;
    case Actions.ExhibitActions.GetAnimal:
      newState.animal = action.payload as Animal;
      return newState;
    case Actions.ExhibitActions.GetExhibit:
      newState.exhibit = action.payload as Exhibit;
      return newState;
    case Actions.ZooActions.GetZoo:
      newState.zoo = action.payload;
      return newState;
    case Actions.ZookeeperActions.GetExhibits:
      newState.exhibits = action.payload as Exhibit[];
      return newState;
    case Actions.ZookeeperActions.GetZookeeper:
      newState.zookeeper = action.payload as Zookeeper;
      return newState;
    default:
      return state;
  }
};

export default reducer;
