/// <reference path="../../typings/tsd.d.ts" />
module app.todo {
    'use strict';

    import ITodoItem = services.ITodoItem;
    interface ITodoController {
        todoItems: ITodoItem[];
    }

    class TodoController implements ITodoController {
        todoItems: ITodoItem[];

        static $inject: string[] = ["app.services.TodoService"];
        constructor(private todoService: app.services.ITodoService) {
            this.activate();
        }

        activate() {
            this.todoService.getTodoItems()
                .then((todoItems: ITodoItem[]): void => {
                this.todoItems = todoItems;
            });
        }
    }

    angular.module("app.todo")
        .controller("app.todo.TodoController", TodoController);
}