 const fetch = require('node-fetch');
 
 let base64 = require('base-64');

let url = 'http://eu.httpbin.org/basic-auth/user/passwd';
let username = 'user';
let password = 'passwd';

let headers = new Headers();

//headers.append('Content-Type', 'text/json');
headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));


['https://benhouston3d.com', 'https://threekit.com'].forEach( ( value )=> {
    test(`does ${value} response 200`, async () => {
        const results = await fetch(value, {method:'GET',
        headers: headers,
        //credentials: 'user:passwd'
       });
        expect(results.status).toBe(200);
    });
});