$(function() {
	// Hide "About this Talk" initially, except the title
	$(".about_this_talk .meta").hide();
	$(".about_this_talk .description").hide();
	$(".about_this_talk .comment_share").hide();
	$(".about_this_talk .ratings").hide();

	$(".talk").addClass("inactive");

	// On hover, display information
	$(".talk").hover(function () {
		$(".talk").removeClass("inactive").addClass("active");
		
		$(".about_this_talk .meta").show();
		$(".about_this_talk .description").show();
		$(".about_this_talk .comment_share").show();
		$(".about_this_talk .ratings").show();	
		
		$(".about_this_talk").slideDown();
	},
	function () {
		$(".talk").removeClass("active").addClass("inactive");

		$(".about_this_talk .meta").hide();
		$(".about_this_talk .description").hide();
		$(".about_this_talk .comment_share").hide();
		$(".about_this_talk .ratings").hide();	
	});
		
});
