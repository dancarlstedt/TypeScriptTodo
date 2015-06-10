/// <reference path="../typings/tsd.d.ts"/>

((): void => {
    'use strict';

    // remove the ugly # symbol
    config.$inject = ['$locationProvider'];
    function config($locationProvider: ng.ILocationProvider) : void {
        $locationProvider.html5Mode(true);
    }

    angular.module('app')
        .config(config);
})();