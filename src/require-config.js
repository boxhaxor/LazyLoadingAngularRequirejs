requirejs.config({
    baseUrl: '/',
    waitSeconds: 5,
    paths: {
        'angular': 'bower_components/angular/angular',
        'angularUi': 'bower_components/angular-ui/build/angular-ui',
        'angularRoute': 'bower_components/angular-ui-router/release/angular-ui-router',
        'angularCouchPotato': 'bower_components/angular-couch-potato/dist/angular-couch-potato',
        'app': 'app',
        'bootstrap': 'bootstrap',
        'FooModule': 'foo/FooModule',
        'BarModule': 'bar/BarModule',
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularUi': ['angular'],
        'angularRoute': ['angular'],
        'angularCouchPotato': ['angular'],
    },
    priority: [
        "angular"
    ]
});