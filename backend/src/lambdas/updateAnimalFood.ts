exports.handler = async (event: any) => {
    
    const { Client } = require('pg');
    const client = new Client();
    await client.connect();

    //parse event.body
    let joinedString: string = event.body;
    let separatedString = joinedString.split(',');
    const res = await client.query('update inventoryitems set stock = $1::int where itemid = $2::int;', [Number(separatedString[1]), Number(separatedString[0])]);
    await client.end();

    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT"
        },
        body: JSON.stringify(res)
        
    };
    return response;
};