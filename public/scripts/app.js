'use strict';

/**
 * @ngdoc overview
 * @name parseInvoiceApp
 * @description
 * # parseInvoiceApp
 *
 * Main module of the application.
 */
angular
  .module('parseInvoiceApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'oitozero.ngSweetAlert'
    // 'ui.router'
    // 'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/match', {
        templateUrl: 'views/match.html',
        controller: 'MatchCtrl',
        controllerAs: 'match'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
