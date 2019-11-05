'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {
	/*------------------
		Navigation
	--------------------*/
	$('.main-menu').slicknav({
		appendTo:'.header-section',
		label: '',
		closedSymbol: '<i class="flaticon-right-arrow"></i>',
		openedSymbol: '<i class="flaticon-down-arrow"></i>'
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Gallery Slider
	--------------------*/
	$('.gallery-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
		dots: false,
		margin: 0,
		responsive : {
			0 : {
				items: 3,
			},
			768 : {
				items: 4
			},
			960: {
				items: 5
			}
		}
	});
	

	/*------------------
		Accordions
	--------------------*/
	$('.panel-link').on('click', function (e) {
		$('.panel-link').removeClass('active');
		var $this = $(this);
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});


	/*------------------
		Circle progress
	--------------------*/
	$('.circle-progress').each(function() {
		var cpvalue = $(this).data("cpvalue");
		var cpcolor = $(this).data("cpcolor");
		var cptitle = $(this).data("cptitle");
		var cpid 	= $(this).data("cpid");

		$(this).append('<div class="'+ cpid +'"></div><div class="progress-info"><h2>'+ cpvalue +'%</h2><p>'+ cptitle +'</p></div>');

		if (cpvalue < 100) {

			$('.' + cpid).circleProgress({
				value: '0.' + cpvalue,
				size: 214,
				thickness: 10,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		} else {
			$('.' + cpid).circleProgress({
				value: 1,
				size: 214,
				thickness: 10,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		}
	});

})(jQuery);






$(".hero-img, .meditation-img, .testimonial-img-1, .testimonial-img-2").css("display","block");

responsiveHelp(250);
function responsiveHelpMain(){

	$("#preloder").css("zIndex","9999999999");
	$(".container").css("maxWidth","1250px");

	$("p").Rcss([
		["fontSize",[[0.7,0.9]]],
		["lineHeight",[[0.8,1.5]]]]);
	$(".site-logo").Rcss([
		["fontSize",[[1.1,1.5,{minRange:500}]]]]);
	$(".main-menu").find("li").Rcss([
		["marginRight",[[0.0001,0.001]]]])
		.find("a").Rcss([
			["fontSize",[[0.65,0.8]]],
			["padding",[[0.001,0.25,0.25, 0.001,0.5,0.5]]]]);
	$(".header-section").Rcss([
		["paddingTop",[[0.05,0.25,{minRange:500}]]],
		["z-index",[["999999"]]]]);
	$(".header-socil-links").find("a").Rcss([
		["marginLeft",[[0.25,0.5]]],
		["marginRight",[[0.25,0.5]]],
		["fontSize",[[0.8,1.1]]]]);
	$(".slicknav_nav").Rcss([
		["paddingTop",[[0.2,0.52,{maxRange:767,minRange:500}]]],
		["paddingBottom",[[0.4,0.62,{maxRange:767,minRange:500}]]],
		["borderRadius",[[0.4,0.96]]]])
		.find("> li > a").Rcss([
			["fontSize",[[0.65,0.75,{maxRange:767,minRange:500}]]],
			["padding",[[0.1,0.3]]]]);
	$(".hero-section").Rcss([
		["background-position",[["unset"]]],
		["height",[[20,45]]]])
		.find(".hero-content-warp > .container").Rcss([
			["maxWidth",[[12,60]]],
			["paddingRight",[[0.1,1.5]]],
			["paddingLeft",[[0.1,1.5]]]])
			.find(".hero-content").Rcss([
				["paddingTop",[[6,9]]],
				["maxWidth",[[11,35.5]]],
				["left",[["0"]]],
				["zIndex",[["99999"]]]])
				.find("> img").Rcss([
					["width",[[20,20,{scale:"%"}]]],
					["marginBottom",[[0.001,0.5]]]])
				.parent(".hero-content")
					.find("h2").Rcss([
						["fontSize",[[1.2,3.6]]]])
					.parent(".hero-content")
						.find("p").Rcss([
							["marginBottom",[[0.5,2]]]])
						.parent(".hero-content")
							.find("a").Rcss([
								["fontSize",[[0.5,0.9]]],
								["borderRadius",[[0.25,0.5]]],
								["padding",[[0.25,1, 1.15,4]]],
								["minWidth",[["unset"]]],
								["font-family",[["Anonymous Pro"]]]])
							.parents(".hero-content-warp")
								.find(".hero-img").Rcss([
									["right",[["0"]]],
									["bottom",[["0"]]],
									["maxWidth",[[12.3,60]]]]);
		$(".courses-section").Rcss([
			["marginBottom",[["unset"]]]])
			.find("> div >div >div").Rcss([
				["margin",[["0 auto",{maxRange:501}]]],
				["paddingLeft",[[0.25,1.5]]],
				["paddingRight",[[0.25,1.5]]],
				["width",[
					["100%",{minRange:150,maxRange:250}],
					["75%",{minRange:251,maxRange:600}],
					["33.33333%",{minRange:601}]]]])
				.find(".course-item")
					.find("h4").Rcss([
						["paddingTop",[[0.1,0.75,{minRange:500}]]],
						["marginBottom",[[0.1,1.75,{minRange:500}]]]])
					.parent(".course-item")
						.find("> .ci-icon").Rcss([
							["width",[[5,10]]],
							["height",[[5,10]]],
							["marginBottom",[[0.001,2.25,{minRange:500,zeroPoint:256}]]]])
							.find("> i").Rcss([
								["fontSize",[[2,3.5]]]]);
	$(".meditation-section").Rcss([
		["height",[[36.9,42]]],
		["padding",[["0"]]],
		["marginTop",[[-7,2]]]])
		.find(">.container").Rcss([
			["paddingTop",[[15,9]]]])
			.find("> .row > .col-lg-7").Rcss([
				["paddingRight",[[0.35,0.75]]],
				["paddingLeft",[[0.35,0.75]]]]);
	$(".meditation-content").parent(".col-lg-7").Rcss([
		["maxWidth",[["unset"]]],
		["flex",[["unset"]]]]);
	$(".meditation-content").Rcss([
		["max-width",[
			[22,29,{minRange:699,maxRange:869}],
			[29,39,{minRange:870,maxRange:1200}]
		]]])
		.find(">.sp-title").Rcss([
			["marginBottom",[[0.24,1.5]]]])
			.find("span").Rcss([
				["marginBottom",[[-0.15,0]]],
				["fontSize",[[0.53,0.7]]]])
			.parents(".meditation-content")
				.find("h4").Rcss([
					["paddingTop",[[0,0.5]]],
					["fontSize",[[0.825,1.8]]]])
				.parents(".meditation-content")
					.find(">p").Rcss([
						["marginBottom",[[0.51,2.51]]]])
					.parents(".meditation-content")
						.find("a").Rcss([
							["padding",[[0.2,1.4, 1.15,2]]],
							["fontSize",[[0.5,0.7]]],
							["borderRadius",[[0.2,0.6]]],
							["min-width",[["unset"]]]]);
		$(".meditation-img-div").Rcss([
				["margin-top",[
					[-1,-0.6,{minRange:250,maxRange:300}],
					[-0.6,-1.5,{minRange:301,maxRange:400}],
					[-1.5,-3.3,{minRange:401,maxRange:500}],
					[-3.3,-6.4,{minRange:501,maxRange:600}],
					[-6.4,-10.5,{minRange:601,maxRange:700}],
					[-10.5,-12.6,{minRange:701,maxRange:800}],
					[-12.6,-14.4,{minRange:801,maxRange:900}],
					[-14.4,-17.5,{minRange:901,maxRange:1000}],
					[-17.5,-19,{minRange:1001,maxRange:1100}],
					[-19,-22,{minRange:1101,maxRange:1200}]
				]],
				["float",[["right"]]],
				["width",[["100%"]]]])
				.find("div").Rcss([
					["max-width",[["1400px"]]],
					["margin",[["0 auto"]]]])
					.find("img.meditation-img").Rcss([
						["width",[[12,52]]],
						["maxWidth",[["unset"]]],
						["position",[["unset"]]],
						["float",[["right"]]],
						["bottom",[[0.001,1]]]]);
	$(".timetable-section").Rcss([
		["paddingTop",[[2,5]]],
		["paddingBottom",[[2,6.1]]]])
		.find("> .container").Rcss([
			["paddingLeft",[[0.35,0.7]]],
			["paddingRight",[[0.35,0.7]]]])
			.find(".row").Rcss([
				["margin",[["0"]]]])
				.find(">div").Rcss([
					["padding",[["0"]]],
					["flex", [["unset"]]],
					["max-width", [
						["100%", {minRange:150, maxRange:599}],
						["50%", {minRange:600, maxRange:1200}]
					]]],"off")
						.find(">div:last-child").Rcss([
							["padding-left",[
								["0",{minRange:100,maxRange:599}],
								[0.5,1,{minRange:600, maxRange:1200}]
							]]])
		.parents(".timetable-section")
			.find(".timetable-box").Rcss([
				["padding",[[1.2,0.4,1.4, 3.5,1.5,4]]],
				["float",[["left"]]],
				["width",[["100%"]]]])
				.find(".sp-title").Rcss([
					["marginBottom",[[0.5,2.5]]]])
					.find("h4").Rcss([
						["fontSize",[[0.85,1.2]]],
						["paddingTop",[[0.1,0.51]]]])
					.parent(".sp-title")
						.find("span").Rcss([
							["font-size", [[0.52,0.65]]]])
						.parents(".timetable-box")
							.find("> ul > li").Rcss([
								["margin-bottom",[[0.9,1.29]]]])
							.find("span").Rcss([
								["font-size", [[0.55,0.85]]],
								["border-bottom",[["dotted 1px #aaa"]]],
								["margin-bottom", [[0.2,0.5]]]])
							.siblings("span:first-child").Rcss([
								["width", [[40,50, {scale:"%"}]]],
								["float", [["left"]]]])
							.siblings("span:last-child").Rcss([
								["float", [["right"]]],
								["width", [[60,50, {scale:"%"}]]],
								["text-align", [["right"]]]])
		.parents(".timetable-section")
			.find(".timetable-box ul").Rcss([
				["padding",[["0"]]]])
		.parents(".timetable-section")
			.find(".timetable-text").Rcss([
				["paddingTop",[
					["1.5rem",{maxRange:599}],
					["0",{minRange:600}]
				]]])
				.find(".sp-title").Rcss([
					["marginBottom", [[0.4,1]]]])
					.find("span").Rcss([
						["fontSize",[[0.55,0.6]]]])
					.siblings("h4").Rcss([
						["fontSize",[[0.75,1.2]]],
						["paddingTop",[
							[0.05,0.4]]]])
		.parents(".timetable-text")
			.find(".site-progress-bars").Rcss([
				["paddingTop", [[0.1,0.5]]]])
				.find(".progress-item").Rcss([
					["marginBottom",[[0.6,1.5]]]])
					.find(".progress-bar")
						.find("span").Rcss([
							["bottom", [[-1.1,-1.5]]]])
				.parents(".progress-item")
					.find("p").Rcss([
						["paddingTop",[[0.001,0.25]]]]);
	$(".testimonial-section").Rcss([
		["padding",[[0,0.001, 0,1]]],
		["paddingTop",[[1,4.8]]],
		["paddingBottom",[[2.4,4.9]]]])
		.find(".container").Rcss([
			["paddingLeft",[[0.4,1]]],
			["paddingRight",[[0.4,1]]]])
			.find(".sp-title ").Rcss([
				["marginBottom",[[0.5,2.5]]]])
				.find("span").Rcss([
					["fontSize",[[0.55,0.6]]]])
				.siblings("h4").Rcss([
					["fontSize",[[0.8,1.2]]],
					["paddingTop",[[0.1,0.5]]]])
				.siblings("img").Rcss([
					["width",[[1.9,5]]],
					["margin-bottom",[[0.4,2.5]]]])
		.parents(".testimonial-section")
			.find(".testimonial-content").Rcss([
				["paddingLeft",[[0.001,1.4]]],
				["paddingRight",[[0.001,1.4]]]])
				.find("p").Rcss([
					["marginBottom",[[0.6,2.25]]]])
				.siblings("h6").Rcss([
					["marginBottom",[[-0.5,0.5]]]])
		.parents(".testimonial-section")
			.find(".testimonial-img-2").Rcss([
				["width",[[4.1,11.5]]],
				["bottom",[[-1.7,-4.8]]]])
			.siblings(".testimonial-img-1").Rcss([
				["width",[[3.5,8.5]]]])








}responsiveHelpMain();
$(window).resize(function(){
	clearTimeout(window.resizingHasStoped);
	window.resizingHasStoped=setTimeout(function(){

		responsiveHelpMain();

	},250);
});