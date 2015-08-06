

var percentages = [83, 53, 54, 51, 39, 64, 35, 62, 44, 48];
var labels = ['Consulted', 'Influenced'];
var resources = ['School Websites', 'Friends & Family', 'Published Rankings', 'Current Students & Alumni', 'School Admissions Professionals'];

var pathObj = {
    "inner-circle": {
        "strokepath": [
            {
                "path": "M225.749,11.151c117.416,0,212.6,95.184,212.6,212.6   c0,117.414-95.184,212.598-212.6,212.598c-117.414,0-212.598-95.184-212.598-212.598c0-37.141,9.533-72.051,26.271-102.434",
                "duration": 60,
                "strokeWidth": 15,
                "strokeCap": "square",
                "strokeColor": "#22A5D7"
            },
            {
                "path": "M225.369,25.324C225.37,25.324,225.37,25.324,225.369,25.324   c109.589,0,198.427,88.838,198.427,198.425c0,109.588-88.838,198.426-198.426,198.426c-7.006,0-13.925-0.368-20.743-1.076",
                "duration": 60,
                "strokeWidth": 14,
                "strokeCap": "square",
                "strokeColor": "#C0D43B"
            },
            {
                "path": "M225.933,53.672c93.933,0,170.079,76.146,170.079,170.079   c0,93.932-76.146,170.078-170.08,170.078c-14.192,0-27.975-1.75-41.152-5.025",
                "duration": 60,
                "strokeWidth": 15,
                "strokeCap": "square",
                "strokeColor": "#22A5D7"
            },
            {
                "path": "M225.769,67.847c86.104,0,155.905,69.801,155.905,155.904   s-69.801,155.906-155.905,155.906c-5.505,0-10.94-0.289-16.298-0.846",
                "duration": 60,
                "strokeWidth": 14,
                "strokeCap": "square",
                "strokeColor": "#C0D43B"
            },
            {
                "path": "M225.75,96.19c0.001,0,0.002,0,0.002,0   c70.447,0,127.559,57.11,127.559,127.559c0,39.228-17.713,74.313-45.57,97.714",
                "duration": 60,
                "strokeWidth": 15,
                "strokeCap": "square",
                "strokeColor": "#22A5D7"
            },
            {
                "path": "M225.652,110.363c62.621,0,113.387,50.765,113.387,113.387   c0,62.621-50.766,113.386-113.387,113.386c-34.867,0-66.055-15.744-86.854-40.505",
                "duration": 60,
                "strokeWidth": 14,
                "strokeCap": "square",
                "strokeColor": "#C0D43B"
            },
            {
                "path": "M225.75,138.711c46.967,0,85.039,38.073,85.039,85.038   c0,18.043-5.635,34.76-15.218,48.523",
                "duration": 60,
                "strokeWidth": 15,
                "strokeCap": "square",
                "strokeColor": "#22A5D7"
            },
            {
                "path": "M226.087,152.884c39.138,0.001,70.864,31.727,70.864,70.865   s-31.727,70.865-70.865,70.865c-18.68,0-35.659-7.238-48.319-19.049",
                "duration": 60,
                "strokeWidth": 14,
                "strokeCap": "square",
                "strokeColor": "#C0D43B"
            },
            {
                "path": "M225.75,181.747c23.482,0,42.52,19.037,42.52,42.52   c0,17.85-11.002,33.119-26.592,39.424",
                "duration": 60,
                "strokeWidth": 15,
                "strokeCap": "square",
                "strokeColor": "#22A5D7"
            },
            {
                "path": "M225.751,195.544c15.656,0,28.348,12.691,28.348,28.348   c0,14.315-10.615,26.146-24.402,28.066",
                "duration": 60,
                "strokeWidth": 14,
                "strokeCap": "square",
                "strokeColor": "#C0D43B"
            }
        ],
        "dimensions": {
            "width": 452,
            "height": 448
        }
    }
 }; 
