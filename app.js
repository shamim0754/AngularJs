/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 *  Normally like to break AngularJS apps into the following folder structure
  at a minimum:

  /app
      /controllers      
      /directives
      /services
      /partials
      /views
 */
//define leaveApp with ngRoute DI
var app = angular.module('leaveApp', [
    'ngRoute'
]);

//This configures the routes and associates each route with a view and a controller
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/welcome', {
              templateUrl: 'views/welcome.html',
              controller: 'SimpleController'
            })
            .when('/applyLeave', {
              templateUrl: 'views/applyLeave.html',
              controller: 'SimpleController'
            })
            .when('/category', {
              templateUrl: 'views/category.html',
              controller: 'SimpleController'
            })
            .when('/category/:id', {
              templateUrl: 'views/category.html',
              controller: 'SimpleController'
            })
            .when('/employees', {
              templateUrl: 'views/employees.html',
              controller: 'SimpleController'
            })
            .when('/employee', {
              templateUrl: 'views/employee_form.html',
              controller: 'SimpleController'
            })
            .when('/role', {
              templateUrl: 'views/role.html',
              controller: 'SimpleController'
            })
            .when('/role/:id', {
              templateUrl: 'views/role.html',
              controller: 'SimpleController'
            })
            .otherwise({
              redirectTo: '/welcome'
            });
  }]);

