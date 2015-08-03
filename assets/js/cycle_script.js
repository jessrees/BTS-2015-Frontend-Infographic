$(function() {
	// jquery tabs
	// may need to be disabled on responsive state and changed to expand/collapse?
	$('.tabs').tabs();



	$(window).resize(function() {
		winWidth = $(window).width();

		if(winWidth <= 478) {
			console.log("tabs");
			$('.tabs').tabs('destroy');
			$('.tabs').tabs({
			  collapsible: true
			});
		}

		$('#tabs-8').appendTo('.tab-8').css({"position":"absolute"});

	});
	

	// hack for revlowing the chart, unsure why this is needed but chart will not take up 100% width on "hidden" tabs
	// seems to be working without it?
	//$('.tabs').click(function() {
		//$('#om_compare').highcharts().reflow();
	//})
});
$(function() {
	i = 0;
	currentSlide = 1;
	$('.cycle-control-c').each(function() {
		title = $(this).text();
		$(this).attr('data-title', title);
		$(this).attr('data-pos', i);
		$(this).attr('data-set', i);
		i++;
		total = i;
	});
});
$('.cycle-control-r, .cycle-control-l').click(function(event) {
	// which arrow direction did the user click on?
	clickedDirection = $(this).attr('data-dir');
	if(clickedDirection == 1) {
		// clicked direction is right
		nextSlide = currentSlide+1;
		if(nextSlide >= total) {
			nextSlide = 0;
		}

		$('.cycle-control-c[data-pos="'+(nextSlide-2)+'"').clone().appendTo('.cycle-headers').addClass('temp');

	} else {
		// clicked direction is left
		nextSlide = currentSlide-1;
		if(nextSlide <= -1) {
			nextSlide = total-1;
		}
	}
	// highlight active state
	$('.cycle-control-c').removeClass('active');
	nextSlideHighlight = nextSlide;
	$('.cycle-control-c[data-pos="'+nextSlideHighlight+'"').addClass('active');
	// scroll next slide into view



	scrollDir = clickedDirection;
	if(scrollDir == 1) {
		scrollDir = -33.3;
	} else {
		scrollDir = 33.3;
	}



	$('.cycle-headers').animate({"margin-left":scrollDir+'%'}, function() {
		currentSlide = nextSlide;
		// reset pos
		$('.cycle-headers').css({"margin-left":0});
		if(nextSlide == 0) {
			prev = 2;
			next = 1;
		}
		if(nextSlide == 1) {
			prev = 2;
			next = 0;
		}
		if(nextSlide == 2) {
			prev = 1;
			next = 0;
		}
		if(nextSlide == 1) {
			$('.cycle-control-c[data-pos="0"').appendTo('.cycle-headers');
			$('.cycle-control-c[data-pos="1"').appendTo('.cycle-headers');
			$('.cycle-control-c[data-pos="2"').appendTo('.cycle-headers');
		} else {
			$('.cycle-control-c[data-pos="'+prev+'"').prependTo('.cycle-headers');
			$('.cycle-control-c[data-pos="'+next+'"').appendTo('.cycle-headers');
		}
		
		$('.temp').remove();
	});






	event.preventDefault();
	changeDataSet(nextSlide)
});
// this function changes the data set of the chart on click to reflect the data under the current header //
function changeDataSet(dataSet) {
    var chart = $('#om_compare').highcharts();
    if(dataSet == 0) {
       	if(chart.series[0].data.length == 3) {
       		chart.series[0].data[2].remove();
       		// update the colors so it reflects the boomers color rather than the gen x color
       		chart.series[0].setData([{y: 66, color: chart.options.colors[0]}, {y: 65, color: chart.options.colors[2]}]);
       		chart.xAxis[0].setCategories(['Millennials', 'Boomers']);
       	}	
    } 
    if(dataSet == 1) {
    	// check the length of the data set, if there are two points, add a third
    	// this is required to get a smooth transition between points
    	// otherwise, there are already 3 points so we can just update them 
    	if(chart.series[0].data.length == 2) {
    		chart.series[0].data[1].remove();
    		chart.series[0].setData([63, 58]);
    		chart.series[0].addPoint(46);
    		chart.xAxis[0].setCategories(['Millennials', 'Gen X', 'Boomers']);
    	} else {
    		chart.series[0].setData([63, 58, 46]);
    	}
    } 
    if(dataSet == 2) {
		if(chart.series[0].data.length == 2) {
			chart.series[0].data[1].remove();
			chart.xAxis[0].setCategories(['Millennials', 'Gen X', 'Boomers']);
			chart.series[0].setData([58, 51]);
			chart.series[0].addPoint(41);
		} else {
			chart.series[0].setData([58, 51, 41]);
		}
    }
}





