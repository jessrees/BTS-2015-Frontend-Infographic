$(function () {
	Highcharts.setOptions({
		colors: ['#1e6ba6', '#e71f53', '#4ea74c', '#e7579d', '#2ea6d5', '#ef7933', '#c0d44c', '#fac249']
	});
    $('#wo-reap-benefits').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'The Younger the Better to Reap the Benefits of an MBA'
        },
        subtitle: {
            text: 'Source: Financial Times'
        },
        xAxis: {
            categories: [
                '24 & Under',
                '25-26',
                '27-28'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: '% of Increase after 3 years'
            }
        },
        credits: {
            enabled: false,
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
            data: [137, 110, 89],
            dataLabels: {
	            enabled: true,
	            color: '#FFFFFF',
	            align: 'center',
	            inside: true,
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