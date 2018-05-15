require('dotenv').config({path: '../.env'});

const OKCupid = require('okcupidjs');
const okc = new OKCupid();

okc.login('okc_username', 'okc_password', function(err, res, body) {
    const query = {
        "i_want": "women",
        "minimum_age": 31,
        "maximum_age": 37,
        "cats": ["has"],
        "personality_filters": {
            "adventuresome" : "more",
            "artsiness" : "less"
        },
        "drugs": ["never"]
    };

    okc.search(query, function(err, res, body) {
        if (err) {
            console.log("Failed to get search results.");
        }
        else {
            // use the body object to extract the search results
            const results = body.data;

            console.log('Users:\n');
            results.forEach(function(user) {
                console.log(user.username + '\n');
            });
        }
    });
});
