
$(function() {
	mobile = 768;
	winWidth = $(window).width();
	prevSection = 2;
	if(mobile <= winWidth) {
		$('.section').addClass('active-content');
	}
	$(window).resize(function() {
		winWidth = $(window).width();
		// reset on resize of window  so only one section remains open if you expand beyond mobile breakpoint
		if(winWidth > mobile) {
			$('.section').addClass('active-content');
			$('.section').css({"left":"100%"});
			$('.active').css({"left":"0%"});
			prevSection = $('.active').attr('data-content');
			$('.tab').removeClass('active');
			$('.tab-'+currentSection).addClass('active')
		} else {
			$('.section').removeClass('active-content');
			$('.active').addClass('active-content');
		}
	});
	$('.tab').find('a').click(function(e) {

		// get group ID 
		groupId = $(this).parent().parent().attr('data-group');
		group = $('.flex-test[data-group="'+groupId+'"]');
		console.log(group);





		// if not responive view
		if(winWidth > mobile) {
			$(group).find('.tab').removeClass('active');
			$(this).parent().addClass('active');

			contentSection = $(this).attr('data-content');
			$(group).find('.section').removeClass('active');
			$(group).find('.section').addClass('active-content');
			$(group).find('.section.section-'+contentSection).addClass('active');

			animateLeft(contentSection, group);

			if(contentSection == 1) {
				$(group).find('.arrow').animate({"left":"16.65%"});
			}
			if(contentSection == 2) {
				$(group).find('.arrow').animate({"left":"50%"});
			}
			if(contentSection == 3) {
				$(group).find('.arrow').animate({"left":"83.25%"});
			}
		}
		// if responsive view
		if(winWidth <= mobile) {
			contentSection = $(this).attr('data-content');
			// if the current section is open, close it. Otherwise, open it
			if($(group).find('.section.section-'+contentSection).hasClass('active-content')) {
				$(group).find('.section.section-'+contentSection).removeClass('active-content');
				$(this).parent().removeClass('active');
			} else {
				$(group).find('.section.section-'+contentSection).addClass('active-content');
				$(group).find('.section.section-'+contentSection).addClass('active');
				$(this).parent().addClass('active');
			}
		}

		e.preventDefault();

	})
});
function animateLeft(contentSection, group) {
	// move the clicked one after the current 
	if(!prevSection) {
		prevSection = 0;
	}
	if(prevSection != contentSection) {
		$(group).find('.section.section-'+contentSection).after($('.section.section-'+prevSection));

		$(group).find('.section.section-'+contentSection).animate({"left":'0%'}, 500);

		if(!this.prevSection) {
			if(this.contentSection == 1) {
				$(this).prevSection = 2;
				this.prevSection2 = 3;
			}
			if(contentSection == 2) {
				prevSection = 1;
				prevSection2 = 3;
			}
			if(contentSection == 3) {
				prevSection = 2;
				prevSection2 = 1;
			}
			$(group).find('.section.section-'+prevSection).animate({"left":'-100%'}, 500, function() {
				$(this).css({"left":'100%'});
			});
			$(group).find('.section.section-'+prevSection2).animate({"left":'-100%'}, 500, function() {
				$(this).css({"left":'100%'});
			});
		} else {
			$(group).find('.section.section-'+prevSection).animate({"left":'-100%'}, 500, function() {
				$(this).css({"left":'100%'});
			});
		}
	}
	prevSection = contentSection;
};