 const fetch = require('node-fetch');

['https://benhouston3d.com', 'https://threekit.com'].forEach( ( value )=> {
    test(`does ${value} response 200`, async () => {
        const results = await fetch(value);
        expect(results.status).toBe(200);
    });
});