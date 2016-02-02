/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Add Simple Controller
app.controller('SimpleController', function($scope,$routeParams){
    $scope.message = "This is the Add Order screen.";
    $scope.category_id = $routeParams.id;
    $scope.role_id = $routeParams.id;
});

