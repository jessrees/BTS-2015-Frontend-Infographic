var tabSizer = function() {
	$('.flex-test').each(function() {
		if($(window).width() > mobile) {

			$('.content-expand').css({"display":"none"});

			// get the amount of tabs in each group
			tabs = $(this).find('.tab').length;

			// update the correct width for the tabs in each group
			width = 100/tabs;
			$(this).find('.tab').css({"width":width+"%"});

			// find the active tab
			activeTab = $(this).find('.tab.active').find('a').attr('data-content');

			// determine the new position of the arrow
			subtract = (100/tabs)/2;
			width = (100/tabs)*activeTab;
			arrowPos = width-subtract;

			// place the arrow in the correct place
			$(this).find('.arrow').stop().animate({"left":arrowPos+"%"}, 500);
		}
	})
}

var expandIcon = function() {
	$('.tab').each(function() {
		$(this).append('<div class="content-expand expand">+</div>');
		if($(this).hasClass('active')) {
			$(this).find('.content-expand').text('–').removeClass('expand').addClass('close-dash');
		}
	})
}



// stars for timeline animation

$(function() {
	$('.star').each(function() {
		start = Math.random();
		$(this).css({"opacity":start});
	});
})


window.setInterval(function() {
$('.star').each(function() {
		var start = Math.random();
		$(this).animate({"opacity":"1"}, 500, function() {
			$(this).animate({"opacity":start}, 500);
		})
	});

}, 1000);






// hovering over map 

$('.hover_map_show').mouseenter(function() {
	$('.map_label').stop().animate({"opacity":"1"},500);
}).mouseleave(function() {
	$('.map_label').stop().animate({"opacity":"0"},500)
})





window.setInterval(function() {
	$('.z.z-first').each(function() {
		$(this).animate({"font-size":"5em","bottom":"200px","opacity":"0"},3000, 'easeOutCirc', function() {
			randomLeft = Math.random()*200;
			randomTop = Math.random()*200;
			$(this).css({"margin-left":-randomLeft+"px","bottom":-randomTop+"px","opacity":"1","font-size":"1em"});
		});
	});
}, 1200);





// svg CLOSE animation 
$(function() {
	$('.svg-ico').mouseenter(function() {
		if($(this).hasClass('active')) {
			console.log("entered 2");
			$(this).find('.open_svg').addClass('hide_svg');
			$(this).find('.close_svg').addClass('show_svg');
		}
	}).mouseleave(function() {
			console.log("entered 2");
			$(this).find('.open_svg').removeClass('hide_svg');
			$(this).find('.close_svg').removeClass('show_svg');
	})
})



