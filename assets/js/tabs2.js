$(function() {

	mobile = 768;

	$('.flex-test').each(function() {

		if($(window).width() > mobile) {
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

	$('.tab').find('a').click(function(e) {

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
			group.find('.arrow').css({"border-top-color":"#eee"}).animate({"border-top-color":"#1d2172"}, {duration: 800, queue: false});


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
			} else {
				$(this).parent().addClass('active');
				group.find('.section').removeClass('active');
				group.find('.section-'+clickedTab).addClass('active-content').addClass('active');
			}
		}

		e.preventDefault();

	})

});