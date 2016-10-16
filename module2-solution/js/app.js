(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyList = this;

  buyList.buyItems = ShoppingListCheckOffService.getBuyItems();

  buyList.buyAnItem = function(itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };

};


AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.boughtListItems = ShoppingListCheckOffService.getBoughtItems();
};

function ShoppingListCheckOffService() {
  var service = this;

  var buyItems=[
    {
      name: "cookies",
      quantity: 2
    },
    {
      name: "cakes",
      quantity: 2
    },
    {
      name: "milk",
      quantity: 3
    },
    {
      name: "oranges",
      quantity: 10
    },
    {
      name: "apples",
      quantity: 10
    }
  ];

  var boughtItems=[];

  service.buyItem = function (itemIndex) {
    boughtItems.push(buyItems[itemIndex]);
    buyItems.splice(itemIndex,1);
  };

  service.getBuyItems = function() {
    return buyItems;
  };

  service.getBoughtItems = function() {
    return boughtItems;
  };


};

})();
