// page init
jQuery(window).on('load', function() {
	"use strict";


	initTabs();
	initIsoTop();
	initAnchors();
	initCounter();
	initbackTop();
	initLightbox();
	initAddClass();
	initGoogleMap();
	initPreLoader();
	initTextRotator();
	initSlickSlider();
	initProgressBar();
	initVegasSlider();
	initStickyHeader();
	initFormValidation();
	initNavRemoveClass();
});

// PreLoader init
function initPreLoader() {
	jQuery('#pre-loader').delay(1000).fadeOut();
}

// modal popup init
function initTextRotator() {
	$("#js-rotating").Morphext({
		// The [in] animation type. Refer to Animate.css for a list of available animations.
		animation: "bounceIn",
		// An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
		separator: ",",
		// The delay between the changing of each phrase in milliseconds.
		speed: 2000,
		complete: function () {
		    // Called after the entrance animation is executed.
		}
	});
}

// modal popup init
function initLightbox() {
	jQuery('a.lightbox, a[rel*="lightbox"]').fancybox({
		helpers: {
			overlay: {
				css: {
					background: 'rgba(0, 0, 0, 0.65)'
				}
			}
		},
		afterLoad: function(current, previous) {
			// handle custom close button in inline modal
			if(current.href.indexOf('#') === 0) {
				jQuery(current.href).find('a.close').off('click.fb').on('click.fb', function(e){
					e.preventDefault();
					jQuery.fancybox.close();
				});
			}
		},
		padding: 0
	});
}

// Progress Bar init
function initProgressBar() {
	if( jQuery(".progress-bar").length != '' ){
		var waypoint = new Waypoint({
			element: document.getElementById('progress-bar'),
			handler: function(direction) {
				console.log('Scrolled to waypoint!');
				jQuery('.progress-bar li').each(function() {
						var widthBar = jQuery(this).find('.over').attr('data-percent');
						jQuery(this).find('.over').animate({
							'width': widthBar
						});
				});
			},
			offset: '80%'
		});
	}
}

// Vegas Slider init
function initVegasSlider() {
  jQuery("#bgvid").vegas({
      slides: [
        {   src: 'images/img22.jpg',
            video: {
                src: [
                    'video/polina.webm',
                    'video/polina.mp4'
                ],
                loop: true,
                timer: false,
                mute: true
            }
        }
    ]
  });
}

// Slick Slider init
function initSlickSlider() {
	jQuery('.testimonials-slider').slick({
		dots: true,
		speed: 800,
		infinite: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 4000
	});
	jQuery('.top-slider').slick({
		dots: false,
		speed: 800,
		infinite: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true,
		arrows: true,
		autoplaySpeed: 4000
	});
	jQuery('.top-slider-fade').slick({
		dots: false,
		speed: 800,
		fade: true,
		arrows: true,
		infinite: true,
		autoplay: true,
		slidesToShow: 1,
		autoplaySpeed: 4000,
		adaptiveHeight: true
	});
	$('.client-logo').slick({
	  dots: false,
	  infinite: true,
	  speed: 800,
	  slidesToShow: 5,
	  adaptiveHeight: true,
	  autoplay: true,
	  arrows: false,
  	  autoplaySpeed: 4000,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2
	      }
	    }
	  ]
	});
	jQuery('.top-slider-fadeani').slick({
		dots: false,
		speed: 800,
		fade: true,
		arrows: true,
		infinite: true,
		autoplay: true,
		slidesToShow: 1,
		autoplaySpeed: 4000,
		adaptiveHeight: true

	}).on('afterChange', function(event, slick, currentSlide, nextSlide){jQuery(this).find('.slide').eq(currentSlide).find('.animated').addClass('flipInX').removeClass('hide');}).on('beforeChange', function(event, slick, currentSlide, nextSlide){jQuery(this).find('.slide').eq(currentSlide).find('.animated').removeClass('flipInX').addClass('hide');});
}

// Add Class  init
function initAddClass() {
	jQuery('.nav-opener').on( "click", function(e){
		e.preventDefault();
		jQuery("body").toggleClass("nav-active");
	});
}

