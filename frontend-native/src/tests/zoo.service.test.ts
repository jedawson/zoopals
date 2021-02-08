import axios from 'axios';
import { exp } from 'react-native-reanimated';
import { Exhibit } from '../../models/exhibit';
import { SpecialEvent } from '../../models/ticket';
import { Zoo } from '../../models/zoo';
import zooService from '../../services/zoo.service';

const URI = 'https://4xp40d62ra.execute-api.us-west-2.amazonaws.com/default';

test('get Zoo gets the Zoo', async () => {
  let returnValue;
  let zoo = { data: new Zoo() };
  axios.get = jest.fn().mockResolvedValue(zoo);

  await zooService.getZoo().then((zoo) => {
    returnValue = zoo;
  });
  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(returnValue).toBe(zoo.data);
  expect(axios.get).toHaveBeenCalledWith(`${URI}/statistics`);
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

test('getExhibits', async () => {
  let returnValue;
  let exhibitPromise = { data: [] };
  axios.get = jest.fn().mockResolvedValue(exhibitPromise);

  await zooService.getExhibits().then((result) => {
    returnValue = result;
  });

  // expect(axios.get).toHaveBeenCalledTimes(1);
  // expect(returnValue).toStrictEqual(exhibitPromise.data);
  expect(axios.get).toBeCalledWith(
    `https://4xp40d62ra.execute-api.us-west-2.amazonaws.com/default/exhibits`
  );
});
