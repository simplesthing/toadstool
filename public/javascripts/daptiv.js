
$(document).ready(function(){
	//hardcode tabs active states rather than using angular routing
	//dropdown show hide
	$('.dropdown-menu a').on("mouseenter", function(){
		var dropdown = $(this).next('ul');
		dropdown.show();
		$('li.dropdown-menu').on("mouseleave", function(){
			dropdown.hide();
		});
	});

});
