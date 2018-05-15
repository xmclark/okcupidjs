require('dotenv').config({path: '../.env'});

const OKCupid = require('okcupidjs');


const okc = new OKCupid();

okc.login(process.env.OKC_USER, process.env.OKC_PASS, function(err, res, body) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("success");
    }
});
