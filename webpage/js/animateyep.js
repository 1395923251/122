$(function() {
	$(".tiaozhuan").bind("click", function() {
		$("#teacher").addClass("animated fadeInLeftBig");

		setTimeout(function() {

			$('#teacher').removeClass('fadeInLeftBig');

		}, 1000);
	});
	$('.carousel').carousel({
		interval: 2000

	})
	
   $(".tiaozhuan1").bind("click", function() {
		$("#about").addClass("animated swing");

		setTimeout(function() {

			$("#about").removeClass("swing");

		}, 1000);
	});
	$('.carousel').carousel({
		interval: 2000

	})
	
	$(".tiaozhuan2").bind("click", function() {
		$("#lessons").addClass("animated shake");

		setTimeout(function() {

			$('#lessons').removeClass('shake');

		}, 1000);
	});
	$('.carousel').carousel({
		interval: 2000

	})
	
	$(".tiaozhuan3").bind("click", function() {
		$("#student").addClass("animated rotateInUpLeft");

		setTimeout(function() { 

			$('#student').removeClass('rotateInUpLeft');

		}, 1000);
	});
	$('.carousel').carousel({
		interval: 2000

	})
	
	$(".tiaozhuan4").bind("click", function() {
		$("#project").addClass("animated bounce");

		setTimeout(function() {

			$('#project').removeClass('bounce');

		}, 1000);
	});
	$('.carousel').carousel({
		interval: 2000

	})
	
	
   
});