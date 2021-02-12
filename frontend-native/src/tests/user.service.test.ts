import axios from 'axios';
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
  axios.post = jest.fn().mockResolvedValue(obj);

  await userService.signIn('Manager1', 'pass').then((user) => {
    returnValue = user;
  });
  expect(axios.post).toHaveBeenCalledTimes(1);
  expect(returnValue).toStrictEqual(obj.data);
  expect(axios.post).toHaveBeenCalledWith(`${URI}/users`, {
    username: 'Manager1',
    password: 'pass',
  });
});

test('AddCustomer', async () => {
  let returnValue;
  let user = {
    age: 25,
    password: 'pass',
    username: 'UserName',
    role: 'Customer',
    tickets: [],
    membershipLevel: 'Basic',
  };
  axios.post = jest.fn().mockResolvedValue({ data: user });

  await userService.addCustomer(user).then((result) => {
    returnValue = user;
  });

  expect(axios.post).toHaveBeenCalledTimes(1);
  expect(axios.post).toHaveBeenCalledWith(`${URI}/users/register`, user);
  expect(returnValue).toBe(user);
});

test('UpdateCustomer', async () => {
  let returnValue;
  let user = {
    age: 25,
    password: 'pass',
    username: 'UserName',
    role: 'Customer',
    tickets: [],
    membershipLevel: 'Basic',
  };
  axios.put = jest.fn().mockResolvedValue({ data: user });

  await userService.updateCustomer(user).then((result) => {
    returnValue = result;
  });

  expect(axios.put).toHaveBeenCalledTimes(1);
  expect(axios.put).toHaveBeenCalledWith(`${URI}/users/customers`, user);
  expect(returnValue).toBe(user);
});
