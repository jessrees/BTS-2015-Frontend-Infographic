$(function () {
    Highcharts.setOptions({
        colors: ['#1e6ba6', '#e71f53', '#4ea74c', '#e7579d', '#2ea6d5', '#ef7933', '#c0d44c', '#fac249']
    });

    $('#om_killers').highcharts({
        chart: {
            type: 'bar',
            spacingBottom: 50,
            margin: [0, 0, 0, 0],
            padding: 0
        },
        title: {
            text: null,
        },
        xAxis: {
            title: {
                text: null
            }, 
            labels: {
                enabled: false
            }
        },
        yAxis: {
            min: 0,
            ceiling: 90,
            gridLineWidth: 0,
            title: {
                text: null
            },
            labels: {
                enabled: false,
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + ': </b>' + this.y + '%'
            }
        },
        plotOptions: {
            bar: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.0f}%', 
                    groupPadding: 0,
                    style: {
                        textShadow: 'none',
                        fontSize: '4em',
                        fontFamily: '"FacitWeb-semibold", "lucida grande", sans-serif',
                    },
                }
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            floating: true,
            y: 20,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'A Lack of Relevant Work Experience',
            data: [9]
        }, {
            name: 'A Low Undergraduate GPA',
            data: [32]
        }, {
            name: 'A Low GMAT/GRE Score',
            data: [50]
        }]
    });
});