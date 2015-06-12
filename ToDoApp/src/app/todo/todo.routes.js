(function () {
    function config($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: "src/app/todo/todo.html",
            controller: 'TodoController',
            controllerAs: 'vm'
        })
            .when('/done', {
            templateUrl: 'src/app/todo/done.html',
            controller: 'DoneController',
            controllerAs: 'vm'
        }).
            otherwise({ redirectTo: '/' });
    }
    angular.module('app.todo')
        .config(config);
    config.$inject = ['$routeProvider'];
})();
//# sourceMappingURL=todo.routes.js.map