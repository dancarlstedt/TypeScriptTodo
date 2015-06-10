(function () {
    function config($routeProvider) {
        $routeProvider.when('/todo/:id', {
            template: '<h1>Hello Route</>',
            controller: function () {
            },
            controllerAs: 'vm'
        })
            .otherwise('/');
    }
    angular.module('app.todo')
        .config(config);
    config.$inject = ['$routeProvider'];
})();
//# sourceMappingURL=todo.routes.js.map