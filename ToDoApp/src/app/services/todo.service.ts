// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module app.services {
    "use strict";

    export interface ITodoService {
        getTodoItems: () => ng.IPromise<ITodoItem[]>;
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
                .then((response: ng.IHttpPromiseCallbackArg<ITodoItem[]>) : ITodoItem[] => {
                    return response.data;
                });
        }
    }

    angular.module("app.services")
        .service("app.services.TodoService", TodoService);
}