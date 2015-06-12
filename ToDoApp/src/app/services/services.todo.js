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
            TodoService.prototype.getDoneItems = function () {
                return this.getTodoItems()
                    .then(function (result) {
                    return result.filter(function (item) { return item.isDone; });
                });
            };
            TodoService.prototype.saveList = function (list) {
                // fire and forget
                this.$http.post(this.todoUrl, list);
            };
            TodoService.$inject = ["$http"];
            return TodoService;
        })();
        angular.module("app.services")
            .service("app.services.TodoService", TodoService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=services.todo.js.map