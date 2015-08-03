$(function () {
	Highcharts.setOptions({
	    colors: ['#24a6d8', '#ea1850', '#fbc33a']
	});
    $('#gathering_intelligence').highcharts({
        chart: {
            type: 'column',
            width: 130,
            height: 500,
            marginTop: 50,
            backgroundColor:'rgba(255, 255, 255, 0)'
        },
        title: {
            text: null
        },
        xAxis: {
            crosshair: false,
            labels: {
            	enabled: false
            }
        },
        yAxis: {
            min: 0,
            max: 100,
            gridLineWidth: 0,
            title: {
                text: null,
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
            data: [{y: 30, color: '#ea1850'}],
            cursor: 'pointer',
            animation: {
                duration: 1000,
                easing: 'easeOutCirc'
            },
            dataLabels: {
	            enabled: true,
	            color: '#ea1850',
	            align: 'center',
	            inside: false,
	            defer: false,
	            verticalAlign: 'bottom',
	            format: '{point.y:.0f}%', // one decimal
	            y: 0,
	            style: {
	                fontSize: '3em',
	                fontFamily: '"FacitWeb-semibold", "lucida grande", sans-serif',
	                textShadow: 'none'
	            }
	        }
        }]
    });

    $('#plotting_path').highcharts({
        chart: {
            type: 'column',
            width: 130,
            height: 500,
            marginTop: 50,
            backgroundColor:'rgba(255, 255, 255, 0)'
        },
        title: {
            text: null
        },
        xAxis: {
            crosshair: false,
            labels: {
            	enabled: false
            }
        },
        yAxis: {
            min: 0,
            max: 100,
            gridLineWidth: 0,
            title: {
                text: null,
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
            data: [50],
            cursor: 'pointer',
            animation: {
                duration: 1000,
                easing: 'easeOutCirc'
            },
            dataLabels: {
	            enabled: true,
	            color: '#24a6d8',
	            align: 'center',
	            inside: false,
	            defer: false,
	            verticalAlign: 'bottom',
	            format: '{point.y:.0f}%', // one decimal
	            y: 0,
	            style: {
	                fontSize: '3em',
	                fontFamily: '"FacitWeb-semibold", "lucida grande", sans-serif',
	                textShadow: 'none'
	            }
	        }
        }]
    });


	    $('#on_the_move').highcharts({
	        chart: {
	            type: 'column',
	            width: 130,
	            height: 500,
	            marginTop: 50,
	            backgroundColor:'rgba(255, 255, 255, 0)'
	        },
	        title: {
	            text: null
	        },
	        xAxis: {
	            crosshair: false,
	            labels: {
	            	enabled: false
	            }
	        },
	        yAxis: {
	            min: 0,
	            max: 100,
	            gridLineWidth: 0,
	            title: {
	                text: null,
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
	            data: [{y: 20, color: '#fbc33a'}],
	            cursor: 'pointer',
	            animation: {
	                duration: 1000,
	                easing: 'easeOutCirc'
	            },
	            dataLabels: {
		            enabled: true,
		            color: '#fbc33a',
		            align: 'center',
		            inside: false,
		            defer: false,
		            verticalAlign: 'bottom',
		            format: '{point.y:.0f}%', // one decimal
		            y: 0,
		            style: {
		                fontSize: '3em',
		                fontFamily: '"FacitWeb-semibold", "lucida grande", sans-serif',
		                textShadow: 'none'
		            }
		        }
	        }]
	    });


		




});