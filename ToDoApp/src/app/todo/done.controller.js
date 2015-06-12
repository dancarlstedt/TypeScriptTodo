var app;
(function (app) {
    var todo;
    (function (todo) {
        'use strict';
        var DoneController = (function () {
            function DoneController(todoService) {
                this.todoService = todoService;
                this.activate();
            }
            DoneController.prototype.activate = function () {
                var _this = this;
                // get all the done items
                this.todoService.getDoneItems()
                    .then(function (items) {
                    _this.doneItems = items;
                    _this.totalDone = items.length;
                });
            };
            DoneController.$inject = ['app.services.TodoService'];
            return DoneController;
        })();
        angular.module('app.todo')
            .controller('DoneController', DoneController);
    })(todo = app.todo || (app.todo = {}));
})(app || (app = {}));
//# sourceMappingURL=done.controller.js.map