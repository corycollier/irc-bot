var Cory     = require('./app/Cory')
  , config   = require('./etc/config')
  , clc      = require('cli-color')
  , request  = require('request')
  , mongoose = require('mongoose')
  , irc      = require('irc')
  , jar      = request.jar()
  , options  = {}
  , cory     = new Cory()
  , Document = mongoose.model('Document', {image : String, url : String})
  , bot      = new irc.Client(config.server, config.botName, {
      channels: config.channels
    })
;

// if this site can authenticate, then do it
if (cory.canAuthenticate()) {
  options = cory.getAuthOptions(jar);
  request(options, function(error, response, body){
    if (error) {
      console.log(clc.red('ERROR') + ' - could not login');
    } else {
      console.log(clc.green('SUCCESS') + ' -  logged in ');
    }
  });
}

mongoose.connect(cory.getDsn(config));

// add the listener
bot.addListener('message', function(from, to, text, message) {
  'use strict';
  var link, index, doc
    , url     = cory.getUrl(text)
    , options = {
        url    : url,
        method : 'GET',
        jar    : jar
      }
  ;

  console.log({
    from : from,
    to   : to,
    text : text
  });

  if (! cory.isValid(to, text)) {
    return cory.skipped(from, text);
  }

  request.get(options, function(error, response, body){
    link = cory.getLink(body);
    cory.matched(from, text, link);
    for (index in config.channels) {
      // bot.say(config.channels[index], link);
      bot.say(from, link);
    }

    doc = new Document({image : link, url : url});
    doc.save(function(err){
      if (err){
        console.log(err.stack);
      }
    });
    
  });
});

console.log(clc.green('started'));
