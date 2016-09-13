'use strict';

describe('Service: parsedPdf', function () {

  // load the service's module
  beforeEach(module('parseInvoiceApp'));

  // instantiate service
  var parsedPdf;
  beforeEach(inject(function (_parsedPdf_) {
    parsedPdf = _parsedPdf_;
  }));

  it('should do something', function () {
    expect(!!parsedPdf).toBe(true);
  });

});
