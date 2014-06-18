var Twit = require('twit');
var fs = require('fs');

// Get the appropriate twitter API stuff from https://dev.twitter.com/
var T = new Twit({
    consumer_key:         'XXXXXXXXXX'
  , consumer_secret:      'XXXXXXXXXX'
  , access_token:         'XXXXXXXXXX'
  , access_token_secret:  'XXXXXXXXXX'
});

var tweeters;

// Pass any string to searcher so search twitter's restful api for whatever
var searcher = 'maptime'

T.get('search/tweets', { q: searcher, result_type:'mixed', count: 100 }, function(err, reply) {
  //  ...
  if (err) throw err;
//  console.log(reply);
  var mTweets = reply.statuses;
 console.log(mTweets.length);


// now you can done pipe those tweets pretty much to whatever
tweeters = JSON.stringify(mTweets);



})




// gonna try to set up a mongoosie thing
/*


var schema = mongoose.Schema;
*/
