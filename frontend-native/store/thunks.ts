import { ThunkAction } from 'redux-thunk';
import { AppAction } from './action';
import { ZooNameState } from './store';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ZooNameState,
  unknown,
  AppAction
>;

export const thunkGetAnimals = (): AppThunk => async (dispatch) => {
  // const asyncResp = await getAnimals
  // console.log('before thunk dispatch');
  // dispatch(getAnimals(asyncResp));
};
