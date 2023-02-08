/*
 * Copyright (c) 2022 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/

jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	scof_tm_picker();
	scof_tm_modalbox();
	scof_tm_page_transition();
	scof_tm_trigger_menu();
	scof_tm_about_popup();
	scof_tm_portfolio_popup();
	scof_tm_activity_popup();
	scof_tm_cursor();
	scof_tm_imgtosvg();
	scof_tm_popup();
	scof_tm_data_images();
	scof_tm_contact_form();
	hashtag();
	scof_tm_swiper();
	scof_tm_headline();
	scof_tm_location();
	scof_tm_color_switcher();
	scof_tm_cursor_switcher();
	scof_tm_lang_switcher();
	scof_tm_switcher_opener();
	scof_tm_about_content();
	scof_tm_activity_content();
	jQuery(window).load('body', function(){
		scof_tm_my_load();
	});
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -----------------------------------------------------
// ---------------   COLOR PICKER    -------------------
// -----------------------------------------------------

function scof_tm_picker(){
	
	"use strict";
	
	if(jQuery('.scof_tm_settings').length){

		// attach background for all colors
		var list	= jQuery('.scof_tm_settings .colors li a');
		list.each(function(){
			jQuery(this).css({backgroundColor: jQuery(this).data('color')});
		});

		// change root color
		list.on('click',function(){
			var element = jQuery(this);
			var color	= element.data('color');
			jQuery(':root').css('--main-color', color);
			return false;
		});	
	}
	
}

// -------------------------------------------------
// -------------  PROGRESS BAR  --------------------
// -------------------------------------------------

function scof_tm_my_progress(){
	
	"use strict";
	
	jQuery('.progress_inner').each(function() {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.bar');
		var pBar 			= progress.find('.bar_in');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');});
	});
}

// -----------------------------------------------------
// ---------------   CIRCULAR PROGRESS   ---------------
// -----------------------------------------------------

function scof_tm_circular_progress(){
	
	"use strict";
	
	var circVal 		= 110;
	
	var colorSchemes	= jQuery(':root').css('--main-color');	
	
	jQuery('.circular_progress_bar .myCircle').each(function(){
		var element	= jQuery(this);
		element.append('<span class="number"></span>');
		var value	= element.data('value');
		element.circleProgress({
			size: circVal,
			value: 0,
			animation: {duration: 1400},
			thickness: 2,
			fill: colorSchemes,
			emptyFill: 'rgba(0,0,0,0)',
			startAngle: -Math.PI/2
		  }).on('circle-animation-progress', function(event, progress, stepValue) {
				element.find('.number').text(parseInt(stepValue.toFixed(2)*100) + '%');
		  });
		  element.circleProgress('value', 1.0);
		  setTimeout(function() { element.circleProgress('value', value); }, 1400);
	});
}

// -----------------------------------------------------
// --------------------   MODALBOX    ------------------
// -----------------------------------------------------

function scof_tm_modalbox(){
	"use strict";
	
	jQuery('.scof_tm_all_wrap').prepend('<div class="scof_tm_modalbox"><div class="box_inner"><div class="close"><a href="#"><i class="icon-cancel"></i></a></div><div class="description_wrap"></div></div></div>')
}

// -----------------------------------------------------
// -------------   PAGE TRANSITION    ------------------
// -----------------------------------------------------

function scof_tm_page_transition(){
	
	"use strict";
	
	var section 		= jQuery('.scof_tm_section');
	var allLi 			= jQuery('.transition_link li');
	var button			= jQuery('.transition_link a');
	var wrapper 		= jQuery('.scof_tm_all_wrap');
	var enter	 		= wrapper.data('enter');
	var exit		 	= wrapper.data('exit');
	
	button.on('click',function(){
		var element 	= jQuery(this);
		var href		= element.attr('href');
		if(element.parent().hasClass('scof_tm_button')){
			jQuery('.menu .transition_link a[href="'+href+'"]').trigger('click');
			hashtag();
			return false;
		}
		var sectionID 	= jQuery(href);
		var parent	 	= element.closest('li');
			if(!parent.hasClass('active')) {
				allLi.removeClass('active');
				wrapper.find(section).removeClass('animated '+enter);
				if(wrapper.hasClass('opened')) {
					wrapper.find(section).addClass('animated '+exit);
				}
				parent.addClass('active');
				wrapper.addClass('opened');
				wrapper.find(sectionID).removeClass('animated '+exit).addClass('animated '+enter);
				jQuery(section).addClass('hidden');
				jQuery(sectionID).removeClass('hidden').addClass('active');
			}
		return false;
	});
}

// -----------------------------------------------------
// ---------------   TRIGGER MENU    -------------------
// -----------------------------------------------------

function scof_tm_trigger_menu(){
	
	"use strict";

	var hamburger 		= jQuery('.scof_tm_topbar .trigger .hamburger');
	var mobileMenu		= jQuery('.scof_tm_mobile_menu');
	var mobileMenuList	= jQuery('.scof_tm_mobile_menu ul li a');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.removeClass('opened');
		}else{
			element.addClass('is-active');
			mobileMenu.addClass('opened');
		}
		return false;
	});
	
	mobileMenuList.on('click',function(){
		jQuery('.scof_tm_topbar .trigger .hamburger').removeClass('is-active');
		mobileMenu.removeClass('opened');
		return false;
	});
}

// -------------------------------------------------
// ---------------  ABOUT POPUP  -------------------
// -------------------------------------------------

function scof_tm_about_popup(){
	
	"use strict";
	
	var button			= jQuery('.scof_tm_about .scof_tm_button a');
	var close			= jQuery('.scof_tm_modalbox .close');
	var modalBox		= jQuery('.scof_tm_modalbox');
	var hiddenContent	= jQuery('.scof_tm_hidden_content').html();
	
	button.on('click',function(){
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(hiddenContent);
		scof_tm_data_images();
		scof_tm_my_progress();
		scof_tm_circular_progress();
		scof_tm_mycarousel();
		scof_tm_location();
		scof_tm_about_content();

	});
	close.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
	});
}

// -------------------------------------------------
// -----------  PORTFOLIO POPUP  -------------------
// -------------------------------------------------

function scof_tm_portfolio_popup(){
	
	"use strict";
	
	var modalBox		= jQuery('.scof_tm_modalbox');
	var button			= jQuery('.scof_tm_portfolio .portfolio_popup');
	var closePopup		= modalBox.find('.close');
	
	button.off().on('click',function(){
		var element 	= jQuery(this);
		var parent 		= element.closest('.list_inner');
		var content 	= parent.find('.scof_tm_hidden_content').html();
		var image		= parent.find('.image .main').data('img-url');
		var title		= parent.find('.details h3').text();
		var category	= parent.find('.details span').text();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.portfolio_popup_details').prepend('<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
		modalBox.find('.portfolio_popup_details .top_image').after('<div class="portfolio_main_title"><h3>'+title+'</h3><span><a href="#">'+category+'</a></span><div>');
		scof_tm_data_images();
		scof_tm_popup();
		scof_tm_portfolio_content();
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// ----------------  ACTIVITY POPUP  -------------------
// -------------------------------------------------

function scof_tm_activity_popup(){
	
	"use strict";
	
	var modalBox		= jQuery('.scof_tm_modalbox');
	var button			= jQuery('.scof_tm_activity .activity_popup,.scof_tm_activity .activity_list h3 a');
	var closePopup		= modalBox.find('.close');
	
	button.off().on('click',function(){
		var element 	= jQuery(this);
		var parent 		= element.closest('.list_inner');
		var content 	= parent.find('.scof_tm_hidden_content').html();
		var image		= parent.find('.image .main').data('img-url');
		var title		= parent.find('.details h3 a').text();
		var category	= parent.find('.details span').html();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.activity_popup_details').prepend('<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
		modalBox.find('.activity_popup_details .top_image').after('<div class="activity_main_title"><h3>'+title+'</h3><span>'+category+'</span><div>');
		scof_tm_data_images();
		scof_tm_activity_content();
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------

function scof_tm_preloader(){
	
	"use strict";
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');
	
	if (!isMobile) {
		setTimeout(function() {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function() {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}

// -----------------------------------------------------
// -----------------   MY LOAD    ----------------------
// -----------------------------------------------------

function scof_tm_my_load(){
	
	"use strict";
	
	var speed	= 500;
	setTimeout(function(){scof_tm_preloader();},speed);
}

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function scof_tm_cursor(){
	
    "use strict";
	
	var myCursor	= jQuery('.mouse-cursor');
	
	if(myCursor.length){
		if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a,.scof_tm_topbar .trigger, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a,.scof_tm_topbar .trigger, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
	}
};

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function scof_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function scof_tm_popup(){
	
	"use strict";

	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
	jQuery('.popup-youtube, .popup-vimeo').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
	
	jQuery('.soundcloude_link').magnificPopup({
	  type : 'image',
	   gallery: {
		   enabled: true, 
	   },
	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function scof_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}


// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function scof_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// -----------------------------------------------------
// --------------    OWL CAROUSEL    -------------------
// -----------------------------------------------------

 function scof_tm_mycarousel(){
	 
	 "use strict";
	 
	 var carousel			= jQuery('.scof_tm_modalbox .owl-carousel');
	
	carousel.owlCarousel({
		loop: true,
		items: 1,
		lazyLoad: false,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 7000,
		dots: false,
		nav: false,
		navSpeed: false,
		responsive : {
			0 : {
				items: 1
			},
			768 : {
				items: 1
			}
		}
	});
	 
 }

// -----------------------------------------------------
// -------------------    HASHTAG    -------------------
// -----------------------------------------------------

function hashtag(){
	"use strict";
	var ccc 			= $('.scof_tm_header .menu .ccc');
	var element 		= $('.scof_tm_header .menu .active a');
	$('.scof_tm_header .menu a').on('mouseenter',function(){
		var e 			= $(this);
		currentLink(ccc,e);
	});
	$('.scof_tm_header .menu').on('mouseleave',function(){
		element 		= $('.scof_tm_header .menu .active a');
		currentLink(ccc,element);
		element.parent().siblings().removeClass('mleave');
	});
	currentLink(ccc,element);
	
}

function currentLink(ccc,e){
	"use strict";
	if(!e.length){return false;}
	var left 		= e.offset().left;
	var width		= e.outerWidth();
	var menuleft 	= $('.scof_tm_header .menu').offset().left;
	e.parent().removeClass('mleave');
	e.parent().siblings().addClass('mleave');
	ccc.css({left: (left-menuleft) + 'px',width: width + 'px'});
	
}

// -----------------------------------------------------
// ---------------   SWIPER SLIDER    ------------------
// -----------------------------------------------------

function scof_tm_swiper(){
	"use strict";
	
	$('.swiper-section').each(function(){
		var element 	= $(this);
		var container 	= element.find('.swiper-container');
		var mySwiper 	= new Swiper (container, {
			loop: false,
			slidesPerView: 1,
			spaceBetween: 0,
			loopAdditionalSlides: 1,
			autoplay: {
				delay: 6000,
			},
			
			navigation: {
				nextEl: '.my_next',
				prevEl: '.my_prev',
			  },
			
			pagination: {
				el: '.scof_tm_swiper_progress',
				type: 'custom', // progressbar
				renderCustom: function (swiper,current,total) {


					// progress animation
					var scale,translateX;
					var progressDOM	= container.find('.scof_tm_swiper_progress');
					if(progressDOM.hasClass('fill')){
						translateX 	= '0px';
						scale		= parseInt((current/total)*100)/100;
					}else{
						scale 		= parseInt((1/total)*100)/100;
						translateX 	= (current-1) * parseInt((100/total)*100)/100 + 'px';
					}


					progressDOM.find('.all span').css({transform:'translate3d('+translateX+',0px,0px) scaleX('+scale+') scaleY(1)'});
					if(current<10){current = '0' + current;}
					if(total<10){total = '0' + total;}
					progressDOM.find('.current').html(current);
					progressDOM.find('.total').html(total);
				}
			},
			breakpoints: {
				700: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 30,
				}
			}
		});
	});
	scof_tm_imgtosvg();
}

// -------------------------------------------------
// -----------------  LOCATION  --------------------
// -------------------------------------------------

function scof_tm_location(){
	
	"use strict";
	
	var button		= jQuery('.href_location');
	button.on('click',function(){
		var element		= jQuery(this);
		var address		= element.text();
		address			= address.replace(/\ /g,'+');
		var text		= 'https://maps.google.com?q=';
		window.open(text+address);
		return false;
	});
}

// -----------------------------------------------------
// ---------------------   SWITCHERS    ----------------
// -----------------------------------------------------

function scof_tm_color_switcher(){
	
	"use strict";
	
	var list	= jQuery('.scof_tm_settings .colors li a');
	
	list.on('click',function(){
		var element = jQuery(this);
		var elval	= element.attr('class');
		element.closest('.scof_tm_all_wrap').attr('data-color',''+elval+'');
//		scof_tm_circular_progress();
		return false;
	});	
}

function scof_tm_cursor_switcher(){
	
	"use strict";
	
	var wrapper		= jQuery('.scof_tm_all_wrap');
	var button		= jQuery('.scof_tm_settings .cursor li a');
	var show		= jQuery('.scof_tm_settings .cursor li a.show');
	var hide		= jQuery('.scof_tm_settings .cursor li a.hide');
	
	button.on('click',function(){
		var element = jQuery(this);
		if(!element.hasClass('showme')){
			button.removeClass('showme');
			element.addClass('showme');
		}
		return false;
	});
	show.on('click',function(){
		wrapper.attr('data-magic-cursor','')
	});
	hide.on('click',function(){
		wrapper.attr('data-magic-cursor','hide')
	});
	
}

function scof_tm_lang_switcher(){
	"use strict";
	
	var button		= jQuery('.scof_tm_settings .lang li a');
	
	button.on('click',function(){
		var element = jQuery(this);
		if(!element.hasClass('showme')){
			button.removeClass('showme');
			element.addClass('showme');
			document.documentElement.setAttribute("lang", element.data('lang'));
			scof_tm_about_content();
			scof_tm_activity_content();
		}
		return false;
	});
	
}

function scof_tm_switcher_opener(){

	"use strict";

	var settings	= jQuery('.scof_tm_settings');
	var button		= settings.find('.link');

	button.on('click',function(){
		var element = jQuery(this);
		if(element.hasClass('opened')){
			element.removeClass('opened');
			element.closest('.scof_tm_settings').removeClass('opened');
		}else{
			element.addClass('opened');
			element.closest('.scof_tm_settings').addClass('opened');
		}
		return false;
	});
}

// -----------------------------------------------------
// ---------------   ABOUT CONTENT    --------------------
// -----------------------------------------------------
function scof_tm_about_content(){
	"use strict";

	$('[data-about-content]').each(function(){
		$(this).html($.about[document.documentElement.getAttribute("lang")][$(this).data('aboutContent')]);
	})
}

// -----------------------------------------------------
// ---------------   PORTFOLIO CONTENT    --------------------
// -----------------------------------------------------
function scof_tm_portfolio_content(){
	"use strict";

	$('[data-portfolio-content]').each(function(){
		$(this).html($.portfolio[document.documentElement.getAttribute("lang")][$(this).data('portfolioContent')]);
	})
}

// -----------------------------------------------------
// ---------------   ACTIVITY CONTENT    --------------------
// -----------------------------------------------------
function scof_tm_activity_content(){
	"use strict";

	$('[data-activity-content]').each(function(){
		$(this).html($.activity[document.documentElement.getAttribute("lang")][$(this).data('activityContent')]);
	})
}