export enum UserActions {
  GetUser = 'GET_USER',
  LoginChange = 'CHANGE_LOGIN',
}

export interface AppAction {
  type: string;
  payload: any;
}
