module app.todo {
    'use strict';

    interface IDoneController {
        doneItems: services.ITodoItem[];
        totalDone: number;
    }

    class DoneController implements IDoneController {
        doneItems: services.ITodoItem[];
        totalDone: number;

        static $inject: string[] = ['app.services.TodoService'];
        constructor(private todoService: services.ITodoService) {
            this.activate();
        }

        activate() {
            // get all the done items
            this.todoService.getDoneItems(  )
                .then((items: services.ITodoItem[]) => {
                this.doneItems = items;
                this.totalDone = items.length;
            });
        }
    }

    angular.module('app.todo')
        .controller('DoneController', DoneController);
}