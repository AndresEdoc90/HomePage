$(".img-circle").hide().show("slow");
// hide bio

$(".bio strong").hide();
// add button
$(".bio").append("<button>Bio</button>");
// when button presses
$("button").click(function() {
	$(this).prev().show();
	$("body").css("background-color", "white");

	$(this).remove();
});