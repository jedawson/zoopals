import axios from 'axios';
import { SpecialEvent } from '../../models/ticket';
import { Zoo } from '../../models/zoo';
import zooService from '../../services/zoo.service';

const URI = 'https://4xp40d62ra.execute-api.us-west-2.amazonaws.com/default';

test('get Zoo gets the Zoo', async () => {
  let returnValue;
  let zoo = { data: new Zoo() };
  axios.get = jest.fn().mockResolvedValue(zoo);

  await zooService.getZoo().then((zooReturned) => {
    returnValue = zooReturned;
  });
  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(returnValue).toBe(zoo.data);
  expect(axios.get).toHaveBeenCalledWith(`${URI}/statistics`);
});

test('getAnimalFood', async () => {
  let returnValue;
  let food = { data: [] };
  axios.get = jest.fn().mockResolvedValue(food);

  await zooService.getAnimalFood().then((result) => {
    returnValue = result;
  });

  expect(axios.get).toBeCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith(`${URI}/animalfoods`);
  // expect(returnValue).toBe(food.data);
});

test('updateAnimalFood', async () => {
  let returnValue;
  let idAndStock = { data: '5-10' };
  axios.put = jest.fn().mockResolvedValue(idAndStock);

  await zooService.updateAnimalFood(idAndStock.data).then((result) => {
    returnValue = result;
  });
  expect(axios.put).toBeCalledTimes(1);
  expect(axios.put).toHaveBeenCalledWith(`${URI}/animalfoods`, idAndStock.data);
  expect(returnValue).toBe(idAndStock);
});

test('that getAnimalsByExhibit returns', async () => {
  let returnValue;
  let exhibitPromise = { data: [] };
  let exhibit = {
    name: 'Lion Exhibit',
    animals: [],
    specialEvent: new SpecialEvent(),
  };
  axios.get = jest.fn().mockResolvedValue(exhibitPromise);
  await zooService.getAnimalsByExhibit(exhibit).then((rows) => {
    returnValue = rows;
  });
  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(returnValue).toBe(exhibitPromise.data);
  expect(axios.get).toBeCalledWith(`${URI}/${exhibit}`);
});

test('getExhibitByZookeeper', async () => {
  let returnValue;
  let zookeeperName = { data: 'ZookeeperName' };
  axios.get = jest.fn().mockResolvedValue(zookeeperName);

  await zooService.getExhibitByZookeeper(zookeeperName.data).then((result) => {
    returnValue = result;
  });

  expect(axios.get).toBeCalledTimes(1);
  expect(axios.get).toBeCalledWith(
    `arn:aws:lambda:us-west-2:640280721521:function:getExhibitByUser`
  );
  expect(returnValue).toBe(zookeeperName.data);
});

test('getExhibits', async () => {
  let returnValue;
  let exhibitPromise = { data: { rows: [] } };
  axios.get = jest.fn().mockResolvedValue(exhibitPromise);

  await zooService.getExhibits().then((result) => {
    returnValue = result;
  });

  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toBeCalledWith(`${URI}/exhibits`);
  expect(returnValue).toBe(exhibitPromise.data.rows);
});

test('getTickets', async () => {
  let returnValue;
  let ticketsPromise = { data: { rows: [] } };
  axios.get = jest.fn().mockResolvedValue(ticketsPromise);

  await zooService.getTickets().then((result) => {
    returnValue = result;
  });
  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toBeCalledWith(`${URI}/tickets`);
  expect(returnValue).toBe(ticketsPromise.data.rows);
});

test('updateTickets', async () => {
  let returnValue;
  let tickets = 10;
  axios.put = jest.fn().mockResolvedValue({ data: tickets });

  await zooService.updateTickets(tickets).then((result) => {
    returnValue = tickets;
  });

  expect(axios.put).toHaveBeenCalledTimes(1);
  expect(returnValue).toBe(tickets);
  expect(axios.put).toBeCalledWith(`${URI}/tickets`, tickets);
});

test('updateProfits', async () => {
  let returnValue;
  let profit = 10;
  axios.put = jest.fn().mockResolvedValue({ data: profit });

  await zooService.updateProfit(profit).then((result) => {
    returnValue = profit;
  });

  expect(axios.put).toHaveBeenCalledTimes(1);
  expect(returnValue).toBe(profit);
  expect(axios.put).toBeCalledWith(`${URI}/statistics/profit`, profit);
});

test('updateExpenses', async () => {
  let returnValue;
  let expenses = { data: 10 };
  axios.put = jest.fn().mockResolvedValue(expenses);

  await zooService.updateExpenses(expenses.data).then((result) => {
    returnValue = result;
  });

  expect(axios.put).toHaveBeenCalledTimes(1);
  expect(returnValue).toBe(expenses);
  expect(axios.put).toBeCalledWith(`${URI}/statistics/expenses`, expenses.data);
});

test('updateRequestRestock', async () => {
  let returnValue;
  let request = { data: 'string' };
  axios.put = jest.fn().mockResolvedValue(request);

  await zooService.updateRequestRestock(request.data).then((result) => {
    returnValue = result;
  });
  expect(axios.put).toHaveBeenCalledTimes(1);
  expect(returnValue).toBe(request);
  expect(axios.put).toBeCalledWith(
    `${URI}/animalfoods/restockrequest`,
    request.data
  );
});
