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