$(function() {
    $('#inner-circle').lazylinepainter({
        "svgData": pathObj,
        "speedMultiplier": 10,
        "reverse": true,
        "responsive": true,
        "drawSequential": false
    }).lazylinepainter('paint'); 
    $('path').mouseenter(function() {
        child = $(this).attr('data-child');
        percentage = percentages[child]+"%";

        function isEven(value) {
            if (value%2 == 0) {
                label = labels[0]
            } else {
                label = labels[1];
            }
        }
        isEven(child);

        console.log(child)
        resourceNum = (parseInt(child)+1)/2;
        console.log(resourceNum);
        resource = Math.round(resourceNum);
        resource = resource-1;
        resource = resources[resource];



        $('.label').html(resource + "<br>" + percentage + " " + label);
    }). mouseleave(function() {
        $('.label').text("");
    });
    p = 0;
    $('.lazy-line').find('path').each(function() {
        $(this).attr('data-child',p);
        p++;
    })

});


$(document).bind('mousemove', function(e){

    leftOffset = $('.top_resources').offset().left;
    topOffset = $('.top_resources').offset().top;

    $('.label').css({
        left:  e.pageX - leftOffset + 100,
        top:   e.pageY - topOffset + 60
    });
});



// draw1();
// draw2();
// draw3();
// draw4();
// draw5();

// function draw1() {
//     setTimeout(function(){
//         $('.circle-1, .circle-2').removeClass('circle-hidden');
//         $('.circle-1').circleProgress({emptyFill: 'rgba(0,0,0,0)', thickness: 15, value: 0.83,size: 500,fill: {color: '#22A5D7'}});
//         $('.circle-2').circleProgress({emptyFill: 'rgba(0,0,0,0)', thickness: 15, value: 0.53,size: 470,fill: {color: '#C0D43B'}});
//     }, 002);
// }

// function draw2() {
//     setTimeout(function(){
//         $('.circle-3, .circle-4').removeClass('circle-hidden');
//         $('.circle-3').circleProgress({emptyFill: 'rgba(0,0,0,0)', thickness: 15, value: 0.54,size: 400,fill: {color: '#22A5D7'}});
//         $('.circle-4').circleProgress({emptyFill: 'rgba(0,0,0,0)', thickness: 15, value: 0.51,size: 370,fill: {color: '#C0D43B'}});
//      }, 100);
// }


// function draw3() {
//     setTimeout(function(){
//         $('.circle-5, .circle-6').removeClass('circle-hidden');
//         $('.circle-5').circleProgress({emptyFill: 'rgba(0,0,0,0)', thickness: 15, value: 0.39,size: 300,fill: {color: '#22A5D7'}});
//         $('.circle-6').circleProgress({emptyFill: 'rgba(0,0,0,0)', thickness: 15, value: 0.64,size: 270,fill: {color: '#C0D43B'}});
//      }, 200);
// }


// function draw4() {
//     setTimeout(function(){
//         $('.circle-7, .circle-8, .circle-labels').removeClass('circle-hidden');
//         $('.circle-7').circleProgress({emptyFill: 'rgba(0,0,0,0)', thickness: 15, value: 0.35,size: 200,fill: {color: '#22A5D7'}});
//         $('.circle-8').circleProgress({emptyFill: 'rgba(0,0,0,0)', thickness: 15, value: 0.62,size: 170,fill: {color: '#C0D43B'}});
//      }, 300);
// }

// function draw5() {
//     setTimeout(function(){
//         $('.circle-9, .circle-10').removeClass('circle-hidden');
//         $('.circle-9').circleProgress({emptyFill: 'rgba(0,0,0,0)', thickness: 15, value: 0.44,size: 100,fill: {color: '#22A5D7'}});
//         $('.circle-10').circleProgress({emptyFill: 'rgba(0,0,0,0)', thickness: 15, value: 0.48,size: 70,fill: {color: '#C0D43B'}});
//      }, 400);
// }
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