app.controller("httpGetCtrl", function ($scope, $http) {
  $http({
    method: "GET",
    url: "welcome.htm",
  }).then(
    function mySuccess(response) {
      $scope.myWelcome = response.data;
    },
    function myError(response) {
      $scope.myWelcome = response.statusText;
    }
  );
});

app.controller("dataStatusCtrl", function ($scope, $http) {
  $http.get("welcome.htm").then(
    function (response) {
      $scope.content = response.data;
      $scope.statuscode = response.status;
      $scope.statustext = response.statusText;
    },
    function (response) {
      $scope.content = "Nothing";
      $scope.statuscode = 404;
      $scope.statustext = "Something went wrong";
    }
  );
});

app.controller("customersDataCtrl", function ($scope, $http) {
  $http
    .get("https://www.w3schools.com/angular/customers.php")
    .then(function (response) {
      $scope.myData = response.data.records;
    });
});
