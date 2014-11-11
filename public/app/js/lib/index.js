var setEditables = function(){
	setTimeout(function(){
		var elements = document.querySelectorAll('.editable'),
			editor = new MediumEditor(elements, {
				buttons: ['bold', 'italic', 'underline', 'quote', 'anchor', 'header1', 'header2']
			});
		
		///////////////////////////
		//  FIX CLICK ME BUTTON  //
		///////////////////////////

	}, 100);
};


$(document).ready(function() {
	
	$(document).on('mouseenter', '#hero-body', function(event) {
		$('#hero-body > .section-btns').show();
	});
	$(document).on('mouseleave', '#hero-body', function(event) {
		$('#hero-body > .section-btns').hide();
	});
	$(document).on('mouseenter', '#hero-header', function(event) {
		$('#hero-header > .section-btns').show();
	});
	$(document).on('mouseleave', '#hero-header', function(event) {
		$('#hero-header > .section-btns').hide();
	});
	$(document).on('mouseenter', '#hero-footer', function(event) {
		$('#hero-footer > .section-btns').show();
	});
	$(document).on('mouseleave', '#hero-footer', function(event) {
		$('#hero-footer > .section-btns').hide();
	});

	$(document).on('click', '.remove', function(event) {
		$(this).closest('.hero').remove();
	});

	$(document).on('mouseenter', '.navbar-brand', function(event) {
		$('.home-cta').toggle("fade");
	});

	$(document).on('mouseleave', '.navbar-brand', function(event) {
		setTimeout(function(){
			$('.home-cta').toggle("fade");
		}, 2000);
	});

});