'use strict';

/**
 * @ngdoc directive
 * @name parseInvoiceApp.directive:fileModel
 * @description
 * # fileModel
 */
angular.module('parseInvoiceApp')
  .directive('fileModel', ['$parse', function ($parse) {
    return {
      restrict: 'A',
      link: function (scope, el, attrs) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;
        el.bind('change', function () {
        	
        	console.log('htis');

        	scope.$apply(function () {
        		modelSetter(scope, el[0].file[0]);
        	});
        });
      }
    };
  }]);
