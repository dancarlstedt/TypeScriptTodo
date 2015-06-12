module app.services {
    "use strict";

    export interface ITodoService {
        getTodoItems: () => ng.IPromise<ITodoItem[]>;
        getDoneItems(): ng.IPromise<ITodoItem[]>;
        saveList(list: ITodoItem[]): void;
    }

    export interface ITodoItem {
        id: number;
        description: string;
        isDone: boolean;
    }

    class TodoService implements ITodoService {
        private todoUrl: string;
        static $inject = ["$http"];

        constructor(private $http: ng.IHttpService) {
            this.todoUrl = "/api/todos";
        }

        getTodoItems(): ng.IPromise<ITodoItem[]> {
            return this.$http
                .get(this.todoUrl)
                .then((response: ng.IHttpPromiseCallbackArg<ITodoItem[]>): ITodoItem[]=> {
                return response.data;
            });
        }

        getDoneItems(): ng.IPromise<ITodoItem[]> {
            return this.getTodoItems()
                .then((result: ITodoItem[]) => {
                return result.filter((item) => item.isDone);
            });
        }

        saveList(list: ITodoItem[]) {
            // fire and forget
            this.$http.post(this.todoUrl, list);
        }
    }

    angular.module("app.services")
        .service("app.services.TodoService", TodoService);
}