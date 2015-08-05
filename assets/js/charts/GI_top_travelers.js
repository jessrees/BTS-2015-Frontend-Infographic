$(function () {
	Highcharts.setOptions({
	    colors: ['#1e6ba6']
	});
    $('#gi_top_travelers').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'The Top Travelers'
        },
        subtitle: {
            text: 'Source: MBA.com Prospective Students Survey March 2015 p. 11'
        },
        xAxis: {
            categories: [
                'Latin Americans',
                'Eastern Europeans',
                'Asian-Pacific students',
                'Africans and Centeral & South Asians'
            ],
            crosshair: false
        },
        yAxis: {
            min: 0,
            ceiling: 100,
            title: {
                text: '% of Students'
            }, 
            labels: {
            	enabled: false
            }
        },
        credits: {
        	enabled: false
        },
        tooltip: {
            enabled: false,
        },
        plotOptions: {
            column: {
                pointPadding: 0.01,
                borderWidth: 0,
                groupPadding: .05,
                colorByPoint: true,
                states: {
                    hover: {
                    	brightness: -0.1,
                    	borderColor: 'red'                                                          
                    }
                }
            }
        },
        series: [{
        	showInLegend: false,
            data: [97, 95, 94, 81],
            cursor: 'pointer',
            animation: {
                duration: 1000,
                easing: 'easeOutCirc'
            },
            dataLabels: {
	            enabled: true,
	            color: '#FFFFFF',
	            align: 'center',
	            inside: true,
	            defer: false,
	            verticalAlign: 'bottom',
	            format: '{point.y:.0f}%', // one decimal
	            y: 50,
	            style: {
	                fontSize: '4em',
	                fontFamily: '"FacitWeb-semibold", "lucida grande", sans-serif',
	                textShadow: 'none'
	            }
	        }
        }]
    });
});