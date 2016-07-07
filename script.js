$(".img-circle").hide().show("slow");
// hide bio
$("#bio").hide();
// add button
$("bio").append("<button type='button' class='btn btn-primary'>Primary</button>");
// when button presses
$("button").click(function() {
	$(this).prev().show();

	$(this).remove();
});