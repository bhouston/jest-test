 const fetch = require('node-fetch');

['https://google.com'].forEach( ( value )=> {
    test(`does ${value} response 200`, async () => {
        const response = await fetch(value);
        const text = await response.text();
        console.log(text);
        expect(response.status).toBe(200);
    });
});