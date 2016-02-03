//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('rolesService', function () {
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