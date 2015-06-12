module app.todo {
    'use strict';

    import ITodoItem = services.ITodoItem;
    interface ITodoController {
        todoItems: ITodoItem[];
        removeItem(indexToRemove: number): void;
        addItem(): void;
        saveList(): void;
    }

    class TodoController implements ITodoController {
        todoItems: ITodoItem[];
        anythingDirty: boolean;

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

            this.anythingDirty = true
        }

        addItem(): void {
            this.todoItems.push(<ITodoItem>{
                id: 0,
                isDone: false,
                description: ''
            });

            this.anythingDirty = true;
        }

        saveList(): void {
            this.todoService.saveList(this.todoItems);
        }
    }

    angular.module("app.todo")
        .controller("TodoController", TodoController);
}