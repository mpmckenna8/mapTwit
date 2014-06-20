# Find Maptime Stuff using the Twitter API

The files here w/ a .js extension are scripts for which there's a little bit of setup required to make them work. First off you'll need Node.js w/ NPM installed and install npm twit in the directory with the scripts.

Also needed are the appropriate API keys from Twitter.  To attain these visit https://dev.twitter.com/ and login.  You'll need to say you're making an App so do that and also generate an access token. If you just plan on querying the API you only need to give it read permissions, but if you also want to post stuff to twitter using the API give it write permissions as well.  

# What the different files do

#### twQuery.js

is a Node script that will query the Twitter API if you give it the proper authentification credentials in place of the XXXXX's.

#### maptimes.json

This is a single line json array of all of the tweet objects returned from the query.  In a start to visualizing it I just put some of em' into a table like view.
see: [http://mpmckenna8.github.io/mapTwit/index.html](http://mpmckenna8.github.io/mapTwit/index.html) and check out the gh-pages branch if you want to improve it or look at the code.
