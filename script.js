$(".img-circle").hide().show("slow");
// hide bio
$("body").css("background-color","url(\"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQy2j3PDGHASz9Tdxk5ws3FiYSlgstk1C1deAupn3ypoOsrmH2b\")");
$(".bio strong").hide();
// add button
$(".bio").append("<button class=\"btn btn-primary btn-lg active\"><span style=\"font-size: 40px\">Click Here to view my Bio</span></button>");
// when button presses
$("button").click(function() {
	$(this).prev().show();
	$("body").css("background-color", "");

	$(this).remove();
});