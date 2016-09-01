var Twitter = require('twitter');

var argv = require('minimist')(process.argv.slice(2));

var consumerKey = argv['consumer-key'] || process.env.TWITTER_CONSUMER_KEY;
var consumerSecret = argv['consumer-secret'] || process.env.TWITTER_CONSUMER_SECRET;
var accessToken = argv['access-token'] || process.env.TWITTER_ACCESS_TOKEN_KEY;
var accessSecret = argv['access-secret'] || process.env.TWITTER_ACCESS_TOKEN_SECRET;
var message = argv['message'] || 'Hello, I am a tweet from a docker container';

var client = new Twitter({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  access_token_key: accessToken,
  access_token_secret: accessSecret
});

client.post('statuses/update', {status: message}, function(error, tweet, response) {
  if (!error) {
    console.log(tweet);
  } else {
    console.log("Something went wrong", error);
  }
});
