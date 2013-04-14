$(document).ready(function(){
	$("ul#header li").click(function(e){
		var to = $(e.target).attr("name");
		to = $("#" + to);
		console.log(to.offset().top);

		$(window).scrollTo(to.offset().top, {duration:1000, easing: "swing"});
	});
});

