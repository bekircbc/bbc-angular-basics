var app = angular.module("myApp", ["ngAnimate", "ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "main.html",
    })
    .when("/angular-part-1", {
      templateUrl: "angular-part-1.htm",
    })
    .when("/angular-part-2", {
      templateUrl: "angular-part-2.htm",
    })
    .when("/angular-part-3", {
      templateUrl: "angular-part-3.htm",
    })
    .when("/angular-part-4", {
      templateUrl: "angular-part-4.htm",
    })
    .when("/angular-part-5", {
      templateUrl: "angular-part-5.htm",
    })
    .when("/angular-part-6", {
      templateUrl: "angular-part-6.htm",
    });
});

app.run(function ($rootScope) {
  $rootScope.color = "blue";
});

// app.filter("myFormat", function () {
//   return function (x) {
//     var i,
//       c,
//       txt = "";
//     for (i = 0; i < x.length; i++) {
//       c = x[i];
//       if (i % 2 == 0) {
//         c = c.toUpperCase();
//       }
//       txt += c;
//     }
//     return txt;
//   };
// });

app.service("hexafy", function () {
  this.myFunc = function (x) {
    return x.toString(16);
  };
});

app.controller("myCtrl", function ($scope) {
  $scope.firstName = "John";
  $scope.lastName = "Doe";
});

app.controller("personCtrl", function ($scope) {
  $scope.firstName = "John";
  $scope.lastName = "Doe";
  $scope.fullName = function () {
    return $scope.firstName + " " + $scope.lastName;
  };
});

app.controller("namesCountryCtrl", function ($scope) {
  $scope.names = [
    { name: "Jani", country: "Norway" },
    { name: "Carl", country: "Sweden" },
    { name: "Margareth", country: "England" },
    { name: "Hege", country: "Norway" },
    { name: "Joe", country: "Denmark" },
    { name: "Gustav", country: "Sweden" },
    { name: "Birgit", country: "Denmark" },
    { name: "Mary", country: "England" },
    { name: "Kai", country: "Norway" },
  ];
  $scope.orderByMe = function (x) {
    $scope.myOrderBy = x;
  };
});

app.directive("w3TestDirective", function () {
  return {
    template: "I was made in a directive constructor!",
  };
});

app.directive("myInitialDirective", function () {
  return {
    restrict: "A",
    template: "<h1>Made by a directive!</h1>",
  };
});

app.filter("myFormat", function () {
  return function (x) {
    var i,
      c,
      txt = "";
    for (i = 0; i < x.length; i++) {
      c = x[i];
      if (i % 2 == 0) {
        c = c.toUpperCase();
      }
      txt += c;
    }
    return txt;
  };
});

app.controller("carNameCtrl", function ($scope) {
  $scope.carname = "Volvo";
});

app.controller("namesCtrl", function ($scope) {
  $scope.names = [
    "Jani",
    "Carl",
    "Margareth",
    "Hege",
    "Joe",
    "Gustav",
    "Birgit",
    "Mary",
    "Kai",
  ];
});

app.controller("colorCtrl", function ($scope) {
  $scope.color = "red";
});

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

app.controller("carsModellCtrl", function ($scope) {
  $scope.cars = [
    { model: "Ford Mustang", color: "red" },
    { model: "Fiat 500", color: "white" },
    { model: "Volvo XC90", color: "black" },
  ];
});

app.controller("mouseOverCounterCtrl", function ($scope) {
  $scope.count = 0;
});

app.controller("mouseClickCounterCtrl", function ($scope) {
  $scope.count = 0;
  $scope.myFunction = function () {
    $scope.count++;
  };
});

app.controller("myToggleCtrl", function ($scope) {
  $scope.showMe = false;
  $scope.myFunc = function () {
    $scope.showMe = !$scope.showMe;
  };
});

app.controller("mouseCoordinateCtrl", function ($scope) {
  $scope.myFunc = function (myE) {
    $scope.x = myE.clientX;
    $scope.y = myE.clientY;
  };
});

app.controller("formCtrl", function ($scope) {
  $scope.master = { firstName: "John", lastName: "Doe" };
  $scope.reset = function () {
    $scope.user = angular.copy($scope.master);
  };
  $scope.reset();
});

app.directive("myOwnDirective", function () {
  return {
    require: "ngModel",
    link: function (scope, element, attr, mCtrl) {
      function myValidation(value) {
        if (value.indexOf("e") > -1) {
          mCtrl.$setValidity("charE", true);
        } else {
          mCtrl.$setValidity("charE", false);
        }
        return value;
      }
      mCtrl.$parsers.push(myValidation);
    },
  };
});

app.controller("myAngularScobeCtrl", function ($scope) {
  $scope.x1 = "John";
  $scope.x2 = angular.uppercase($scope.x1);
  $scope.x3 = angular.isString($scope.x1);
  $scope.x4 = angular.isNumber($scope.x1);
  $scope.x5 = angular.lowercase($scope.x1);
});
