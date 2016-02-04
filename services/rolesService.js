//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('rolesService', function ($http) {
    this.getRoles = function () {
        return roles;
    };

    this.insertRole = function (roleName, roleRank) {
        var topID = roles.length + 1;
        roles.push({
            id: topID,
            name: roleName,
            rank: roleRank
        });
        // Simple post request example:
        $http({
          method : 'POST',
          url : '/leave_app/function/manage_role_action.php' ,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}, //default application/json serialize
          data : { name : roleName , rank : roleRank }
        }).then(function successCallback(response) {
            console.log(response);
            // this callback will be called asynchronously
            // when the response is available
          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });
    };
    this.updateRole = function (id , roleName, roleRank) {
        for (var i = 0; i < roles.length; i++) {
            if (roles[i].id === id) {
                roles[i].name = roleName;
                roles[i].rank = roleRank;
            }
        }
    };

    this.deleteRole = function (id) {
        for (var i = roles.length - 1; i >= 0; i--) {
            if (roles[i].id === id) {
                roles.splice(i, 1);
                break;
            }
        }
    };

    this.getRole = function (id) {
        for (var i = 0; i < roles.length; i++) {
            if (roles[i].id === id) {
                return roles[i];
            }
        }
        return null;
    };
    var roles = [
        { 
            id : '1' , 
            name : 'manager' , 
            rank : '1st class' 
        } 
    ];
});