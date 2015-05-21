var Cory    = require('./app/Cory')
  , config  = require('./etc/config')
  , clc     = require('cli-color')
  , request = require('request')
  , irc     = require('irc')
  , jar     = request.jar()
  , options = {}
  , cory    = new Cory()
  , bot     = new irc.Client(config.server, config.botName, {
      channels: config.channels
    })
;

// if this site can authenticate, then do it
if (cory.canAuthenticate()) {
  options = cory.getAuthOptions(jar);
  request(options, function(error, response, body){
    console.log(response.headers);
    console.log(jar);
  });
}

// add the listener
bot.addListener('message', function(from, to, text, message) {
  'use strict';
  var link, index
    , url     = cory.getUrl(text)
    , options = {
        url    : url,
        method : 'GET',
        jar    : jar
      }
  ;

  if (! cory.isValid(text)) {
    return cory.skipped(from, text);
  }

  request.get(options, function(error, response, body){

    console.log(response.headers);

    link = cory.getLink(body);
    cory.matched(from, text, link);
    for (index in config.channels) {
      bot.say(config.channels[index], link);
    }
  });
});

console.log(clc.green('started'));
