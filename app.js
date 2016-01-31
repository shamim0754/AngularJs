/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module('leaveApp', [
    'ngRoute'
]);
  
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/welcome', {
              templateUrl: 'views/welcome.html',
              controller: 'SimpleController'
            }).
            when('/applyLeave', {
              templateUrl: 'views/applyLeave.html',
              controller: 'SimpleController'
            }).
            otherwise({
              redirectTo: '/welcome'
            });
  }]);

