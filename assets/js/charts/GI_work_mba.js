$(function () {
	Highcharts.setOptions({
	    colors: ['#1e6ba6', '#e71f53', '#4ea74c', '#e7579d', '#2ea6d5', '#ef7933', '#c0d44c', '#fac249']
	});
    $('#gi_work_mba').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'How to put an MBA to Work'
        },
        tooltip: {
            pointFormat: '<b>{point.percentage:.0f}%</b>'
        },
        credits: {
        	enabled: false
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                	defer: false,
                    enabled: true,
                    format: '<span class="datalabels"><b>{point.name}</b><br><span style="font-size: 2.5em; ">{point.percentage:.0f}%</span></span>',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                        fontFamily: '"FacitWeb", "lucida grande", sans-serif',
	               		textShadow: 'none'
                    }
                }
            }
        },
        series: [{
            name: "Career Goals",
            colorByPoint: true,
            animation: {
                duration: 1500,
                easing: 'easeInOutBack'
            },
            data: [{
                name: "Enhance existing career",
                y: 34
            }, {
                name: "Switch Careers",
                y: 38
            }, {
                name: "Start own business",
                y: 28
            }]
        }]
    });
});