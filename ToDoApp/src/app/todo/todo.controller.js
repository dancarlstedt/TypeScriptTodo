/// <reference path="../../typings/tsd.d.ts" />
var app;
(function (app) {
    var todo;
    (function (todo) {
        'use strict';
        var TodoController = (function () {
            function TodoController(todoService) {
                this.todoService = todoService;
                this.activate();
            }
            TodoController.prototype.activate = function () {
                var _this = this;
                this.todoService.getTodoItems()
                    .then(function (todoItems) {
                    _this.todoItems = todoItems;
                });
            };
            TodoController.$inject = ["app.services.TodoService"];
            return TodoController;
        })();
        angular.module("app.todo")
            .controller("TodoController", TodoController);
    })(todo = app.todo || (app.todo = {}));
})(app || (app = {}));
//# sourceMappingURL=todo.controller.js.map