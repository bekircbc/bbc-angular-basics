# Basics

-AngularJS extends HTML with new attributes.

- AngularJS extends HTML attributes with Directives, and binds data to HTML with Expressions.

        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>

        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-animate.js"></script>

- AngularJS extends HTML with ng-directives. The ng-app directive defines an AngularJS application. The ng-model directive binds the value of HTML controls (input, select, textarea) to application data. The ng-bind directive binds application data to the HTML view.

# app

        var app = angular.module("myApp", []);

        app.run   app.service   app.controller  app.directive    app.filter

# ng

        ng-app    ng-controller    ng-show   ng-init   ng-disabled   ng-model

        ng-hide   ng-repeat   ng-disabled   ng-values   ng-options    ng-bind   ng-click    ng-if

# Angular Events

        ng-blur         ng-change              ng-click         ng-copy         ng-cut

        ng-dblclick     ng-focus                ng-keydown      ng-keypress

        ng-keyup        ng-mousedown            ng-mouseenter   ng-mouseleave   ng-mousemove

        ng-mouseup      ng-paste                ng-mouseover

# Input states

                $untouched      The field has not been touched yet
                $touched        The field has been touched
                $pristine       The field has not been modified yet
                $dirty          The field has been modified
                $invalid        The field content is not valid
                $valid          The field content is valid

# Form states

                $pristine No fields have been modified yet
                $dirty One or more have been modified
                $invalid The form content is not valid
                $valid The form content is valid
                $submitted The form is submitted

# CSS Classes

                ng-untouched The field has not been touched yet
                ng-touched The field has been touched
                ng-pristine The field has not been  modified yet
                ng-dirty The field has been modified
                ng-valid The field content is valid
                ng-invalid The field content is not valid
                ng-valid-key One key for each validation. Example: ng-valid-required, useful when there are more than one thing that must be validated
                ng-invalid-key Example: ng-invalid-required

                ng-pristine No fields has not been modified yet
                ng-dirty One or more fields has been modified
                ng-valid The form content is valid
                ng-invalid The form content is not valid
                ng-valid-key One key for each validation. Example: ng-valid-required, useful when there are more than one thing that must be validated
                ng-invalid-key Example: ng-invalid-required

# Animation

                ng-show

ng-hide
ng-class
ng-view
ng-include
ng-repeat
ng-if
ng-switch
ng-animate
ng-hide-animate
ng-hide-add (if the element will be hidden)
ng-hide-remove (if the element will be showed)
ng-hide-add-active (if the element will be hidden)
ng-hide-remove-active (if the element will be showed)

# Module and Controller

- AngularJS modules define applications:

          var app = angular.module('myApp', []);

- AngularJS controllers control applications:

          app.controller('myCtrl', function($scope) {
         $scope.firstName= "John";
           $scope.lastName= "Doe";
          });

# Expressions

- {{xpression}} or ng-bind="expresion"

- {{5+5}} or {{firstName+" "*lastName}}

# Looping ith ng-repeat

                <div
        ng-init="namesandcountry=[
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}]"
         >
           <ul>
          <li ng-repeat="x in namesandcountry">
            {{ x.name + ', ' + x.country }}
          </li>
          </ul>
         </div>

# the legal restrict values

- E - Element name
- A -Attribute name
- C - Class name
- M - Comment

- EA is default value

# uppercase, lowerase, filter, orderBy

# $rootscope and $scope

- $rootscope : global or parent variable

- $scope : local or function variable

# services

- AngularJS has about 30 built-in services. One of them is the $location service.

- instead of window.location use $location

- $http - $timeout - $interval

- create own service

          app.service('hexafy', function() {
        this.myFunc = function (x) {
          return x.toString(16);
        }
        });

# http methods

- .delete(), .get(), .head(), .jsonp(), .patch(), .post(), .put()

# http properties

- .config, .data, .headers, .status, .statusText

# All controller, filter, directive can be in myApp.js..

# Fetching Data from ASP.NEt and PHP / Srver Code Examples

- [https://www.w3schools.com/angular/angular_sql.asp]
