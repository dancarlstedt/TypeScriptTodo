((): void => {
    function config($routeProvider: ng.route.IRouteProvider): void {
        $routeProvider
            .when('/', {
            templateUrl: "src/app/todo/todo.html",
            controller: 'TodoController',
            controllerAs: 'vm'
        })
            .when('/done',
            {
                template: '<h1>Done this yo</h1>'

            }).
            otherwise({ redirectTo: '/' });
    }

    angular.module('app.todo')
        .config(config);
    config.$inject = ['$routeProvider'];
})();