// sticky header init
function initStickyHeader() {
	var win = jQuery(window),
		stickyClass = 'sticky';

	jQuery('#header').each(function() {
		var header = jQuery(this);
		var headerOffset = header.offset().top || 200;
		var flag = true;

		jQuery(this).css('height' , jQuery(this).innerHeight());

		function scrollHandler() {
			if (win.scrollTop() > headerOffset) {
				if (flag){
					flag = false;
					header.addClass(stickyClass);
				}
			} else {
				if (!flag) {
					flag = true;
					header.removeClass(stickyClass);
				}
			}
		}

		scrollHandler();
		win.on('scroll resize orientationchange', scrollHandler);
	});
}

// Counter init
function initCounter() {
	jQuery('.count').counterUp({
		delay: 10,
		time: 2000
	});
}

// IsoTop init
function initIsoTop() {
	// Isotope init
	var isotopeHolder = jQuery('#masnory-container'),
		win = jQuery(window);
	jQuery('.filter-list a').on( "click", function(e){
		e.preventDefault();
		
		jQuery('.filter-list li').removeClass('active');
		jQuery(this).parent('li').addClass('active');
		var selector = jQuery(this).attr('data-filter');
		isotopeHolder.isotope({ filter: selector });
	});
	jQuery('#masnory-container').isotope({
		itemSelector: '.col',
		transitionDuration: '0.6s'
	});
}

// smooth anchor links init
function initAnchors() {
	new SmoothScroll({
		anchorLinks: 'a.smooth[href^="#"]:not([href="#"])',
		extraOffset: 68,
		activeClasses: 'parent'
	});
}

// backtop init
function initbackTop() {
	var jQuerybackToTop = jQuery("#back-top");
	jQuery(window).on('scroll', function() {
		if (jQuery(this).scrollTop() > 100) {
			jQuerybackToTop.addClass('active');
		} else {
			jQuerybackToTop.removeClass('active');
		}
	});
	jQuerybackToTop.on('click', function(e) {
		jQuery("html, body").animate({scrollTop: 0}, 900);
	});
}

// content tabs init
function initTabs() {
	jQuery('ul.tabset').tabset({
		tabLinks: 'a',
		defaultTab: false
	});
}

// form validation init
function initFormValidation() {
	//if submit button is clicked
	jQuery('#form-submit').on( "click", function(){


        //Get the data from all the fields
        var name = $('input[name=name]');
        var email = $('input[name=email]');
        var subject = $('input[name=subject]');
        var comment = $('textarea[name=comment]');
        var returnError = false;

        //Simple validation to make sure user entered something
        //Add your own error checking here with JS, but also do some error checking with PHP.
        //If error found, add hightlight class to the text field
        if (name.val()=='') {
            name.addClass('error');
            returnError = true;
        } else name.removeClass('error');

        if (email.val()=='') {
            email.addClass('error');
            returnError = true;
        } else email.removeClass('error');

        if (comment.val()=='') {
            comment.addClass('error');
            returnError = true;
        } else comment.removeClass('error');

        // Highlight all error fields, then quit.
        if(returnError == true) {
            return false;	
        }

        //organize the data
        var data = 'name=' + name.val() + '&email=' + email.val() + '&subject=' + subject.val() + '&comment='  + encodeURIComponent(comment.val());

        //disabled all the text fields
        $('.text').attr('disabled','true');

        //show the loading sign
        $('.loading').show();

        //start the ajax
        $.ajax({
            //this is the php file that processes the data and sends email
            url: "inc/process.php",	

            //GET method is used
            type: "GET",

            //pass the data	
            data: data,	

            //Do not cache the page
            cache: false,

            //success
            success: function (html) {	
            //if process.php returned 1/true (send mail success)
                if (html==1) {	
                //hide the form
                $('.contact-form').fadeOut('slow');	

                //show the success message
                $('.done-message').fadeIn('slow');

                //if process.php returned 0/false (send mail failed)
                } else alert('Sorry, unexpected error. Please try again later.');	
            }	
        });

        //cancel the submit button default behaviours
        return false;
	});
}

// GoogleMap init
function initGoogleMap() {
	jQuery('.map').googleMapAPI({
		marker: 'images/marker.png',
		mapInfoContent: '.map-info',
		streetViewControl: false,
		mapTypeControl: false,
		scrollwheel: false,
		panControl: false,
		zoomControl: false
	});
}

// NavRemoveClass init
function initNavRemoveClass() {
	if ($(window).width() < 768) {
		jQuery('#nav .smooth').on( "click", function(e){
			e.preventDefault();
			jQuery("body").removeClass('nav-active');
		});
	}
}