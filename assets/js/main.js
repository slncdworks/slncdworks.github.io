$(document).ready(function () {
	//	ADD ATTR JQ
	$("[class*='li-nav'] > a").addClass("a-nav");
	$("[class*='li-hov']").addClass("hov");
	$(".sub-menu").addClass("coll");
	$(".li-hov-services-nav-1 > a").attr({
		id: "services-btn",
		class: "a-services-btn",
	});
	$(".li-hov-services-nav-1 > .sub-menu").attr("id", "services");
	//	DD JQ
	$(".btn-navtgl, .a-nav").click(function () {
		$("#navtgl-btn").toggleClass("active");
		$("#navbar").toggleClass("show");
		$("#services-btn").removeClass("active");
		$("#services").removeClass("show");
	});
	$(".a-services-btn").click(function (event) {
		event.preventDefault();
		$("#services-btn").toggleClass("active");
		$("#services").toggleClass("show");
	});
	$("#mobile").keydown(function (event) {
		//	NUMONLY JQ
		if (event.keyCode == 46 || event.keyCode == 8) {
		} else {
			if (event.keyCode < 48 || event.keyCode > 57) {
				event.preventDefault();
			}
		}
	});
	$("#code").keydown(function (event) {
		//	NUMONLY JQ
		if (event.keyCode == 46 || event.keyCode == 8) {
		} else {
			if (event.keyCode < 48 || event.keyCode > 57) {
				event.preventDefault();
			}
		}
	});
	$("#phone").keydown(function (event) {
		//	NUMONLY JQ
		if (event.keyCode == 46 || event.keyCode == 8) {
		} else {
			if (event.keyCode < 48 || event.keyCode > 57) {
				event.preventDefault();
			}
		}
	});
	//	SELECT2 JQ
	$("#country-code").select2();
});
$(window).scroll(function () {
	//	ONSCRLSTKY JQ
	var element = $("#header"),
		scroll = $(window).scrollTop();

	if (scroll >= 1) element.addClass("stky");
	else element.removeClass("stky");
});
//	OWL JQ
$("#owl-services").owlCarousel({
	loop: true,
	nav: true,
	navText: ["<i class='fas fa-angle-left fa-3x'></i>", "<i class='fas fa-angle-right fa-3x'></i>"],
	dots: true,
	autoplay: true,
	autoplayTimeout: 5000,
	responsive: {
		0: {
			items: 1,
		},
	},
});
//	ENQUIRE JQ
enquire.register("screen and (min-width: 768px)", {
	match: function () {
		//	MATCH HEIGHT JQ
		$(".sec-services [class*='gcol-']").matchHeight({
			byRow: false,
			property: "height",
			target: null,
			remove: false,
		});
	},
	unmatch: function () {
		//	MATCH HEIGHT JQ
		$(".sec-services [class*='gcol-']").matchHeight({
			remove: true,
		});
	},
});
