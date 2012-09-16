$(function() {
	
	// Hide "About this Talk" initially, except the title
	/*
	$(".about_this_talk .meta").hide();
	$(".about_this_talk .description").hide();
	$(".about_this_talk .comment_share").hide();
	$(".about_this_talk .ratings").hide();
	 */
	$(".talk").addClass("inactive");

	// On hover, display information
	$(".talk").hover(function () {
		$(this).removeClass("inactive").addClass("active");
		/*
		$(this).hasClass("active").(".about_this_talk .meta").show();
		$(this).(".about_this_talk .description").show();
		$(this).(".about_this_talk .comment_share").show();
		$(this).(".about_this_talk .ratings").show();	
		
		$(this).(".about_this_talk").slideDown();
		 */
	},
	function () {
		$(this).removeClass("active").addClass("inactive");
		/*
		$(this).(".about_this_talk .meta").hide();
		$(this).(".about_this_talk .description").hide();
		$(this).(".about_this_talk .comment_share").hide();
		$(this).(".about_this_talk .ratings").hide();	
		 */
	});
	
	var $container = $('#video-container');
	$container.imagesLoaded(function(){
		$container.masonry({
  			itemSelector: '.talk',
  			//columnWidth: 220,
  			isAnimated: true
  		});
	});
		
});
