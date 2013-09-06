'use strict';
/* Filters */

angular.module('myApp.filters', [])
    .filter('interpolate', ['version', function(version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    }])
    .filter('localDate', function() {
        return function(input) {
            if (_.isEmpty(input)) return null;
            return moment(input).format('LL');
        };
    })
    .filter('startFrom', function() {
        return function(input, start) {
            start = +start; //parse to int
            return input.slice(start);
        };
    })
    .filter('markdown', function () {
        var converter = new Showdown.converter();

        return function (input) {
            return converter.makeHtml(input || '');
        };
    })
    
    .filter('capitalize', function () {
      return function(input, scope) {
          return input.substring(0, 1).toUpperCase() + input.substring(1);
      };
  });
