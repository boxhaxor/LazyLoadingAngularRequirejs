define([], function () {
	var fooCtrl = function($scope, $timeout) {
		var _this = this,
			_init = function () {
				_this.message = 'FooCtrl';

				$timeout(function() {
					_this.message = 'FooCtrl - Angular Rocks!';
				}, 3000);
			};

		_init();

	};
	fooCtrl.$inject = [ '$scope', '$timeout'];

	angular.module('angularRocks').registerController('FooCtrl', fooCtrl);

	return fooCtrl;
});