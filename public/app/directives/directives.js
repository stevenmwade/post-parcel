// Creates jQueryUI draggable attribute
myApp.directive('draggable', function(){
	return {
		restrict: 'A',
		link: function($scope, element, atttrs) {
			element.draggable({
				revert:'invalid',
				helper: 'clone',
				appendTo: '.edit-container',
				start: function(event, ui) {
					// Sets size of clone image
					ui.helper.animate({
						width: 236.5,
						height: 233.75
					});
				}
			});
		}
	};
});

// Sets jQueryUI droppable into an atribute
myApp.directive('droppable', function($compile){
	return {
		restrict: 'A',
		link: function($scope, element, attrs){
			element.droppable({
				accept: '.template-items',
				hoverClass: 'drop-hover',
				drop: function(event, ui){
					// Sets the element as the custom element directive
					// that is in the data tag and appends it to the DOM
					var el = $compile(ui.draggable.attr('data-tag'));
					$('.drop-placeholder').remove();
					$('#drop-zone').append(el({}));
					// Sets the medium editor for the piece when dropped
					setEditables();
				}
			});
		}
	}
});

// Sets jQueryUI sortable attribute
myApp.directive('sortable', function(){
	return {
		restrict: 'A',
		link: function($scope, element, attrs) {
			setTimeout(function() {
				// Creates sortable handler for each tempalte section
				element.sortable({
					handle: '.sort-handler',
					cursor: 'pointer',
					opacity: 0.8,
					axis: 'y',
					tolerance: 'pointer',
					revert: 'true'
				});	
			}, 100);
		}
	}
});

// Creates directive for images to change the image
myApp.directive('editLink', function(){
	return {
		restrict: 'A',
		link: function($scope, element, attr) {
			// function to clear the input
			var clearField = function(){
				setTimeout(function(){
					$('input[name=link]').val('');
				}, 100);
			};

			// Initiates the image change
			$(document).on('click', '.edit-img', function(event) {
				// Displays the image change modal
				$('#imgModal').modal('show');
				var that = $(this)
				console.log('This image: ', $(this));
				// On change, takes the link picked and replaces the source
				// with said link
				$(document).one('click', '.change-img', function(event) {
					event.preventDefault();
					var link = $('input[name=link]').val();
					console.log('Image link: ', link);
					console.log('Image source: ', that.attr('src'));
					that.attr('src', link);
					// Clears the field
					clearField();

				});
			});
			// Turns of listener if canceled
			$(document).on('click', '.cancel-change-img', function(event) {
				$(document).off('click', '.change-img');
				// Clears the input field
				clearField();
			});
		}
	};
});

// Element directives for each of the template sections
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