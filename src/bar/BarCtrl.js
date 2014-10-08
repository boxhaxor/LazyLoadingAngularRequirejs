define([], function () {
	var barCtrl = function($scope, $timeout) {
		var _this = this,
			_init = function () {
				_this.message = 'BarCtrl';

				$timeout(function() {
					_this.message = 'BarCtrl - Angular Rocks!';
				}, 3000);
			};

		_init();

	};
	barCtrl.$inject = [ '$scope', '$timeout'];

	angular.module('angularRocks').registerController('BarCtrl', barCtrl);

	return barCtrl;
});