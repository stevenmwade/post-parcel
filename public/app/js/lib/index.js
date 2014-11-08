var setEditables = function(){
	setTimeout(function(){
		var textElements = document.querySelectorAll('.editable-text'),
			headerElements = document.querySelectorAll('.editable-header')
			linkElements = document.querySelectorAll('.editable-link'),
			textEditor = new MediumEditor(textElements, {
				buttons: ['bold', 'italic', 'underline', 'quote', 'anchor']
			}),
			linkEditor = new MediumEditor(linkElements, {
				buttons: ['bold', 'italic', 'underline', 'anchor']
			}),
			headerEditor = new MediumEditor(headerElements, {
				buttons: ['italic', 'header1', 'header2']
			});
		
		///////////////////////////
		//  FIX CLICK ME BUTTON  //
		///////////////////////////

	}, 100);
};

var height = $(window).height();
console.log(height);

$('.edit-container').css("height", height);