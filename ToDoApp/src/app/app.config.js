/// <reference path="../typings/tsd.d.ts"/>
(function () {
    'use strict';
    // remove the ugly # symbol
    config.$inject = ['$locationProvider'];
    function config($locationProvider) {
        // TODO: Weird crashes
        //$locationProvider.html5Mode(true);
    }
    angular.module('app')
        .config(config);
})();
//# sourceMappingURL=app.config.js.map