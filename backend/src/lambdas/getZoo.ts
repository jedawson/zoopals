exports.handler = async (/*event*/) => {
  const { Client } = require('pg');
  const client = new Client();
  await client.connect();

  const res = await client.query('select * from zoo;');
  await client.end();

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
    },
    body: JSON.stringify(res),
  };
  return response;
};
