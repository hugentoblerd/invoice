'use strict';

describe('Service: MainSrvc', function () {

  // load the service's module
  beforeEach(module('parseInvoiceApp'));

  // instantiate service
  var MainSrvc;
  beforeEach(inject(function (_MainSrvc_) {
    MainSrvc = _MainSrvc_;
  }));

  it('should do something', function () {
    expect(!!MainSrvc).toBe(true);
  });

});
