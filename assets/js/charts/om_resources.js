$(function () {
    $('#om_resources').highcharts({
        chart: {
            height: 300,
            padding: 0,
            margin: 0
        },
        series: [{
            type: "treemap",
            layoutAlgorithm: 'squarified',
             dataLabels: {
                 enabled: true,
                 align: 'center',
                 verticalAlign: 'middle',
                 style: {
                     fontSize: '1.5em',
                     fontWeight: 'bold',
                     textShadow: 'none',
                     fontFamily: '"FacitWeb", "lucida grande", sans-serif'
                 },
             },
            data: [{
                name: 'School Websites',
                value: 100,
                color: '#1e6ba6'
            }, {
                name: 'Friends & Family',
                value: 64,
                color: '#e71f53'
            }, {
                name: 'Published Rankings',
                value: 58,
                color: '#4ea74c'
            }, {
                name: 'Current Students & Alumni',
                value: 49,
                color: '#ef7933'
            },  {
                name: 'School Admissions Professionals',
                value: 49,
                color: '#c0d44c'
            },
            ]
        }],
        title: {
            text: null
        },
        credits: {
            enabled: false
        },
        tooltip: {
            formatter: function () {
                return '<b> Impact Score: ' + this.point.value;
            }
        }
    });
});