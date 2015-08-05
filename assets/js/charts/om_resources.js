draw1();
draw2();
draw3();
draw4();
draw5();

function draw1() {
    setTimeout(function(){
        $('.circle-1, .circle-2').removeClass('circle-hidden');
        $('.circle-1').circleProgress({emptyFill: 'rgba(0,0,0,0)', thickness: 15, value: 0.83,size: 500,fill: {color: '#22A5D7'}});
        $('.circle-2').circleProgress({emptyFill: 'rgba(0,0,0,0)', thickness: 15, value: 0.53,size: 470,fill: {color: '#C0D43B'}});
    }, 002);
}

function draw2() {
    setTimeout(function(){
        $('.circle-3, .circle-4').removeClass('circle-hidden');
        $('.circle-3').circleProgress({emptyFill: 'rgba(0,0,0,0)', thickness: 15, value: 0.54,size: 400,fill: {color: '#22A5D7'}});
        $('.circle-4').circleProgress({emptyFill: 'rgba(0,0,0,0)', thickness: 15, value: 0.51,size: 370,fill: {color: '#C0D43B'}});
     }, 100);
}


function draw3() {
    setTimeout(function(){
        $('.circle-5, .circle-6').removeClass('circle-hidden');
        $('.circle-5').circleProgress({emptyFill: 'rgba(0,0,0,0)', thickness: 15, value: 0.39,size: 300,fill: {color: '#22A5D7'}});
        $('.circle-6').circleProgress({emptyFill: 'rgba(0,0,0,0)', thickness: 15, value: 0.64,size: 270,fill: {color: '#C0D43B'}});
     }, 200);
}


function draw4() {
    setTimeout(function(){
        $('.circle-7, .circle-8, .circle-labels').removeClass('circle-hidden');
        $('.circle-7').circleProgress({emptyFill: 'rgba(0,0,0,0)', thickness: 15, value: 0.35,size: 200,fill: {color: '#22A5D7'}});
        $('.circle-8').circleProgress({emptyFill: 'rgba(0,0,0,0)', thickness: 15, value: 0.62,size: 170,fill: {color: '#C0D43B'}});
     }, 300);
}

function draw5() {
    setTimeout(function(){
        $('.circle-9, .circle-10').removeClass('circle-hidden');
        $('.circle-9').circleProgress({emptyFill: 'rgba(0,0,0,0)', thickness: 15, value: 0.44,size: 100,fill: {color: '#22A5D7'}});
        $('.circle-10').circleProgress({emptyFill: 'rgba(0,0,0,0)', thickness: 15, value: 0.48,size: 70,fill: {color: '#C0D43B'}});
     }, 400);
}
// $(function () {
//     $('#om_resources').highcharts({
//         chart: {
//             height: 300,
//             padding: 0,
//             margin: 0
//         },
//         series: [{
//             type: "treemap",
//             layoutAlgorithm: 'squarified',
//              dataLabels: {
//                  enabled: true,
//                  align: 'center',
//                  verticalAlign: 'middle',
//                  style: {
//                      fontSize: '1.5em',
//                      fontWeight: 'bold',
//                      textShadow: 'none',
//                      fontFamily: '"FacitWeb", "lucida grande", sans-serif'
//                  },
//              },
//             data: [{
//                 name: 'School Websites',
//                 value: 100,
//                 color: '#1e6ba6'
//             }, {
//                 name: 'Friends & Family',
//                 value: 64,
//                 color: '#e71f53'
//             }, {
//                 name: 'Published Rankings',
//                 value: 58,
//                 color: '#4ea74c'
//             }, {
//                 name: 'Current Students & Alumni',
//                 value: 49,
//                 color: '#ef7933'
//             },  {
//                 name: 'School Admissions Professionals',
//                 value: 49,
//                 color: '#c0d44c'
//             },
//             ]
//         }],
//         title: {
//             text: null
//         },
//         credits: {
//             enabled: false
//         },
//         tooltip: {
//             formatter: function () {
//                 return '<b> Impact Score: ' + this.point.value;
//             }
//         }
//     });
// });