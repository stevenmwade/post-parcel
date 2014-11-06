myApp.directive('draggable', function(){
	return {
		restrict: 'A',
		link: function($scope, element, atttrs) {
			element.draggable({
				revert:'invalid',
				helper: 'clone',
				appendTo: '#drop-zone',
				start: function(event, ui) {
					console.log(event);
					console.log(ui);
				}
			});
		}
	};
});

myApp.directive('droppable', function($compile){
	return {
		restrict: 'A',
		link: function($scope, element, attrs){
			console.log(element);
			element.droppable({
				accept: ".template-sections",
				hoverClass: "drop-hover",
				drop: function(event, ui){
					var el = $compile(ui.draggable.attr('data-tag'));
					console.log(el);
					$('#drop-zone').after(el({}));
				}
			});
		}
	}
});

myApp.directive('heroHeader', function(){
	return {
		restrict: 'E',
		templateUrl: '/app/templates/hero/hero-header.html',
		replace: true
	}
});
myApp.directive('heroBody', function(){
	return {
		restrict: 'E',
		templateUrl: '/app/templates/hero/hero-body.html',
		replace: true
	}
});
myApp.directive('heroFooter', function(){
	return {
		restrict: 'E',
		templateUrl: '/app/templates/hero/hero-footer.html',
		replace: true
	}
});