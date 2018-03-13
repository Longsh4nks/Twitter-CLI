var twit = require("../config/config.js");

module.exports = (args) => {
    twit.post('statuses/update', {status: args},(err, data, res) => {
        if(err) console.log(err);
        console.log("Tweeted: " + args);
    })
};