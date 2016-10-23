(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiMenuPath','https://davids-restaurant.herokuapp.com/menu_items.json');

NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

  var ctrl = this;

  function findItems(){
    console.log("click...");
    var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchString);
    promise.then(function(response) {
      ctrl.menuItems = response.data;
    });
  }

}

MenuSearchService.$inject=['$http','ApiMenuPath'];
function MenuSearchService($http, ApiMenuPath) {

  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {

    var response = $http({
      method: "GET",
      url: ApiMenuPath
    });
    console.log("load...");
    return response;
  };

}

})();
