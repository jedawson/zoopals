import { Animal } from '../models/animal';
import { Exhibit } from '../models/exhibit';
import { User } from '../models/user';
import { Zoo } from '../models/zoo';
import * as Actions from './action';
import { ZooNameState } from './store';

// define initial state
export const initialState: ZooNameState = {
  user: new User(),
  loginUser: new User(),
  animals: [],
  animal: new Animal(),
  exhibits: [],
  exhibit: new Exhibit(),
  zoo: new Zoo(),

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
      newState.loginUser = new User();
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
    case Actions.ZooActions.GetExpenses:
      newState.zoo.expenses = action.payload;
      return newState;
    case Actions.ZooActions.GetProfit:
      newState.zoo.profit = action.payload;
      return newState;
    case Actions.ZookeeperActions.GetExhibits:
      newState.exhibits = action.payload as Exhibit[];
      return newState;
    default:
      return state;
  }
};

export default reducer;
