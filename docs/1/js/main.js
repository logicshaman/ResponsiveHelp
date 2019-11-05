 AOS.init({
 	duration: 20000,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: false,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
		$('.carousel-testimony').owlCarousel({
			autoplay: false,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 1
				},
				1000:{
					items: 2
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	// $('#dropdown04').on('show.bs.dropdown', function () {
	//   console.log('show');
	// });

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						// console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


 //  $('.appointment_date').datepicker({
	//   'format': 'm/d/yyyy',
	//   'autoclose': true
	// });

	// $('.appointment_time').timepicker();




})(jQuery);



responsiveHelp(500,1200);
function responsiveHelpMain(){
	$("p").Rcss({
		fontSize: [0.62,0.8],
		lineHeight: [0.89,1.2]
	});
	$("h2").RfontSize(1.2,1.8);
	$("h3").RfontSize(1.15,1.25);

	$(".navbar-light > .container")
		.Rpadding([0,0.05, 0,0.9])
		.find(".py-4")
			.Rpadding([0.015,0,0.2, 1.5,0,0.6]);
	$(".navbar-brand")
		.RfontSize(1.4,2.5).find("span")
			.Rcss({
				fontSize: [0.6,0.85],
				letterSpacing: [0.01,0.1]
			});
	$(".topper")
		.Rcss({
			padding: [0.2,0,0.001, 2,0,0.5],
			fontSize: [0.9,1],
			marginBottom: [0.4, 0.5]
		}).find(".text")
			.Rcss({
			lineHeight: [0.75,1.2],
			paddingLeft: [0.001,0.5]
			}).find("span")
				.Rcss({
					fontSize: [0.8,0.9],
					letterSpacing: [0.001,0.01]
				});
	$(".topper:last-child")
		.Rcss({
			padding: [0.2,0,0.5, 0.2,0,0.1],
			fontSize: [0.9, 0.9],
			marginBottom: [0.001, 0.001]
		}).find("a.btn")
			.Rcss({
				fontSize: [0.84, 0.95],
				margin: [0.001,0.001,0.001, 1.8,0.01,0.01],
				padding: [0.001,0.5]
			}).parent("p.mb-0").RfontSize(1,12);
	$("#ftco-navbar").RpaddingRightLeft(0.15,0.25);
	$("#ftco-nav .nav-link").RpaddingTopBottom(0.35,1);
	$("button.navbar-toggler")
		.Rcss({
			fontSize: [0.71,0.8],
			paddingLeft: [0.1,0.75],
			heightByWidth: [1.5,2.7]
		}).siblings("form.searchform")
			.Rcss({
				fontSize: [1.5,2.66],
				heightByWidth: [1.5,2.7],
				width: [60,30,"%"],
				borderRadius: [0.4,1.5]
			}).find("input")
				.Rcss({
				heightByWidth: [1.26,2.55],
				padding: [0.001,0.1],
				paddingLeft: [0.4, 0.9],
				width: [90,95,"%"],
				fontSize: [0.75,0.799]
				}).siblings("button")
					.Rcss({
						heightByWidth: [1.45,2.6],
						padding: [0.001,0.1],
						width: [10,20,"%"]
					});
	$(".home-slider,.slider-text,.slider-item").RheightByWidth(20,30);
	$(".slider-item > .container")
		.RpaddingRightLeft(0.6,0.9).find("h1.mb-4")
			.Rcss({
				fontSize: [1.5,2.5],
				marginBottom: [0.5,1.5]
			}).siblings("p")
				.Rcss({
					fontSize: [0.9,1],
					lineHeight: [1,1.4]
				}).siblings("p:last-child").find("a")
					.Rcss({
						padding: [0.2,1, 1,2],
						borderRadius: [0.5,2],
						marginTop: [0.001,1],
						fontSize: [0.75,1]
					});
	$(".ftco-services .services")
		.Rcss({
			padding: [1,0.001, 3,0.6],
			widthBreakPoints: [[100,100,0,500,"%"],[50,50,501,900,"%"],[25,25,901,1200,"%"]]
		}).find(".media-body")
			.Rcss({
				marginTop: [0.001,1],
				paddingTopBottom: [0.001, 0.5],
				paddingRightLeft: [0.5, 1]
			}).siblings(".icon").find("span")
				.RfontSize(1.8,2.5);
	$(".services .media-body p")
		.Rcss({
			fontSize: [0.7,0.8],
			lineHeight: [1,1.25]
		}).siblings("h3")
			.RmarginBottom(0.001,0.5);
	$(".boysitmo").Rcss({
		paddingBottom: [0.001,5],
		paddingTop: [0.001,3]
	});
	$(".boysitmo > .container")
		.Rcss({
			paddingRightLeft: [0.001,0.8]
		});
	$(".boysitmo > .container > div > div:last-child")
		.Rcss({
			paddingTop: [0.001,4],
			paddingBottom: [2.2,4]
		}).find("h2")
				.Rcss({
					marginBottom: [0.001,1.5],
					paddingTop: [1.5,0.001]
				});
	$(".boysitmo > .container > div > div:last-child > .mt-5")
		.Rcss({
			marginTop: [0.001,3]
		});
	$(".boysitmo > .container > div > div:last-child > .mt-5 > div")
		.Rcss({
			paddingRightLeft: [0.001,0.7]
		}).find(".services-2")
			.RmarginBottom(0.001,1.5).find(".icon")
				.Rcss({
					width: [2.9,3.9],
					heightByWidth: [2.9,3.9],
					marginTop: [0.25,0.5]
				}).find("[class*='flaticon']")
					.Rcss({
						width: [1.4,1.43],
						fontSize: [1.4,1.51]
					}).parents(".services-2").find(".flaticon-security")
						.Rcss({
							fontSize: [1.8,1.9]
						}).parents(".boysitmo").find(".services-2 .text h3")
							.Rcss({
								fontSize:[0.9,1.15],
								marginBottom: [0.001,0.5]
							});
	$("#section-counter")
		.Rcss({
			paddingTopBottom: [2.2,5.6]
		}).find(".container")
			.Rcss({
				paddingRightLeft: [0.001,0.8]
			}).find(".img-video")
				.Rcss({
					heightByWidth: [11,18.4]
				}).find(".icon-video")
					.Rcss({
						heightByWidth: [2.5,4],
						width: [2.5,4],
						marginTop: [3.7,7.4]
					}).find(".ion-ios-play")
						.Rcss({
							width: [0.5,0.7],
							fontSize: [1.65,2.2]
						});
	$("#section-counter .container > div > div.align-items-stretch")
		.RmarginTop(1,0.5);
	$("#section-counter .heading-section")
		.Rcss({
			paddingTop: [1,0.001]
		}).find("h2")
			.Rcss({
				marginBottom: [0.001,0.1]
			}).parents(".heading-section").find("p")
				.RmarginBottom(0.4,0.6);
	$(".block-18").parent("div")
		.Rcss({
			margin: [0.0001,0.001],
			padding: [0.0001,0.001],
			widthBreakPoints: [[25,25,100,700,"%"],[25,25,701,1500,"%"]]
		}).find(".text .number")
			.Rcss({
				fontSize: [1.4,2]
			}).parent(".text").find("span")
				.Rcss({
					fontSize: [0.6,0.78]
				});

	$(".ftco-section")
		.Rcss({
			paddingTopBottom: [2.5,5]
		})
	$(".section-kegkeg").find("> div")
		.Rcss({
			paddingRightLeft: [0.001,1.5]
		}).find("> div")
			.Rcss({
				marginBottom: [0.5,3]
			}).find("h2.mb-4")
				.Rcss({
					marginBottom: [0.2,1.5],
				});
	$(".section-kegkeg .course")
		.Rcss({
			paddingRightLeft: [0.25,0.5],
			widthBreakPoints: [[100,100,100,300,"%"],[50,50,301,900,"%"],[25,25,901,2000,"%"]]
		}).find(".text ")
			.Rcss({
				paddingTop: [0.25,0.5]
			}).find("p")
				.Rcss({
					marginBottom: [0.5,1]
				}).siblings("h3")
					.Rcss({
						marginBottom: [0.001,0.5],
						fontSize: [0.8,1.2],
						back:"on"
					}).parent().find("p:last-child a")
						.Rcss({
							fontSize: [0.75,1],
							padding: [0.1,0.5,0.25, 0.375,0.75,0.45],
							borderRadius: [0.3,1]
						}).parent().parent().find("p:first-child")
							.Rcss({
								fontSize: [0.55,0.6]
							}).find("span")
								.Rcss({
									marginRight: [0.1,1.25]
								}).find("i")
									.Rcss({
										marginRight: [0.1,0.25]
									});
	$(".section-fefe .container-fluid")
		.Rcss({
			paddingRightLeft: [0.001,1.5]
		}).find("> div:first-child")
			.Rcss({
				paddingBottom: [0.001,0.25],
				marginBottom: [0.75,2]
			}).find("h2")
				.Rcss({
					marginBottom: [0.15,1.5]
				}).parent().parent().parent().find("> div:last-child > div")
					.Rcss({
						widthBreakPoints: [[100,100,100,300,"%"],[50,50,301,850,"%"]],
						paddingRightLeft: [0.4,0.75]
					}).find(".text")
						.Rcss({
							paddingTop: [0.25,1]
						}).find("span")
							.Rcss({
								marginBottom: [0.001,0.5]
							}).siblings("h3")
							.Rcss({
								fontSize: [0.9,1.15]
							}).parents(".staff").find(".img-wrap")
					.Rcss({
						heightByWidth: [15,20]
					});
	$(".ftco-consult .container")
		.Rcss({
			paddingRightLeft: [0.001,0.75]
		}).find(".heading-section")
			.Rcss({
				marginBottom: [0.1,3]
			}).find("h2")
				.Rcss({
					marginBottom: [0.001,1.5]
				}).siblings("p")
				.Rcss({
					marginBottom: [0.5,1]
				}).parents(".container").find("form").find(".form-group")
			.Rcss({
				marginBottom: [0.001,1]
			}).find(".form-control")
				.Rcss({
					paddingTopBottom: [0.001,0.45],
					fontSize: [0.75,0.85],
					heightByWidth: [2.5,2.9]
				}).parents(".d-md-flex").siblings(".d-md-flex:last-child")
				.Rcss({
					marginTop: [0.8,0.001]
				}).find("div:last-child")
					.Rcss({
						marginTop: [1.5,0.001]
					}).find("input")
						.Rcss({
							paddingTopBottom: [0.1,1],
							width: [90,100,"%"],
							marginRightLeft: ["auto"],
							fontSize: [0.9,1]
						}).parents(".ftco-consult").find(".container > div > div")
		.Rcss({
			padding: [1,0.001],
			maxWidth: [100,50,"%"]
		});
	$(".post-section .container")
		.Rcss({
			paddingRightLeft: [0.001,0.75]
		}).find("> div:first-child")
			.Rcss({
				paddingBottom: [0.1,0.5],
				marginBottom: [0.1,3]
			}).find("h2")
				.Rcss({
					marginBottom: [0.1,1.5]
				}).parents(".container").find("> div:last-child").find("> div")
					.Rcss({
						widthBreakPoints: [[100,100,50,400,"%"],[80,80,401,800,"%"],[33.33333,33.33333,801,20000,"%"]],
						marginRightLeft: ["auto"]
					}).find(".text ")
						.Rcss({
							padding: [0.65,1]
						}).find("h3")
							.Rcss({
								marginBottom: [0.1,0.8],
								fontSize: [0.9,1.15]
							}).siblings("p:nth-child(2)")
								.Rcss({
									marginBottom: [0.5,1]
								}).siblings("div")
									.Rcss({
										marginTop: [0.5,1]
									}).find("p:first-child a")
										.Rcss({
											fontSize: [0.7,0.9],
											padding: [0.3,0.8,0.45, 0.6,1,0.8]
										}).parent().siblings("p").find("a")
											.Rcss({
												padding: [0,0]
											});
	$(".final-section > div > div > div")
		.Rcss({
			widthBreakPoints: [[100,100,100,500,"%"],[50,50,501,800,"%"],[25,25,801,20000,"%"]]
		});
	$(".ftco-footer")
		.css({
			paddingBottom: "0"
		}).find(".container")
			.Rcss({
				paddingRightLeft: [0.001,0.75]
			}).find("> div")
				.css({
					marginBottom: "0"
				}).find("> div:first-child > div.ftco-footer-widget h2.ftco-heading-2").siblings("div").find("> ul > li")
						.Rcss({
							marginBottom: [0.5,0.75]
						}).find("span.icon")
							.Rcss({
								width: [1.4,2]
							}).parent("a")
								.Rcss({
									marginBottom: [0.1,0.75]
								});
		$(".ftco-footer .container > div > div > div")
			.Rcss({
				marginBottom: [1.9,3]
			}).find("h2.ftco-heading-2")
			.Rcss({
				fontSize: [0.9,1.1],
				marginBottom: [0.5,2]
			});
		$(".ftco-footer .container > div > div:nth-child(2)")
			.find(".blog-img")
				.Rcss({
					width: [5,4],
					marginRight: [0.5,1.5]
				}).siblings(".text").find("h3.heading")
					.Rcss({
						fontSize: [0.75,0.8],
						lineHeight: [1.2,1.25]
					});
		$(".ftco-footer .subscribe-form .form-group input")
			.Rcss({
				heightByWidth: [1.7,2.6],
				padding: [0.001,0.4],
				fontSize: [0.7,0.8]
			});
		$(".ftco-footer-social")
			.Rcss({
				marginTop: [0.06,0.09]
			}).find("a")
				.Rcss({
					heightByWidth: [1.7,2],
					width: [1.7,2]
				}).find("span")
					.Rcss({
						fontSize: [0.9,1]
					}).parents(".ftco-footer-social").siblings("h2")
					.Rcss({
						marginBottom: [0.25,0.5]
					});
		$(".footer-menu-foo a")
			.Rcss({
				fontSize: [0.7,0.9]
			})



	$("#section-counter,.ftco-consult").addClass("hard-background");
}responsiveHelpMain();

$(window).resize(function(){
	clearTimeout(window.resizingHasStoped);
	window.resizingHasStoped=setTimeout(function(){

		responsiveHelpMain();


	},250);
});
//resize source: https://stackoverflow.com/questions/5489946/jquery-how-to-wait-for-the-end-of-resize-event-and-only-then-perform-an-ac












