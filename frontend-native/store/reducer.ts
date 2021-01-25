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
    default:
      return state;
  }
};

export default reducer;
