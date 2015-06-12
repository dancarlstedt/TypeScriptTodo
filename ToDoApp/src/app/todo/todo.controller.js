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
            TodoController.prototype.removeItem = function (indexToRemove) {
                // typically would call service to delete then remove from UI after 
                // service returns OK instead of NotFound or another error.
                this.todoItems.splice(indexToRemove, 1);
            };
            TodoController.prototype.addItem = function () {
                this.todoItems.push({
                    id: 0,
                    isDone: false,
                    description: ''
                });
            };
            TodoController.prototype.saveList = function (form) {
                this.todoService.saveList(this.todoItems);
                form.$setPristine();
            };
            TodoController.$inject = ["app.services.TodoService"];
            return TodoController;
        })();
        angular.module("app.todo")
            .controller("TodoController", TodoController);
    })(todo = app.todo || (app.todo = {}));
})(app || (app = {}));
//# sourceMappingURL=todo.controller.js.map