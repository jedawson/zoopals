import axios from 'axios';
import { User } from '../../models/user';
import userService from '../../services/user.service';

const URI = 'https://8cf402b61d.execute-api.us-west-2.amazonaws.com/default';

test('tests the signIn for the user and returns a promise with data in it', async () => {
  let returnValue;
  let obj = {
    data: {
      age: 30,
      password: 'pass',
      role: 'Manager',
      username: 'Manager1',
      zookeepers: ['Zookeeper1', 'Zookeeper2'],
    },
  };
  axios.get = jest.fn().mockResolvedValue(obj);
  await userService.signIn('Manager1', 'pass').then((user) => {
    returnValue = user;
  });
  // expect(axios.get).toHaveBeenCalledTimes(1);
  expect(returnValue).toStrictEqual(obj.data);
  // expect(axios.get).toHaveBeenCalledWith(`${URI}/users/login`);
});
