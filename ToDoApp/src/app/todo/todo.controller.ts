module app.todo {
    'use strict';

    import ITodoItem = services.ITodoItem;
    interface ITodoController {
        todoItems: ITodoItem[];
        removeItem(indexToRemove: number): void;
        addItem(): void;
        saveList(form: ng.IFormController): void;
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

        removeItem(indexToRemove: number): void {
            // typically would call service to delete then remove from UI after 
            // service returns OK instead of NotFound or another error.
            this.todoItems.splice(indexToRemove, 1);
            
        }

        addItem(): void {
            this.todoItems.push(<ITodoItem>{
                id: 0,
                isDone: false,
                description: ''
            });

        }

        saveList(form: ng.IFormController): void {
            this.todoService.saveList(this.todoItems);
            form.$setPristine();
        }
    }

    angular.module("app.todo")
        .controller("TodoController", TodoController);
}