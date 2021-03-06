function create_om_2() {
    Highcharts.setOptions({
        colors: ['#2ea6d5', '#e71f53', '#fac249', '#e7579d', '#2ea6d5', '#ef7933', '#c0d44c', '#fac249']
    });
    $('#om_compare').highcharts({
        chart: {
            type: 'column',
            height: 300,
            padding: 0,
            marginBottom: 20,
            marginTop: 20,
            backgroundColor: null
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [
                'Millennials',
                'Gen X',
                'Boomers'
            ],
            crosshair: false
        },
        yAxis: {
            min: 20,
            max: 70,
            title: {
                text: null
            }, 
            labels: {
                enabled: false
            }
        },
        tooltip: {
            enabled: false,
        },
         credits: {
            enabled: false
        },
        plotOptions: {
            column: {
                pointPadding: 0.01,
                borderWidth: 0,
                groupPadding: .2,
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
            data: [63, 58, 46],
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                align: 'center',
                inside: true,
                verticalAlign: 'bottom',
                format: '{point.y:.0f}%', // one decimal
                y: 20,
                style: {
                    fontSize: '1.75em',
                    fontFamily: '"FacitWeb-semibold", "lucida grande", sans-serif',
                    textShadow: 'none'
                }
            }
        }]
    });
}












