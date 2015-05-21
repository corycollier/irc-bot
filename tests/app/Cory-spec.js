/* jshint laxcomma: true, strict: true */
var sut
  , result, expected, input, value, values
  , Cory  = require('../../app/Cory')
  , using = require('jasmine-data-provider')
  , html  = require('../fixtures/html')
  , config = require('../../etc/config')
;

describe('A Cory object', function() {
  'use strict';
  
  beforeEach(function(){
    sut = new Cory();
    
  })

  describe('Cory.isValid works', function(){
    describe('handles good values', function(){
      using([config.match + ' stuff', config.match + '  other'], function(value){
        it('returns true when it should', function(){
          result   = sut.isValid(value);
          expect(result).toEqual(true);
        })
      });
    });

    describe('handles bad values', function(){
      using(['stuff', '#nswf other'], function(value){
        it('returns false when it should', function(){
          result   = sut.isValid(value);
          expect(result).toEqual(false);
        })
      });
    });
  });


  describe('Cory.getLink works', function(){

    describe('handles good values', function(){
      using([html.good.body], function(value){
        it('gets a link when it should', function(){
          result   = sut.getLink(value);
          expect(result).not.toBe(null);
          expect(typeof result).toEqual('string');
        })
      });
    });
  });

  describe('Cory.getUrl works', function(){

    describe('handles good values', function(){
      values = [
        'something',
        'something else',
        'another test value'
      ];
      using(values, function(value){
        it('gets a url when it should', function(){
          result   = sut.getUrl(value);
          expect(result).not.toBe( );
          expect(typeof result).toEqual('string');
        })
      });
    });
  });



});
