$(function () {
    Highcharts.setOptions({
        colors: ['#2ea6d5', '#e71f53', '#fac249', '#e7579d', '#2ea6d5', '#ef7933', '#c0d44c', '#fac249']
    });
    $('#pp-career-goals').highcharts({
        chart: {
            type: 'column',
            padding: 0,
            height: 300,
            backgroundColor: null
        },
        title: {
            text: null
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: [
                'Career Enahncer',
                'Career Switcher',
                'Aspiring Entrepreneur'
            ],
            crosshair: false
        },
        yAxis: {
            min: 0,
            title: {
                text: '% of Respondents'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.0f}%</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.01,
                borderWidth: 0,
                groupPadding: .02
            }
        },
        series: [{
            name: 'MBA Only',
            data: [43, 57, 55]

        },{
            name: 'Master\'s Only',
            data: [31, 19, 16]

        }, {
            name: 'MBA & Master\'s',
            data: [25, 25, 28]

        }]
    });
});