define( [
    'angular',
    'app'
], function(angular, app) {
    angular.element().ready(function() {
        angular.resumeBootstrap([app.name]);
    });
});