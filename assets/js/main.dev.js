"use strict";

$(document).ready(function () {
  //	ADD ATTR JQ
  $("[class*='-dd']").addClass("sdd");
  $("[class*='-dd'] > .sub-menu").addClass("sddi");
  $(".li-1-dd1 > a").attr("id", "services"); //	DD JQ

  $(".btn-navcoll,.li-1>a,.li-2>a").click(function () {
    $("#nav").toggleClass("show");
    $("#show-icon").toggleClass("hide");
    $("#hide-icon").toggleClass("show");
    $("#services").removeClass("active");
    $("#services + .sub-menu").removeClass("show");
  });
  $("#services").click(function (event) {
    event.preventDefault();
    $("#services").toggleClass("active");
    $("#services + .sub-menu").toggleClass("show");
  }); //	NUMONLY JQ

  $("#mobile").keydown(function (event) {
    if (event.keyCode == 46 || event.keyCode == 8) {} else {
      if (event.keyCode < 48 || event.keyCode > 57) {
        event.preventDefault();
      }
    }
  });
  $("#code").keydown(function (event) {
    if (event.keyCode == 46 || event.keyCode == 8) {} else {
      if (event.keyCode < 48 || event.keyCode > 57) {
        event.preventDefault();
      }
    }
  });
  $("#phone").keydown(function (event) {
    if (event.keyCode == 46 || event.keyCode == 8) {} else {
      if (event.keyCode < 48 || event.keyCode > 57) {
        event.preventDefault();
      }
    }
  });
});
$(window).scroll(function () {
  //	ONSCRLSTKY JQ
  var element = $("#header"),
      scroll = $(window).scrollTop();
  if (scroll >= 1) element.addClass("stky");else element.removeClass("stky");
}); //	OWL JS

$("#owl-services").owlCarousel({
  loop: true,
  nav: true,
  navText: ["<i class='fas fa-angle-left fa-3x'></i>", "<i class='fas fa-angle-right fa-3x'></i>"],
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1
    }
  }
});