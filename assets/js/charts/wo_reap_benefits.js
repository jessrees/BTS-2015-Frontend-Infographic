function create_gi_2() {
    $('.circle-largest').animate({"margin-left":"-50%","height":"100%", "width":"100%"}, 600, 'easeOutQuint');
    $('.circle-medium').delay(150).animate({"margin-left":"-40%","height":"80%", "width":"80%"}, 900, 'easeOutQuint');
    $('.circle-smallest').delay(300).animate({"margin-left":"-30%","height":"60%", "width":"60%"}, 1200, 'easeOutQuint');    
    $('.circle-num').addClass('full-opacity');
}

// $(function () {
//     Highcharts.setOptions({
//         colors: ['#2ea6d5']
//     });
//     $('#wo-reap-benefits').highcharts({
//         chart: {
//             type: 'column',
//             height: 300,
//             margin: 0,
//             padding: 0
//         },
//         credits: {
//             enabled: false,
//         },
//         title: {
//             text: null
//         },
//         xAxis: {
//             height: 250,
//             categories: [
//                 '24 Years Old & Under',
//                 '25-26 Years Old',
//                 '27-28 Years Old'
//             ],
//             crosshairs: false
//         },
//         yAxis: {
//             min: 0,
//             height: 250,
//             title: {
//                 text: '% of Increase after 3 years'
//             },
//             gridLineWidth: 0,
//             labels: {
//                 enabled: false,
//             }
//         },
//         tooltip: {
//             enabled: false
//         },
//         plotOptions: {
//             column: {
//                 pointPadding: 0.01,
//                 borderWidth: 0,
//                 groupPadding: .05,
//                 colorByPoint: true,
//                 states: {
//                     normal: {
//                         animation: true,
//                     },
//                     hover: {
//                         brightness: -0.1,
//                         borderColor: 'red',
//                         animation: {
//                             enabled: true,
//                             duration: 1000,
//                         }                                                
//                     }
//                 }
//             }
//         },
//         series: [{
//             showInLegend: false,
//             data: [137, 110, 89],
//             cursor: 'pointer',
//             animation: {
//                 duration: 2010,
//                 easing: 'easeOutExpo'
//             },
//             dataLabels: {
//                 enabled: true,
//                 color: '#FFFFFF',
//                 align: 'center',
//                 inside: true,
//                 defer: false,
//                 verticalAlign: 'bottom',
//                 y: 100,
//                 useHTML: true,
//                 formatter: function() {
//                     return ("<span class='datalabel'>" + this.y + "%</span>");
//                 },
//                 style: {
//                     fontSize: '4em',
//                     fontFamily: '"FacitWeb-semibold", "lucida grande", sans-serif',
//                     textShadow: 'none'
//                 }
//             }
//         }]
//     });
// });