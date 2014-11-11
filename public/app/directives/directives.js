myApp.directive('draggable', function(){
	return {
		restrict: 'A',
		link: function($scope, element, atttrs) {
			element.draggable({
				revert:'invalid',
				helper: 'clone',
				appendTo: '.edit-container',
				start: function(event, ui) {
					ui.helper.animate({
						width: 236.5,
						height: 233.75
					});
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
				accept: '.template-items',
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

myApp.directive('editLink', function(){
	return {
		restrict: 'A',
		link: function($scope, element, attr) {
			$(document).on('click', '.edit-img', function(event) {
				$('#imgModal').modal('show');
				var that = $(this)
				console.log('This image: ', $(this));
				$(document).on('click', element, function(event) {
					event.preventDefault();
					var link = $('input[name=link]').val();
					console.log('Image link: ', link);
					console.log('Image source: ', that.attr('src'));
					that.attr('src', link);
				});
			});
		}
	};
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