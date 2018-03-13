var twit = require('../config/config.js');

module.exports = (args) => {
    var stream = twit.stream('statuses/filter', {track: args});
    stream.on('tweet', (tweet) => {
        console.log(tweet.text);
    })
}