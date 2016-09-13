'use strict';

/**
 * @ngdoc function
 * @name parseInvoiceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the parseInvoiceApp
 */
angular.module('parseInvoiceApp')
  .controller('MainCtrl', function ($scope, $location, MainSrvc, parsedPdf) {

  	$scope.uploadFile = function (file) {

  		console.log('file is ');
  		console.dir(file);

			// MainSrvc.uploadFileToUrl(file).then(function (data) {
  		// 	console.log(data);
  		// }, function (err) {
  		// 	 console.log(err);
  		// });
  		var tmp_data = MainSrvc.uploadFileToUrl(file);

  		$scope.parsedPdf = tmp_data;

  		$location.path('/match');
  		$scope.$apply();

  	};

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });



  
