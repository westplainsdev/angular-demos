'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
  
  
// angular.module('myApp.directives', []).
//  directive('markdown', function () {
//     var converter = new Showdown.converter();
//     return {
//         restrict: 'C',
//         link: function (scope, element, attrs) {
//             var htmlText = converter.makeHtml(element.text());
//             element.html(htmlText);
//         }
//     };

// });

  angular.module('myApp.directives').directive('markdown', function () {
      var converter = new Showdown.converter();
      return {
          restrict: 'C',
          require: 'ngModel',
          scope: {
              model: '=ngModel'
          },
          link: function (scope, elem, attrs) {
              scope.$watch('model', function () {
                  // do your stuff with the model
                  var htmlText = converter.makeHtml(scope.model);                  
                  elem.html(htmlText);
              }, true);
          }
      };
  });
