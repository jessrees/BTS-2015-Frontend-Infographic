$(function () {

    Highcharts.setOptions({
        colors: ['#2ea6d5', '#e71f53', '#fac249', '#e7579d', '#2ea6d5', '#ef7933', '#c0d44c', '#fac249']
    });

    $('#om_killers').highcharts({
        chart: {
            type: 'bar',
            spacingBottom: 50,
            marginTop: -10,
            marginLeft: 0,
            marginRight: 0,
            backgroundColor: null
        },
        title: {
            text: null
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
            height: 200,
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
            },
            zIndex: 100001,
        },
        plotOptions: {
            bar: {
                pointPadding: 0,
                groupPadding: 0,
                borderWidth: 0,
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    style: {
                        textShadow: 'none',
                        fontSize: '1.5em',
                        textIndent: '-30px',
                        textAlign: 'center',
                        fontFamily: '"FacitWeb-semibold", "lucida grande", sans-serif',
                    },
                    formatter: function () {
                        return '<div style="margin-left: -10px; margin-top: 3px;"><span>' + this.y + '%</span></div>';
                    },
                    useHTML: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'center',
            verticalAlign: 'bottom',
            floating: false,
            shadow: false,
            reversed: true
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