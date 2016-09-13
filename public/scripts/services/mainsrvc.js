'use strict';

/**
 * @ngdoc service
 * @name parseInvoiceApp.MainSrvc
 * @description
 * # MainSrvc
 * Service in the parseInvoiceApp.
 */
angular.module('parseInvoiceApp')
  .service('MainSrvc', function ($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.uploadFileToUrl = function (file) {
    	// var defer = $q.defer();

    	// var fd = new FormData();
    	// fd.append('file', file);

    	// $http.post('/api/fileupload', fd, {
    	// 	transfromRequest: angular.identity,
    	// 	headers: {'Content-Type': undefined}
    	// })
    	// .success(function (data) {
    	// 	defer.resolve(document);
    	// 	console.log(data);
    	// })
    	// .error(function (err) {
    	// 	defer.reject(err);
    	// 	console.log(err)
    	// })
    	var tmp_data = {'0_0':"Affinitiz",'0_1':"17 Rue Reaumur",'0_2':"Paris 75003",'0_3':"France",'0_4':"Email: billing@agorapulse.com",'0_5':"VAT #: FR43432322964",'0_6':"Billed On",'0_7':"June 22, 2015",'0_8':"Due On",'0_9':"June 22, 2015",'0_10':"Terms",'0_11':"On-Receipt",'0_12':"Invoice #",'0_13':"22941",'0_14':"Billed To:",'0_15':"Eric Hansen",'0_16':"CirrusOps",'0_17':"63 E 11400 South",'0_18':"#191",'0_19':"Sandy, UT 84070",'0_20':"United States",'0_21':"$41.00 ",'0_22':"USD",'0_23':"PAID",'0_24':"on ",'0_25':"June 22, 2015",'0_26':"Date",'0_27':"Description",'0_28':"Qty",'0_29':"Price",'0_30':"Subtotal",'0_31':"Jun 22âJul 22, 2015",'0_32':"Agorapulse-Micro-c-41",'0_33':"1",'0_34':"$41.00",'0_35':"$41.00",'0_36':"Subtotal",'0_37':"$41.00",'0_38':"Total",'0_39':"$41.00",'0_40':"Amount Paid",'0_41':"$41.00",'0_42':"Amount Due",'0_43':"$'0_00'",'0_44':"All amounts in United States Dollars (USD)",'0_45':"Page 1 of 1"}
    	return tmp_data;

    	// defer.promise;
    }
    this.getCompanyInfo = function () {
    	return company_info
    }
    this.getInvoiceInfo = function () {
    	return invoice_info
    }
    this.getBillToInfo = function () {
    	return bill_to_info
    }
    this.getShipToInfo = function () {
    	return ship_to_info
    }
    this.getChildTableInfo = function () {
    	return child_table_info
    }
    var company_info = {
			company_name                 : 'Company Name',
			contact_name                 : 'Contact Name',
			contact_phone                : 'Contact Phone',
			contact_email                : 'Contact Email',
			company_address_street_1     : 'Company Address Street 1',
			company_address_street_2     : 'Company Address Street 2',
			company_address_city         : 'Company Address City',
			company_address_state_region : 'Company Address State/Region',
			company_address_postal_code  : 'Company Address Postal Code',
			company_address_country      : 'Company Address Country'
		}
		var invoice_info = {
			number                   : 'Number',
			date                     : 'Date',
			due_date                 : 'Due Date',
			po_number                : 'PO #',
			payment_terms            : 'Payment Terms',
			additional_terms         : 'Additional Terms',
			shipping                 : 'Shipping',
			customer_id              : 'Customer ID',
			delivery_method          : 'Delivery Method',
			notes                    : 'Notes',
			invoice_total            : 'Invoice Total',
			payments_received_dollar : 'Payments Received $',
			amount_due               : 'Amount Due'
		}
		var bill_to_info = {
			bill_to_company_name         : 'Bill To Company Name',
			bill_to_contact_name_attn    : 'Bill To Contact Name/ATTN',
			bill_to_address_street_1     : 'Bill To Address Street 1',
			bill_to_address_street_2     : 'Bill To Address Street 2',
			bill_to_address_city         : 'Bill To Address City',
			bill_to_address_state_region : 'Bill To Address State/Region',
			bill_to_address_postal_code  : 'Bill To Address Postal Code',
			bill_to_address_country      : 'Bill To Address Country'
		}
		var ship_to_info = {
			ship_to_company_name         : 'Ship To Company Name',
			ship_to_contact_name_attn    : 'Ship To Contact Name/ATTN',
			ship_to_address_street_1     : 'Ship To Address Street 1',
			ship_to_address_street_2     : 'Ship To Address Street 2',
			ship_to_address_city         : 'Ship To Address City',
			ship_to_address_state_region : 'Ship To Address State/Region',
			ship_to_address_postal_code  : 'Ship To Address Postal Code',
			ship_to_address_country      : 'Ship To Address Country'
		}
		var child_table_info = {
			quantity         : 'Quantity',
			list_price       : 'List Price',
			item             : 'Item',
			item_description : 'Item Description',
			subtotal         : 'Subtotal',
			tax_percent      : 'Tax %',
			tax_dollar 			 : 'Tax $',
			discount_percent : 'Discount %',
			discount_dollar  : 'Discount $',
			line_total_price : 'Line Total Price'
		}

  });




