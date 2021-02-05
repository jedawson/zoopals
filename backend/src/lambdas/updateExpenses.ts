exports.handler = async (event: any) => {
    
    const { Client } = require('pg');
    const client = new Client();
    await client.connect();

    const number: number = Number(event.body);
    const res = await client.query('update zoo set expenses = expenses + $1::float;', [number]);
    await client.end();

    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify(res)
        
    };
    return response;
};