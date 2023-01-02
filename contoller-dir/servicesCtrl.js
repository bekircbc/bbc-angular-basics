app.controller("locationCtrl", function ($scope, $location) {
  $scope.myUrl = $location.absUrl();
});

app.controller("httpCtrl", function ($scope, $http) {
  $http.get("welcome.htm").then(function (response) {
    $scope.myWelcome = response.data;
  });
});

app.controller("timeoutCtrl", function ($scope, $timeout) {
  $scope.myHeader = "Hello World!";
  $timeout(function () {
    $scope.myHeader = "How are you today?";
  }, 2000);
});

app.controller("intervalCtrl", function ($scope, $interval) {
  $scope.theTime = new Date().toLocaleTimeString();
  $interval(function () {
    $scope.theTime = new Date().toLocaleTimeString();
  }, 1000);
});

//ownservice and controller

app.controller("hexafyCtrl", function ($scope, hexafy) {
  $scope.hex = hexafy.myFunc(255);
});
