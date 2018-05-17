require('dotenv').config({path: '../.env'});

const OKCupid = require('okcupidjs');
const okc = new OKCupid();

okc.login('okc_username', 'okc_password', function(err, res, body) {
    okc.getQuickmatch((err, res, body) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(body);
        }
    })
});
