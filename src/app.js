'use strict';

define( [
    'angular',
    'angularCouchPotato',
    'angularUi',
    'angularRoute',
], function( angular, couchPotato) {
    // Declare app level module which depends on filters, and services
    var App = angular.module('angularRocks', ['ui.router', 'scs.couch-potato']).
    run(['$couchPotato', function($couchPotato) {
        App.lazy = $couchPotato;
    }]).
    config(['$stateProvider', '$couchPotatoProvider', '$urlRouterProvider', '$locationProvider',
        function($stateProvider, $couchPotatoProvider, $urlRouterProvider, $locationProvider) {
        App.couchPotatoProvider = $couchPotatoProvider;
        $stateProvider
            .state('foo', {
                url: '/foo',
                templateUrl: '/foo/FooView.html',
                resolve: {
                    dummy: $couchPotatoProvider.resolveDependencies(['FooModule'])
                }
            })

            .state('bar', {
                url: '/bar',
                templateUrl: '/bar/BarView.html',
                resolve: {
                    dummy: $couchPotatoProvider.resolveDependencies(['BarModule'])
                }
            });

        $urlRouterProvider.otherwise('/foo');

        $locationProvider.html5Mode({
            enabled: true
        });
    }]);
    couchPotato.configureApp(App);
    return App;
});
