function create_pp_2() {
    Highcharts.setOptions({
        colors: ['#1e6ba6', '#e71f53', '#4ea74c', '#e7579d', '#2ea6d5', '#ef7933', '#c0d44c', '#fac249']
    });
    $('#pp_programs').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            height: 320,
            backgroundColor: null,
        },
        title: {
            text: null
        },
        credits: {
            enabled: false,
        },
        tooltip: {
            pointFormat: '<b>{point.percentage:.0f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                showInLegend: true,
                dataLabels: {
                    enabled: false,
                    format: '<b>{point.name}</b><br><span style="font-size: 2.5em; ">{point.percentage:.0f}%</span>',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                        fontFamily: '"FacitWeb", "lucida grande", sans-serif',
                        textShadow: 'none'
                    }
                }
            }
        },
        series: [{
            name: "Program  Types",
            colorByPoint: true,
            data: [{
                name: "Full-Time Two-Year MBA",
                y: 22
            }, {
                name: "Full-Time One-Year MBA",
                y: 19
            }, {
                name: "Part-Time MBA",
                y: 9
            }, {
                name: "Master of Accounting",
                y: 9
            }, {
                name: "Master of Finance",
                y: 9
            }]
        }]
    });

}



