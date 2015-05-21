var Cory    = require('./app/Cory')
  , clc    = require('cli-color')
  , irc     = require('irc')
  , config  = require('./etc/config')
  , request = require('request')
  , bot     = new irc.Client(config.server, config.botName, {
      channels: config.channels
    })
;

// add the listener
bot.addListener('message', function(from, to, text, message) {
  'use strict';
  var link, index
    , cory = new Cory()
    , url  = cory.getUrl(text);

  if (! cory.isValid(text)) {
    return cory.skipped(from, text);
  }

  request.get(url, function(error, response, body){
    link = cory.getLink(body);
    cory.matched(from, text, link);
    for (index in config.channels) {
      bot.say(config.channels[index], link);
    }
  });
});

console.log(clc.green('started'));
