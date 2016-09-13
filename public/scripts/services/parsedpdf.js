'use strict';

/**
 * @ngdoc service
 * @name parseInvoiceApp.parsedPdf
 * @description
 * # parsedPdf
 * Service in the parseInvoiceApp.
 */
angular.module('parseInvoiceApp')
  .service('parsedPdf', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var pdf = this;

    pdf.parsed = {};
  });
