/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Add Simple Controller

app.controller('SimpleController', function($scope){
    $scope.message = "This is the Add Order screen.";
});
app.controller('CategoryController', function($scope,$routeParams){
    $scope.message = "This is the Add Order screen.";
    $scope.category_id = $routeParams.id;
});
app.controller('RoleController', function($scope , rolesService , $routeParams){
    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.roles = rolesService.getRoles();
    }
    
    //add role
    $scope.addRole = function(){
        rolesService.insertRole($scope.role_name , $scope.role_rank);
        $scope.role_name = '';
        $scope.role_rank = '';
    };
    
    //delete role
    $scope.deleteRole = function(id){
        rolesService.deleteRole(id);
    };
    //update role
    $scope.updateRole = function(id){
        console.log(id + $scope.role_name + $scope.role_rank);
        rolesService.updateRole(id , $scope.role_name , $scope.role_rank);
    };
    if($routeParams.id != ''){
        var role = rolesService.getRole($routeParams.id);
        $scope.role_name = role.name;
        $scope.role_rank = role.rank;
    }
    
    $scope.role_id = $routeParams.id;
});

