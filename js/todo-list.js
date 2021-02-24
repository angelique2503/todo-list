var app = angular.module('app',[]);
 	app.config(function(){}),
 	module = angular.module('app');

module.controller('todo', ['$scope', function($scope){
	$scope.list = [];
	$scope.editable = false;

	$scope.add = function(text) {
		$scope.list.push({
			text: text,
			done: false,
			editable: false
		});
	};

	$scope.edit = function(key, value) {
		$scope.list[key].editable = value;
	};

	$scope.done = function(key, notChecked) {
		$scope.list[key].done = !notChecked;
	};

	$scope.delete = function(key) {
		$scope.list.splice(key, 1); 
	};

	$scope.deleteAll = function(key) {
		$scope.list = []; 
	};

	$scope.getTotalDoneTasks = function() {
		let total = 0;
		for(let i in $scope.list) {
			if($scope.list[i].done) {
				total += 1;
			}
		}

		return total;
	}

	$scope.getPercentageProgress = function() {
		return this.getTotalDoneTasks()/$scope.list.length*100;
	};

	$scope.getColorProgress = function() {
		let percentageProgress = this.getPercentageProgress(),
			color = null;

		if(percentageProgress >= 75 && percentageProgress <= 100) {
			color = 'success';
		} else if(percentageProgress <= 50 && percentageProgress >= 25) {
			color = 'warning';
		} else if(percentageProgress < 25) {
			color = 'danger';
		}

		return color;
	};
}]);