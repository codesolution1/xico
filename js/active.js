(function ($) {
	'use strict';
	$(document).on('ready', function () {
		/*  ======================================
		    slicknav
		====================================== */
		var slickMenu = $('.menu');
		slickMenu.slicknav();

		/*  ======================================
		    Scroll Menu Background Color
		====================================== */
		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 100) {
				$('.header-area').addClass('menu-bg');
			} else {
				$('.header-area').removeClass('menu-bg');
			}
		});


		/*  ======================================
		    Smooth scroll
		====================================== */
		$('a.smooth-scroll').on('click', function (e) {
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		/*  ======================================
		    parallax
		====================================== */
		var bannerParallax = $('.banner-area');
		var progressParallax = $('.progress-area');

		bannerParallax.parallax("50%", 0.5);
		progressParallax.parallax("50%", 0.2);

		/*  ======================================
		    Owl Carousel
		====================================== */
		$(".slider-content, .single-about-img, .testmonial-content").owlCarousel({
			loop: true,
			nav: true,
			autoplay: true,
			mouseDrag: true,
			touchDrag: false,
			animateIn: 'fadeIn',
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
		// Owl Carousel Animation
		$(".slider-content").on("translate.owl.carousel", function () {
			$(".single-slider h2, .single-slider p").removeClass("animated fadeInUp").css("opacity", "0");
			$(".single-slider h3").removeClass("animated slideInRight").css("opacity", "0");
			$(".single-slider .slider-btn").removeClass("animated fadeInDown").css("opacity", "0");
		});
		$(".slider-content").on("translated.owl.carousel", function () {
			$(".single-slider h2, .single-slider p").addClass("animated fadeInUp").css("opacity", "1");
			$(".single-slider h3").addClass("animated slideInRight").css("opacity", "1");
			$(".single-slider .slider-btn").addClass("animated fadeInDown").css("opacity", "1");
		});


		/*  ======================================
		    video background
		====================================== */
		var videobg = $("#header-video-bg")
		videobg.YTPlayer();

		/*  ======================================
		    wmBox for popup video
		====================================== */
		$.wmBox();

		/*  ======================================
		    Accordion
		====================================== */
		$(function () {
			$("#accordion")
				.accordion({
					header: "> div > h3"
				})
				.sortable({
					axis: "y",
					handle: "h3",
					stop: function (event, ui) {
						// IE doesn't register the blur when sorting
						// so trigger focusout handlers to remove .ui-state-focus
						ui.item.children("h3").triggerHandler("focusout");

						// Refresh accordion to handle new order
						$(this).accordion("refresh");
					}
				});
		});


		/*  ======================================
		     Progress
		====================================== */
		var $progress = $('.circle, .barfiller');
		$progress.waypoint(function () {
			/*** Circle Progress ***/
			// First circle Progress
			$('.first.circle').circleProgress({
				value: 0.75,
				size: 150,
				startAngle: 4.5,
				thickness: 10,
				emptyFill: "transparent",
				animation: {
					duration: 2200
				},
				fill: {
					color: "#fb5e1c"
				}
			}).on('circle-animation-progress', function (event, progress) {
				$(this).find('strong').html(Math.round(75 * progress) + '%');
			});
			// Second circle Progress
			$('.second.circle').circleProgress({
				value: 0.80,
				size: 150,
				startAngle: 4.5,
				thickness: 10,
				emptyFill: "transparent",
				animation: {
					duration: 2200
				},
				fill: {
					color: "#fb5e1c"
				}
			}).on('circle-animation-progress', function (event, progress) {
				$(this).find('strong').html(Math.round(80 * progress) + '%');
			});
			// Third circle Progress
			$('.third.circle').circleProgress({
				value: 1,
				size: 150,
				startAngle: 4.5,
				thickness: 10,
				emptyFill: "transparent",
				animation: {
					duration: 2200
				},
				fill: {
					color: "#fb5e1c"
				}
			}).on('circle-animation-progress', function (event, progress) {
				$(this).find('strong').html(Math.round(100 * progress) + '%');
			});
			/*** Progress Bar ***/
			var ProgressBarOne = $('#bar1');
			var ProgressBarTwo = $('#bar2');
			var ProgressBarThree = $('#bar3');
			var ProgressBarFour = $('#bar4');

			ProgressBarOne.barfiller();
			ProgressBarTwo.barfiller();
			ProgressBarThree.barfiller();
			ProgressBarFour.barfiller();

			this.destroy();
		}, {
			offset: '80%'
		});


		/*  ======================================
		    WOW js
		====================================== */
		new WOW().init();


		/*  ======================================
		    Timeline
		====================================== */
		var timelineBlocks = $('.cd-timeline-block'),
			offset = 0.8;
		//hide timeline blocks which are outside the viewport
		hideBlocks(timelineBlocks, offset);
		//on scolling, show/animate timeline blocks when enter the viewport
		$(window).on('scroll', function () {
			(!window.requestAnimationFrame) ?
			setTimeout(function () {
				showBlocks(timelineBlocks, offset);
			}, 100): window.requestAnimationFrame(function () {
				showBlocks(timelineBlocks, offset);
			});
		});

		function hideBlocks(blocks, offset) {
			blocks.each(function () {
				($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
			});
		}

		function showBlocks(blocks, offset) {
			blocks.each(function () {
				($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.cd-timeline-img').hasClass('is-hidden')) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			});
		}


		/*  ======================================
			Google Map
		====================================== */
		var myCenter = new google.maps.LatLng(-33.7654872, 150.9103569);

		function initialize() {
			var mapProp = {
				zoom: 16,
				center: myCenter,
				scrollwheel: false,
				styles: [{
					"stylers": [{
							"hue": "#ffffff"
                }, {
							saturation: -110
                },
						{
							gamma: 2
                }]
        }],
				mapTpeIdy: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(document.getElementById("map"), mapProp);

			//add your location marker here 
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(-33.7654872, 150.9103569),
				map: map,
				draggable: true
			});


		}
		google.maps.event.addDomListener(window, 'load', initialize);

		/*  ======================================
		    Scroll Up
		====================================== */
		$.scrollUp({
			scrollName: 'scrollUp', // Element ID
			topDistance: '300', // Distance from top before showing element (px)
			topSpeed: 300, // Speed back to top (ms)
			animation: 'fade', // Fade, slide, none
			animationInSpeed: 200, // Animation in speed (ms)
			animationOutSpeed: 200, // Animation out speed (ms)
			scrollText: '<a class="hvr-icon-bob click-top"></a>', // Text for element
			activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		});
	});

	$(window).on('load', function () {
		/*  ======================================
		    preloader
		====================================== */
		$('.xico-preloader').fadeOut('500');

		/*  ======================================
		    Isotope
		====================================== */
		// init Isotope        
		$('.iso-content').isotope({
			itemSelector: '.iso-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.iso-item'
			}
		});
		// filter items on button click
		$('.iso-nav ul li').on('click', function () {
			$('.iso-nav ul li').removeClass('portfolio-active');
			$(this).addClass('portfolio-active');
			var selector = $(this).attr('data-filter');
			$('.iso-content').isotope({
				filter: selector
			});
			return false;
		});
	});
}(jQuery));
