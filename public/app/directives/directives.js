myApp.directive('draggable', function(){
	return {
		restrict: 'A',
		link: function($scope, element, atttrs) {
			element.draggable({
				revert:'invalid',
				helper: 'clone',
				appendTo: '#drop-zone',
				start: function(event, ui) {
					
				}
			});
		}
	};
});

myApp.directive('droppable', function($compile){
	return {
		restrict: 'A',
		link: function($scope, element, attrs){
			element.droppable({
				accept: '.template-sections',
				hoverClass: 'drop-hover',
				drop: function(event, ui){
					var el = $compile(ui.draggable.attr('data-tag'));
					$('.drop-placeholder').remove();
					$('#drop-zone').append(el({}));
					setEditables();
				}
			});
		}
	}
});

myApp.directive('sortable', function(){
	return {
		restrict: 'A',
		link: function($scope, element, attrs) {
			setTimeout(function() {
				element.sortable({
					handle: '.sort-handler',
					cursor: 'pointer',
					opacity: 0.8,
					axis: 'y',
					tolerance: 'pointer',
					revert: 'true'
				});	
			}, 200);
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