var app = angular.module('myApp', []);
app.controller('MyAngularishCtrl',function ($scope, $interval) {
  $scope.AngularishRNGesus = 0;
  function update() {
    $scope.AngularishRNGesus = Math.round((Math.random() * 10) * 10);
  }
  $interval(update, 1000 * 1);
});


var doughnut = 0;
     window.setInterval(
     function () {
         doughnut = doughnut + Math.round((Math.random() * 10) * 10);
         document.getElementById("doughnuts").innerHTML = "You have used " + doughnut + " staples in total";

     }, 1000 * 1);
