'use strict';

/**
 * @ngdoc function
 * @name parseInvoiceApp.controller:MatchCtrl
 * @description
 * # MatchCtrl
 * Controller of the parseInvoiceApp
 */
angular.module('parseInvoiceApp')
  .controller('MatchCtrl', function ($scope, $location, MainSrvc, SweetAlert, parsedPdf) {

  	$scope.parsedPdf = MainSrvc.uploadFileToUrl();

		$scope.company_info     = MainSrvc.getCompanyInfo();
		$scope.invoice_info     = MainSrvc.getInvoiceInfo();
		$scope.bill_to_info     = MainSrvc.getBillToInfo();
		$scope.ship_to_info     = MainSrvc.getShipToInfo();
		$scope.child_table_info = MainSrvc.getChildTableInfo();

		function assumptions() {
			console.log($scope.parsedPdf);
			var j;
			$.each($scope.parsedPdf, function (i, item) {
				// console.log(i, $scope.parsedPdf[i]);
				switch(item) {
					case 'Invoice #':
						j = i.slice(0, -1);
						console.log(j,i);
						break;
					case '':
						break;
					default:
						// console.log(item);
				}
			})
		}
		assumptions();

  	$scope.allowDrop = function (ev) {
    	ev.preventDefault();
		}
		$scope.drag = function (ev) {
	    ev.dataTransfer.setData('text', ev.target.className);
		}
		$scope.dragClone = function (ev) {
	    ev.dataTransfer.setData('text', ev.target.className);
	    ev.dataTransfer.setData('parent', ev.target.parentElement.id);
		}
		$scope.drop = function (ev) {
	    ev.preventDefault();
	    var data = ev.dataTransfer.getData('text');
	    var parent = ev.dataTransfer.getData('parent');
	    var target_id = '#' + $(ev.target)[0].id;
	    var tmp_name = $('.' + data).html();
	    var tmp_el = '<span class="' + data + '" draggable="true" ondragstart="angular.element(this).scope().dragClone(event)">' + tmp_name + '</span>';
	    if (!parent || parent == '' || parent == undefined || parent == null) {
		    $(target_id).children().remove('span');
		    $(target_id).append(tmp_el);
		  }else {
		  	$('#' + parent).children().remove('span');
		  	$(target_id).children().remove('span');
		    $(target_id).append(tmp_el);
		  }
		}
	  $scope.ok = function () {
	  	SweetAlert.swal("Good job!", "Invoice has been saved to QuickBase!", "success");
	  };
	  $scope.cancel = function () {
	  	SweetAlert.swal({
				title: "Are you sure?",
				text: "You will be taken back to the home page",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Yes, cancel!",
				closeOnConfirm: true
			}, 
			function(){ 
				$location.path('/');
  			$scope.$apply();
			});
	  };

  });

  // var add_id = function (tmp_data) {
  	// 	var spaces  = /\s/g;
  	// 	var periods = /[!$%^&#*()+|~=`{}\[\]:";'<>?,.\/]/g;
  	// 	var tmp_obj = {};
  	// 	var i = 1;
  	// 	console.log(tmp_data);
			// for (var prop in tmp_data) {
	  // 		// var tmp_prop = tmp_data[prop].replace(spaces, '_');
	  // 		// tmp_prop = tmp_prop.replace(periods, '_');
	  // 		// tmp_prop = tmp_prop.toLowerCase();
	  // 		var tmp_prop = prop.replace(periods, '_');
	  // 		// tmp_prop = tmp_prop.replace(periods, '_');
	  // 		// tmp_prop = tmp_prop.toLowerCase();
	  // 		// tmp_obj[i] = {
	  // 		// 	name: tmp_data[prop],
	  // 		// 	num: prop
	  // 		// }
	  // 		console.log(prop, tmp_prop);
	  // 		tmp_obj[tmp_prop] = tmp_data[prop];
	  // 		i++;
	  // 	}
	  // 	$scope.parsedPdf = tmp_obj;
	  // 	console.log($scope.parsedPdf);
  	// }
  	// add_id(tmp_data);




