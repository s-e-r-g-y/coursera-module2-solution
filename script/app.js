(function() {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.service('ShoppingListCheckOffService', function() {
		var service = this;		
		var toBuyItems = [
			{name: 'cookies', 	quantity: 10},
			{name: 'chips', 	quantity: 5},
			{name: 'coffee', 	quantity: 1},
			{name: 'ice cream', quantity: 3},
			{name: 'candy', 	quantity: 15},
			{name: 'chocolate', quantity: 4},
			{name: 'milk', 		quantity: 2},
		];
		var boughtItems = [];

		service.getToBuyItems =  function() {
			return toBuyItems;
		};

		service.getBoughtItems = function() {
			return boughtItems;
		};

		service.buy = function(index) {
			var item = toBuyItems[index];
			toBuyItems.splice(index, 1);
			boughtItems.push(item);
		};

	})
	.controller('ToBuyShoppingController', ['ShoppingListCheckOffService', 
		function($service) {
			var toBuyCtrl = this;

			toBuyCtrl.toBuyItems = $service.getToBuyItems();
			
			toBuyCtrl.buyItem = function(index) {
				$service.buy(index);
			};
		}
	])
	.controller('AlreadyBoughtShoppingController', ['ShoppingListCheckOffService',
		function($service) {
			var boughtCtrl = this;

			boughtCtrl.boughtItems = $service.getBoughtItems();
		}
	]);

}) ();