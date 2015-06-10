// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var app;
(function (app) {
    var services;
    (function (services) {
        "use strict";
        var TodoService = (function () {
            function TodoService($http) {
                this.$http = $http;
                this.todoUrl = "/api/todos";
            }
            TodoService.prototype.getTodoItems = function () {
                return this.$http
                    .get(this.todoUrl)
                    .then(function (response) {
                    return response.data;
                });
            };
            TodoService.$inject = ["$http"];
            return TodoService;
        })();
        angular.module("app.services")
            .service("app.services.TodoService", TodoService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=todo.service.js.map