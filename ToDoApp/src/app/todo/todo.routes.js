(function () {
    function config($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: "src/app/todo/todo.html",
            controller: 'TodoController',
            controllerAs: 'vm'
        })
            .when('/done', {
            template: '<h1>Done this yo</h1>'
        }).
            otherwise({ redirectTo: '/' });
    }
    angular.module('app.todo')
        .config(config);
    config.$inject = ['$routeProvider'];
})();
//# sourceMappingURL=todo.routes.js.map