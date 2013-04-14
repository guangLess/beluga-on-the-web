$(document).ready(function(){
	$("ul#header li").click(function(e){
		var to = $(e.target).attr("name");
		to = $("#" + to);
		console.log(to.offset().top);

		$(window).scrollTo(to.offset().top, {duration:1000, easing: "swing"});
	});
	
	$(".media").width("100%");
	
	$(".vimeo").height($(".vimeo").width()*.562);
	$(".flickr").height($(".flickr").width()*.75);
	
//	var gapRate = ($(".vimeo").height()*.15)/25;
//	$("#beluga .gap").css("margin-top", $(".vimeo").height()*gapRate + "px" );
});

