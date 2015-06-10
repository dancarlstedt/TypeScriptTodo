((): void => {
    function config($routeProvider: ng.route.IRouteProvider): void {
        $routeProvider.when('/todo/:id', {
            template: '<h1>Hello Route</>',
            controller: (): void => {
            },
            controllerAs: 'vm'
        })
        .otherwise('/');
    }

    angular.module('app.todo')
        .config(config);

    config.$inject = ['$routeProvider'];
})();