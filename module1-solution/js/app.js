(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {



  $scope.CheckTheList = function () {

    var InputArray = $scope.InputList.split();
    var InputArrayLength = InputArray.length;

    $scope.message = InputArrayLength;

    //if (InputArrayLength == 0) {
    //  $scope.message = "Please enter data first";
    //};
    // else if ((InputArrayLength>=1) && (InputArrayLength<=3) ) {
    //  $scope.message = "Enjoy!";
    //} else {
    //  $scope.message = "Too much!";
    //};

    console.log(InputArrayLength);
    console.log($scope.message);
    console.log($scope.InputList.split());
  };
};

})();