$(function() {

	mobile = 768;


	// not really related to tabs
	$('.expand_infographics').click(function(e) {
		$('.infographics').slideToggle(500);
		$('body, html').animate({
   	 		scrollTop: $('.infographics').position().top
		}, 500);

		if($('.expand_infographics').find('img').hasClass('flipped')) {
			$(this).find('img').removeClass('flipped');
		} else {
			$(this).find('img').addClass('flipped');
		}


		e.preventDefault();
	});


	// on init, change which chart displays
	// this should be detected BEFORE any  charts are rendered
	if($(window).width() <= mobile) {
		if($('#pp_programs').find('svg').length) {
			$('#pp_programs').highcharts().destroy();
			responsive();
		}
	}


	$(window).resize(function() {
		// if mobile
		if($(window).width() <= mobile) {
			// reset tab widths
			$('.tab').css({'width':'100%'});

			// add expand Icon if they are not already there
			if($('.content-expand').length == 0) {
				expandIcon();
			}

			// update charts 
			if($('#pp_programs').find('svg').length) {
				$('#pp_programs').highcharts().destroy();
				responsive();
			}
		} else {
			// not mobile

			// resize tabs back to correct dim
			tabSizer();
			// delete +/- on tabs that are used in responsive view
			$('.content-expand').remove();

		}
	});


	// render charts when in view
	rendered1 = false;
	rendered2 = false;
	rendered3 = false;
	$(window).bind('scroll', function() {
		isScrolledIntoView($('.info-1'));
		isScrolledIntoView($('.info-2'));
		isScrolledIntoView($('.info-3'));

		console.log("alive");

		function isScrolledIntoView(elem) {
			var $elem = $(elem);
			var $window = $(window);

			var docViewTop = $window.scrollTop();
			var docViewBottom = docViewTop + $window.height();

			var elemTop = $elem.offset().top;
			var elemBottom = elemTop + $elem.height();

			half = $(window).height()/5;

			if(docViewTop > elemTop-half) {
				if(elem.selector == ".info-1" && !rendered1) {
					create_gi_2();
					rendered1 = true;
				}
				if(elem.selector == ".info-2" && !rendered2) {
					create_pp_2();
					rendered2 = true;
				}
				if(elem.selector == ".info-3" && !rendered3) {
					create_om_2();
					rendered3 = true;
				}
			}
		}

		// once all charts are rendered, remove this to save da power
		if(rendered1 && rendered2 && rendered3) {
			$(this).unbind('scroll');
		}
	})

	
	expandIcon();

	tabSizer();


	$('.tab').find('a').click(function(e) {


		// hack for resizing charts when hidden :(
		setTimeout(function () {
    		$(window).trigger('resize');
		}, 1);



		// animate charts



		// IF NOT MOBILE 
		if($(window).width() > mobile) {

			// get which group of tabs the clicked tab is in
			groupId = $(this).parent().parent().attr('data-group');
			group = $(this).parent().parent();

			// get the id of the clicked tab 
			clickedTab = $(this).attr('data-content');

			// get the amount of tabs in the group
			tabs = group.find('.tab').length;

			// determine the new arrow position 
			subtract = (100/tabs)/2;
			width = (100/tabs)*clickedTab;
			arrowPos = width-subtract;

			// animate the arrow position for the group only 
			group.find('.arrow').animate({"left":arrowPos+"%"}, {duration: 500, queue: false});
			// make arrow gray 
			group.find('.arrow').animate({"border-top-color":"#1d2172"}, {duration: 800, queue: false});


			// what was the previous tab?
			previousTab = group.find('.tab.active').find('a').attr('data-content');

			// update the active tab for the group 
			group.find('.tab').removeClass('active')
			$(this).parent().addClass('active');

			// animate the previous section to the left and then push it back to the right side to be animated in later
			group.find('.section-'+previousTab).stop().animate({"left":"-100%"},500, function() {
				$(this).css({"left":"100%"})
			});
			// animate the clicked tab from the right
			group.find('.section-'+clickedTab).css({"left":"100%"}).addClass('active-content').stop().animate({"left":"0px"},500);
		}

		if($(window).width() <= mobile) {
			// get which group of tabs the clicked tab is in
			groupId = $(this).parent().parent().attr('data-group');
			group = $(this).parent().parent();

			// get the id of the clicked tab 
			clickedTab = $(this).attr('data-content');

			//if the tab is already open, close it and remove active class
			// if it's not open, open it and add the active class
			if($(this).parent().hasClass('active')) {
				$(this).parent().removeClass('active');
				group.find('.section-'+clickedTab).removeClass('active-content').removeClass('active');
				$(this).parent().find('.content-expand').text('+').addClass('expand').removeClass('close-dash');
			} else {
				$(this).parent().addClass('active');
				group.find('.section').removeClass('active');
				group.find('.section-'+clickedTab).addClass('active-content').addClass('active');
				$(this).parent().find('.content-expand').text('–').removeClass('expand').addClass('close-dash');
			}
		}


		if(groupId == 1 && clickedTab == 3) {
			create_gi_3();
		}
		if(groupId == 1 && clickedTab == 1) {
			create_gi_1();
		}


		if(groupId == 2 && clickedTab == 1) {
			create_pp_1();
		}




		if(groupId == 3 && clickedTab == 3) {
			create_om_3();
		}



		e.preventDefault();

	})

});


$(function() {


	$('.tools-section').click(function(e) {
	
		// get which section was clicked
		clickedMainSection = $(this).attr('data-tools-section');
		// get the previous section based on the current class in this group
		previousMainSection = $('.tools_section[data-section="'+clickedMainSection+'"]').parent().find('.current').attr('data-section');

		if(clickedMainSection != previousMainSection) {
			// if not visisble, expand area
			if(!$('.tools_section[data-section="'+clickedMainSection+'"]').parent().parent().parent().is(':visible')) {
				$('.tools_section[data-section="'+clickedMainSection+'"]').parent().parent().parent().slideToggle(500);
			}
			// animate positions
			$('.tools_section[data-section="'+clickedMainSection+'"]').animate({"left":"0px"},500);
			$('.tools_section[data-section="'+previousMainSection+'"]').animate({"left":"-34%"},500, function() {
				$(this).css({"left":"34%"});
			});
			// finish by adding/removing current class
			$('.tools_section[data-section="'+clickedMainSection+'"]').parent().find('.current').removeClass('current');
			$('.tools_section[data-section="'+clickedMainSection+'"]').addClass('current');

			// update active section
			$(this).parent().find('.tools-section').find('.active').removeClass('active');
			$(this).find('.section-icons').addClass('active');
			$(this).find('.svg-ico').addClass('active');


			clickedMainSectionNum = clickedMainSection.split('-');
			clickedMainSectionNum = clickedMainSectionNum[1];
			if(clickedMainSectionNum == 1) {
				$(this).parent().find('.arrow_mask_inner').animate({"left":"-133%"}, 500);
			}
			if(clickedMainSectionNum == 2) {
				$(this).parent().find('.arrow_mask_inner').animate({"left":"-100%"}, 500);
			}
			if(clickedMainSectionNum == 3) {
				$(this).parent().find('.arrow_mask_inner').animate({"left":"-66%"}, 500);
			}


		} else {
			$('.tools_section[data-section="'+clickedMainSection+'"]').parent().parent().parent().slideToggle(500);
			$(this).parent().find('.tools-section').removeClass('active');

			if($(this).parent().find('.tools-section').find('.active').length > 0) {
				$(this).parent().find('.tools-section').find('.active').removeClass('active');
			} else {
				$(this).find('.section-icons').addClass('active');
				$(this).find('.svg-ico').addClass('active');
			}

		}

		if(clickedMainSection == "1-2") {
			console.log("pins!");
			$('.pin').removeClass('small-pin');
		}



		e.preventDefault();
	})
});