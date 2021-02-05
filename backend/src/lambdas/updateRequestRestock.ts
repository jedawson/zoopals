exports.handler = async (event: any) => {
    
    const { Client } = require('pg');
    const client = new Client();
    await client.connect();

    const res = await client.query('update zoo set request = $1::text;', [event.body]);
    await client.end();

    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,PUT,GET"
        },
        body: JSON.stringify(res)
        
    };
    return response;
};