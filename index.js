$(function() {
 $('.humbtn').click(function() {
	 $(this).toggleClass('active');

	 if($(this).hasClass('active')) {
		 $('#menu').addClass('active');
	 }else {
		 $('#menu').removeClass('active');
	 }
 });
});
$(function() {
	$('#menu li').hover(
		function() {
			// $('#sub-menu').css('display', 'block');
			// $('#sub-menu').addClass('open');
			$(this).children('ul').show(200);
		},
		function() {
			// $('#sub-menu').css('display', 'none');
			// $('#sub-menu').removeClass('open');
			$(this).children('ul').hide(200);
		}
	);
})