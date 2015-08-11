
function create_gi_1() {
    Highcharts.setOptions({
        colors: ['#2ea6d5', '#e71f53', '#fac249', '#e7579d', '#2ea6d5', '#ef7933', '#c0d44c', '#fac249']
    });
    $('#gi_work_mba').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            width: 300,
            backgroundColor: null
        },
        title: {
            text: null
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
                showInLegend: true,
                dataLabels: {
                    defer: false,
                    enabled: true,
                    formatter: function() {
                        return Math.round(this.percentage*100)/100 + '%';
                    },
                    distance: -50,
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white',
                        fontFamily: '"FacitWeb", "lucida grande", sans-serif',
                        fontSize: '1.5em',
                        textShadow: 'none'
                    }
                }
            }
        },
        series: [{
            name: "Career Goals",
            colorByPoint: true,
            animation: {
                duration: 1000,
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
}

