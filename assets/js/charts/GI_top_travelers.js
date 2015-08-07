$(function () {
	Highcharts.setOptions({
	    colors: ['#2ea6d5', '#ef7939', '#fac249', '#e71f53', '#fac249']
	});
    $('#gi_top_travelers').highcharts({
        chart: {
            type: 'column',
            backgroundColor: null
        },
        title: {
            text: null
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
	                fontSize: '2em',
	                fontFamily: '"FacitWeb-semibold", "lucida grande", sans-serif',
	                textShadow: 'none'
	            }
	        }
        }]
    });
});