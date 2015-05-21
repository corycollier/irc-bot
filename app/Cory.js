var clc    = require('cli-color')
  , config = require('../etc/config')
  , _      = require('underscore')
;

/** 
 * the constructor
 */
function Cory ( ) {

}

/**
 * determines if the application has the requirements to authenticate with the site
 * @return {Boolean} true if it can, false if not
 */
Cory.prototype.canAuthenticate = function ( ) {
  'use strict';
  if (config.auth) {
    if (config.auth.url) {
      if (config.auth.formData) {
        return true;
      }
    }
  }
  return false;
};

/**
 * gets the options for authentication
 * @return {Object} an object literal representing the request options
 */
Cory.prototype.getAuthOptions = function (cookieJar){
  'use strict';
  return {
    url      : config.auth.url,
    method   : 'POST',
    jar      : cookieJar,
    formData : config.auth.formData
  };
};


/**
 * returns if the text provided matches what we're concerned with
 * @param  {String}  text the text of the message
 * @return {Boolean}      true if it matches, false it not
 */
Cory.prototype.isValid = function (text) {
  'use strict';
  if (! text || text.search(config.match) < 0) { 
    return false; 
  }

  return true;
};

/**
 * method to show a message was skipped
 * @param  {String} from who the message was written by
 * @param  {String} text the content of the message
 */
Cory.prototype.skipped = function(from, text) {
  'use strict';

  console.log([
      clc.red('skipped')
      , clc.yellow(from)
      , text
    ].join(' - ')
  );
};

/**
 * method to handle display that a message was matched, and a response was given
 * @param  {String} from who wrote the triggering message
 * @param  {String} text the triggering message
 * @param  {String} link the link that was sent to the room
 */
Cory.prototype.matched = function(from, text, link) {
  'use strict';
  console.log([
      clc.green('captured')
      , clc.yellow(from)
      , text
      , clc.green(link)
    ].join(' - ')
  );
};

/**
 * gets the link from the body of the page scraped
 * @param  {String} body the html of the body scraped
 * @return {String}      the resulting link
 */
Cory.prototype.getLink = function (body) {
  'use strict';
  var index   = 1
    , matches = body.match(/http:\/\/alpha.wallhaven.cc\/wallpaper\/(\d+)/g)
  ;
  matches = _.map(matches, function(url){
    url = url.replace(config.getLink.from, config.getLink.to);
    return url + '.jpg';
  });

  index = Math.floor(Math.random() * matches.length);

  return matches[index];

};

/**
 * gets the url for a given text 
 * @return {String} the resulting url to use for finding html
 */
Cory.prototype.getUrl = function (text) {
  'use strict';
  var url = config.getUrl.url
    , parts = text.split(' ')
    , link  = url.replace(config.getUrl.regex, parts[1])
  ;

  return link;
};

// export the functionality
module.exports = Cory;