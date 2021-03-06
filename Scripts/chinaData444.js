let map1 = {
    // 江苏省
    num1: 8,//早癌数
    num2: 7674//血检数
}

var data = [];

var series1 = {
    name: '江苏省',
    type: 'map',
    zoom: 0.7,
    top: '15%',
    mapType: 'china',
    clickable: false,
    label: {
        normal: {
            show: false
        },
        emphasis: {
            show: false
        }
    },
    itemStyle: {

        normal: {
            areaColor: '#5f3776',
            borderColor: '#643d7a',
            borderWidth: 1,
            //shadowColor:'rgba(121, 59, 136, 0.3)',          //阴影颜色
            // shadowOffsetX:10,            //阴影水平方向上的偏移距离。
            // shadowOffsetY:8,            //阴影垂直方向上的偏移距离
            // shadowBlur:2, 

        },
        emphasis: {
            areaColor: '#c19fd2'
        }
    },
    data: [{
        name: '江苏',
        selected: true

    }],

    markLine: {
        symbol: ['image://spot.png', 'none'],
        symbolSize: 20,
        silent: true,
        itemStyle: {
            normal: {
                color: 'black',
                lineStyle: {
                    type: 'solid',
                    width: 1,
                    color: '#fff',
                    //shadowColor: 'rgba(255,255,255,1.0)',
                    //shadowBlur: 5,
                    //shadowOffsetX: 30,
                    //shadowOffsetY: 30,
                },
            }
        },
        data: [
            [{
                value: [4, 5734],
                name: "江苏省",
                padding: [8, 0, 30, 10],
                label: {

                    normal: {
                        formatter: [
                            '{Province|江苏}' +
                            '\n{l1|' + map1.num1 + '}   {l2|' + map1.num2 + '}																																								' +
                            '\n{l3|早癌数}   {l4|血检数}																																								' +
                            '\n{l5|0.1%}																																								' +
                            ' \n'
                        ].join('\n'),
                        position: 'end',
                        distance: 20,
                        rich: {
                            block: {
                                height: 50,
                            },
                            Province: {
                                align: 'left',
                                padding: [8, 0, 30, 0],
                                fontSize: 20,
                                fontFamily: 'myFourthFont',
                            },
                            l1: {
                                align: 'center',
                                //verticalAlign:'middle',
                                // backgroundColor: '#F86A3E',
                                backgroundColor: 'rgba(248,106,62,0.6)',
                                color: '#fff',
                                padding: [0, 0, 5, 0],
                                fontSize: 32,
                                width: 50,
                                height: 30,

                                borderWidth: 1,
                                borderColor: 'rgba(248,106,62,0.1)',
                                fontFamily: 'myFirstFont',
                            },
                            l2: {
                                align: 'center',
                                //verticalAlign:'bottom',
                                //backgroundColor: '#F41485',
                                backgroundColor: 'rgba(244,20,133,0.6)',
                                color: '#fff',
                                //borderWidth: 1,
                                padding: [0, 0, 5, 0],
                                fontSize: 32,
                                width: 75,
                                height: 30,

                                borderWidth: 1,
                                borderColor: 'rgba(244,20,133,0.1)',
                                fontFamily: 'myFirstFont',
                            },
                            l3: {
                                align: 'center',
                                backgroundColor: 'rgba(248,106,62,0.6)',
                                color: '#fff',
                                //borderRadius: 15,
                                padding: [5, 0, 0, 0],
                                fontSize: 12,
                                width: 50,
                                height: 16,

                                borderWidth: 1,
                                borderColor: 'rgba(248,106,62,0.1)',
                                fontFamily: 'myFourthFont',
                            },

                            l4: {
                                align: 'center',
                                backgroundColor: 'rgba(244,20,133,0.6)',
                                color: '#fff',
                                //borderRadius: 15,
                                padding: [5, 0, 0, 0],
                                fontSize: 12,
                                width: 75,
                                height: 16,

                                borderWidth: 1,
                                borderColor: 'rgba(244,20,133,0.1)',
                                fontFamily: 'myFourthFont',
                            },
                            l5: {
                                align: 'left',

                                color: '#fff',
                                padding: [53, 0, 18, 10],
                                // padding: 5 ,
                                //lineHeight:1,
                                fontSize: 50, //height: 66,
                                fontFamily: 'myFirstFont',
                            },
                        }
                    }
                },
                coord: [118.767413, 32.041544]
            },

            {
                name: "江苏省",
                coord: [95.984722, 45.756539]
            }

            ],
            [

                {

                    symbol: 'none',


                    coord: [95.984722, 45.756539]
                },
                {

                    symbol: 'none',
                    coord: [77.984722, 45.756539]
                }
            ]


        ],
        animation: false
    }
};


var series2 = {
    name: '上海',
    type: 'map',
    zoom: 0.7,
    top: '15%',
    mapType: 'china',
    clickable: false,
    label: {
        normal: {
            show: false
        },
        emphasis: {
            show: false
        }
    },
    itemStyle: {

        normal: {
            areaColor: '#5f3776',
            borderColor: '#643d7a',
            borderWidth: 1,
            //shadowColor:'rgba(121, 59, 136, 0.3)',          //阴影颜色
            // shadowOffsetX:10,            //阴影水平方向上的偏移距离。
            // shadowOffsetY:8,            //阴影垂直方向上的偏移距离
            // shadowBlur:2, 

        },
        emphasis: {
            areaColor: '#c19fd2'
        }
    },
    data: [{
        name: '上海',
        selected: true

    },
    {
        name: '江苏',
        selected: true

    }
    ],

    markLine: {
        symbol: ['image://spot.png', 'none'],
        symbolSize: 20,
        silent: true,
        itemStyle: {
            normal: {
                color: 'black',
                lineStyle: {
                    type: 'solid',
                    width: 1,
                    color: '#fff',
                    //shadowColor: 'rgba(255,255,255,1.0)',
                    //shadowBlur: 5,
                    //shadowOffsetX: 30,
                    //shadowOffsetY: 30,
                },
            }
        },
        data: [
            [{
                value: [4, 5734],
                name: "江苏省",
                label: {

                    normal: {
                        formatter: [
                            '{Province|江苏}' +
                            '\n{l1|' + map1.num1 + '}   {l2|' + map1.num2 + '}																																								' +
                            '\n{l3|早癌数}   {l4|血检数}																																								' +
                            '\n{l5|0.1%}																																								' +
                            ' \n'
                        ].join('\n'),
                        position: 'end',
                        distance: 20,
                        rich: {

                            Province: {
                                align: 'left',
                                padding: [8, 0, 30, 0],
                                fontSize: 20,
                                fontFamily: 'myFourthFont',
                            },
                            l1: {
                                align: 'center',
                                //verticalAlign:'middle',
                                // backgroundColor: '#F86A3E',
                                backgroundColor: 'rgba(248,106,62,0.6)',
                                color: '#fff',
                                padding: [0, 0, 5, 0],
                                fontSize: 32,
                                width: 50,
                                height: 30,

                                borderWidth: 1,
                                borderColor: 'rgba(248,106,62,0.1)',
                                fontFamily: 'myFirstFont',
                            },
                            l2: {
                                align: 'center',
                                //verticalAlign:'bottom',
                                //backgroundColor: '#F41485',
                                backgroundColor: 'rgba(244,20,133,0.6)',
                                color: '#fff',
                                //borderWidth: 1,
                                padding: [0, 0, 5, 0],
                                fontSize: 32,
                                width: 75,
                                height: 30,

                                borderWidth: 1,
                                borderColor: 'rgba(244,20,133,0.1)',
                                fontFamily: 'myFirstFont',
                            },
                            l3: {
                                align: 'center',
                                backgroundColor: 'rgba(248,106,62,0.6)',
                                color: '#fff',
                                //borderRadius: 15,
                                padding: [5, 0, 0, 0],
                                fontSize: 12,
                                width: 50,
                                height: 16,

                                borderWidth: 1,
                                borderColor: 'rgba(248,106,62,0.1)',
                                fontFamily: 'myFourthFont',
                            },

                            l4: {
                                align: 'center',
                                backgroundColor: 'rgba(244,20,133,0.6)',
                                color: '#fff',
                                //borderRadius: 15,
                                padding: [5, 0, 0, 0],
                                fontSize: 12,
                                width: 75,
                                height: 16,

                                borderWidth: 1,
                                borderColor: 'rgba(244,20,133,0.1)',
                                fontFamily: 'myFourthFont',
                            },
                            l5: {
                                align: 'left',

                                color: '#fff',
                                padding: [53, 0, 18, 10],
                                // padding: 5 ,
                                //lineHeight:1,
                                fontSize: 50, //height: 66,
                                fontFamily: 'myFirstFont',
                            },
                        }
                    }
                },
                coord: [118.767413, 32.041544]
            },

            {
                name: "江苏省",
                coord: [95.984722, 45.756539]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [95.984722, 45.756539]
                },
                {

                    symbol: 'none',
                    coord: [77.984722, 45.756539]
                }
            ],
            [{
                value: [0, 309],
                name: "上海",
                label: {

                    normal: {
                        formatter: [
                            '{Province|上海}' +
                            '\n{l1|1}   {l2|339}																																								' +
                            '\n{l3|早癌数}   {l4|血检数}																																								' +
                            '\n{l5|0.2%}																																								' +
                            ' \n'
                        ].join('\n'),
                        position: 'end',
                        distance: 20,
                        rich: {
                            Province: {
                                align: 'left',
                                padding: [8, 0, 30, 0],
                                fontSize: 20,
                                fontFamily: 'myFourthFont',
                            },
                            l1: {
                                align: 'center',
                                //verticalAlign:'middle',
                                // backgroundColor: '#F86A3E',
                                backgroundColor: 'rgba(248,106,62,0.6)',
                                color: '#fff',
                                padding: [0, 0, 5, 0],
                                fontSize: 32,
                                width: 50,
                                height: 30,

                                borderWidth: 1,
                                borderColor: 'rgba(248,106,62,0.1)',
                                fontFamily: 'myFirstFont',
                            },
                            l2: {
                                align: 'center',
                                //verticalAlign:'bottom',
                                //backgroundColor: '#F41485',
                                backgroundColor: 'rgba(244,20,133,0.6)',
                                color: '#fff',
                                //borderWidth: 1,
                                padding: [0, 0, 5, 0],
                                fontSize: 32,
                                width: 54,
                                height: 30,

                                borderWidth: 1,
                                borderColor: 'rgba(244,20,133,0.1)',
                                fontFamily: 'myFirstFont',
                            },
                            l3: {
                                align: 'center',
                                backgroundColor: 'rgba(248,106,62,0.6)',
                                color: '#fff',
                                //borderRadius: 15,
                                padding: [5, 0, 0, 0],
                                fontSize: 12,
                                width: 50,
                                height: 16,

                                borderWidth: 1,
                                borderColor: 'rgba(248,106,62,0.1)',
                                fontFamily: 'myFirstFont',
                            },

                            l4: {
                                align: 'center',
                                backgroundColor: 'rgba(244,20,133,0.6)',
                                color: '#fff',
                                //borderRadius: 15,
                                padding: [5, 0, 0, 0],
                                fontSize: 12,
                                width: 54,
                                height: 16,

                                borderWidth: 1,
                                borderColor: 'rgba(244,20,133,0.1)',
                                fontFamily: 'myFirstFont',
                            },
                            l5: {
                                align: 'left',

                                color: '#fff',
                                padding: [59, 0, 18, 0],
                                // padding: 5 ,
                                fontSize: 50,
                                fontFamily: 'myFirstFont',
                            },
                        }
                    }
                },
                coord: [121.472644, 31.231706]
            },

            {
                name: "上海",
                coord: [136.472644, 31.231706]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [136.472644, 31.231706]
                },
                {

                    symbol: 'none',
                    coord: [151.472644, 31.231706]
                }
            ]


        ],
        animation: false
    }
};



var series3 = {
    name: '广东',
    type: 'map',
    zoom: 0.7,
    top: '15%',
    mapType: 'china',
    clickable: false,
    label: {
        normal: {
            show: false
        },
        emphasis: {
            show: false
        }
    },
    itemStyle: {

        normal: {
            areaColor: '#5f3776',
            borderColor: '#643d7a',
            borderWidth: 1,
            //shadowColor:'rgba(121, 59, 136, 0.3)',          //阴影颜色
            // shadowOffsetX:10,            //阴影水平方向上的偏移距离。
            // shadowOffsetY:8,            //阴影垂直方向上的偏移距离
            // shadowBlur:2, 

        },
        emphasis: {
            areaColor: '#c19fd2'
        }
    },
    data: [{
        name: '江苏',
        selected: true

    },
    {
        name: '上海',
        selected: true

    },
    {
        name: '广东',
        selected: true

    }
    ],

    markLine: {
        symbol: ['image://spot.png', 'none'],
        silent: true,
        symbolSize: 20,
        itemStyle: {
            normal: {
                color: 'black',
                lineStyle: {
                    type: 'solid',
                    width: 1,
                    color: '#fff',
                    //shadowColor: 'rgba(255,255,255,1.0)',
                    //shadowBlur: 5,
                    //shadowOffsetX: 30,
                    //shadowOffsetY: 30,
                },
            }
        },
        data: [

            [{
                value: [4, 5734],
                name: "江苏省",
                label: {

                    normal: {
                        formatter: [
                            '{Province|江苏}' +
                            '\n{l1|' + map1.num1 + '}   {l2|' + map1.num2 + '}																																								' +
                            '\n{l3|早癌数}   {l4|血检数}																																								' +
                            '\n{l5|0.1%}																																								' +
                            ' \n'
                        ].join('\n'),
                        position: 'end',
                        distance: 20,
                        rich: {
                            block: {
                                height: 50,
                            },
                            Province: {
                                align: 'left',
                                padding: [8, 0, 30, 0],
                                fontSize: 20,
                                fontFamily: 'myFourthFont',
                            },
                            l1: {
                                align: 'center',
                                //verticalAlign:'middle',
                                // backgroundColor: '#F86A3E',
                                backgroundColor: 'rgba(248,106,62,0.6)',
                                color: '#fff',
                                padding: [0, 0, 5, 0],
                                fontSize: 32,
                                width: 50,
                                height: 30,

                                borderWidth: 1,
                                borderColor: 'rgba(248,106,62,0.1)',
                                fontFamily: 'myFirstFont',
                            },
                            l2: {
                                align: 'center',
                                //verticalAlign:'bottom',
                                //backgroundColor: '#F41485',
                                backgroundColor: 'rgba(244,20,133,0.6)',
                                color: '#fff',
                                //borderWidth: 1,
                                padding: [0, 0, 5, 0],
                                fontSize: 32,
                                width: 75,
                                height: 30,

                                borderWidth: 1,
                                borderColor: 'rgba(244,20,133,0.1)',
                                fontFamily: 'myFirstFont',
                            },
                            l3: {
                                align: 'center',
                                backgroundColor: 'rgba(248,106,62,0.6)',
                                color: '#fff',
                                //borderRadius: 15,
                                padding: [5, 0, 0, 0],
                                fontSize: 12,
                                width: 50,
                                height: 16,

                                borderWidth: 1,
                                borderColor: 'rgba(248,106,62,0.1)',
                                fontFamily: 'myFourthFont',
                            },

                            l4: {
                                align: 'center',
                                backgroundColor: 'rgba(244,20,133,0.6)',
                                color: '#fff',
                                //borderRadius: 15,
                                padding: [5, 0, 0, 0],
                                fontSize: 12,
                                width: 75,
                                height: 16,

                                borderWidth: 1,
                                borderColor: 'rgba(244,20,133,0.1)',
                                fontFamily: 'myFourthFont',
                            },
                            l5: {
                                align: 'left',

                                color: '#fff',
                                padding: [53, 0, 18, 10],
                                // padding: 5 ,
                                //lineHeight:1,
                                fontSize: 50, //height: 66,
                                fontFamily: 'myFirstFont',
                            },
                        }
                    }
                },
                coord: [118.767413, 32.041544]
            },

            {
                name: "江苏省",
                coord: [95.984722, 45.756539]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [95.984722, 45.756539]
                },
                {

                    symbol: 'none',
                    coord: [77.984722, 45.756539]
                }
            ],
            [{
                value: [0, 309],
                name: "上海",
                label: {

                    normal: {
                        formatter: [
                            '{Province|上海}' +
                            '\n{l1|1}   {l2|339}																																								' +
                            '\n{l3|早癌数}   {l4|血检数}																																								' +
                            '\n{l5|0.2%}																																								' +
                            ' \n'
                        ].join('\n'),
                        position: 'end',
                        distance: 20,
                        rich: {
                            Province: {
                                align: 'left',
                                padding: [8, 0, 30, 0],
                                fontSize: 20,
                                fontFamily: 'myFourthFont',
                            },
                            l1: {
                                align: 'center',
                                //verticalAlign:'middle',
                                // backgroundColor: '#F86A3E',
                                backgroundColor: 'rgba(248,106,62,0.6)',
                                color: '#fff',
                                padding: [0, 0, 5, 0],
                                fontSize: 32,
                                width: 50,
                                height: 30,

                                borderWidth: 1,
                                borderColor: 'rgba(248,106,62,0.1)',
                                fontFamily: 'myFirstFont',
                            },
                            l2: {
                                align: 'center',
                                //verticalAlign:'bottom',
                                //backgroundColor: '#F41485',
                                backgroundColor: 'rgba(244,20,133,0.6)',
                                color: '#fff',
                                //borderWidth: 1,
                                padding: [0, 0, 5, 0],
                                fontSize: 32,
                                width: 54,
                                height: 30,

                                borderWidth: 1,
                                borderColor: 'rgba(244,20,133,0.1)',
                                fontFamily: 'myFirstFont',
                            },
                            l3: {
                                align: 'center',
                                backgroundColor: 'rgba(248,106,62,0.6)',
                                color: '#fff',
                                //borderRadius: 15,
                                padding: [5, 0, 0, 0],
                                fontSize: 12,
                                width: 50,
                                height: 16,

                                borderWidth: 1,
                                borderColor: 'rgba(248,106,62,0.1)',
                                fontFamily: 'myFourthFont',
                            },

                            l4: {
                                align: 'center',
                                backgroundColor: 'rgba(244,20,133,0.6)',
                                color: '#fff',
                                //borderRadius: 15,
                                padding: [5, 0, 0, 0],
                                fontSize: 12,
                                width: 54,
                                height: 16,

                                borderWidth: 1,
                                borderColor: 'rgba(244,20,133,0.1)',
                                fontFamily: 'myFourthFont',
                            },
                            l5: {
                                align: 'left',

                                color: '#fff',
                                padding: [59, 0, 18, 0],
                                // padding: 5 ,
                                fontSize: 50,
                                fontFamily: 'myFirstFont',
                            },
                        }
                    }
                },
                coord: [121.472644, 31.231706]
            },

            {
                name: "上海",
                coord: [136.472644, 31.231706]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [136.472644, 31.231706]
                },
                {

                    symbol: 'none',
                    coord: [151.472644, 31.231706]
                }
            ],
            [{
                value: [0, 309],
                name: "广东省",
                label: {

                    normal: {
                        formatter: [
                            '{Province|广东}' +
                            '\n{l1|0}   {l2|300}																																								' +
                            '\n{l3|早癌数}   {l4|血检数}																																								' +
                            '\n{l5|0%}																																								' +
                            ' \n'
                        ].join('\n'),

                        position: 'end',
                        distance: 20,
                        rich: {
                            Province: {
                                align: 'left',
                                padding: [8, 0, 30, 0],
                                fontSize: 20,
                                fontFamily: 'myFourthFont',
                            },
                            l1: {
                                align: 'center',
                                //verticalAlign:'middle',
                                // backgroundColor: '#F86A3E',
                                backgroundColor: 'rgba(248,106,62,0.6)',
                                color: '#fff',
                                padding: [0, 0, 5, 0],
                                fontSize: 32,
                                width: 50,
                                height: 30,

                                borderWidth: 1,
                                borderColor: 'rgba(248,106,62,0.1)',
                                fontFamily: 'myFirstFont',
                            },
                            l2: {
                                align: 'center',
                                //verticalAlign:'bottom',
                                //backgroundColor: '#F41485',
                                backgroundColor: 'rgba(244,20,133,0.6)',
                                color: '#fff',
                                //borderWidth: 1,
                                padding: [0, 0, 5, 0],
                                fontSize: 32,
                                width: 54,
                                height: 30,

                                borderWidth: 1,
                                borderColor: 'rgba(244,20,133,0.1)',
                                fontFamily: 'myFirstFont',
                            },
                            l3: {
                                align: 'center',
                                backgroundColor: 'rgba(248,106,62,0.6)',
                                color: '#fff',
                                //borderRadius: 15,
                                padding: [5, 0, 0, 0],
                                fontSize: 12,
                                width: 50,
                                height: 16,
                                lineHeight: 16,

                                borderWidth: 1,
                                borderColor: 'rgba(248,106,62,0.1)',
                                fontFamily: 'myFourthFont',
                            },

                            l4: {
                                align: 'center',
                                backgroundColor: 'rgba(244,20,133,0.6)',
                                color: '#fff',
                                //borderRadius: 15,
                                padding: [5, 0, 0, 0],
                                fontSize: 12,
                                width: 54,
                                height: 16,

                                borderWidth: 1,
                                borderColor: 'rgba(244,20,133,0.1)',
                                fontFamily: 'myFourthFont',
                            },
                            l5: {
                                align: 'left',

                                color: '#fff',
                                padding: [55, 0, 8, 0],
                                // padding: 5 ,
                                fontSize: 50,
                                height: 66,
                                fontFamily: 'myFirstFont',
                            },
                        }
                    }
                },
                coord: [113.280637, 23.125178]
            },

            {
                name: "广东省",
                coord: [130.280637, 17.125178]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [130.280637, 17.125178]
                },
                {

                    symbol: 'none',
                    coord: [145.280637, 17.125178]
                }
            ]


        ],
        animation: false
    }
};



var series4 = {
    name: '重庆',
    type: 'map',
    zoom: 0.7,
    top: '15%',
    mapType: 'china',
    clickable: false,
    label: {
        normal: {
            show: false
        },
        emphasis: {
            show: false
        }
    },
    itemStyle: {

        normal: {
            areaColor: '#5f3776',
            borderColor: '#643d7a',
            borderWidth: 1,
            //shadowColor:'rgba(121, 59, 136, 0.3)',          //阴影颜色
            // shadowOffsetX:10,            //阴影水平方向上的偏移距离。
            // shadowOffsetY:8,            //阴影垂直方向上的偏移距离
            // shadowBlur:2, 

        },
        emphasis: {
            areaColor: '#c19fd2'
        }
    },
    data: [{
        name: '江苏',
        selected: true

    },
    {
        name: '上海',
        selected: true

    },
    {
        name: '广东',
        selected: true

    },
    {
        name: '重庆',
        selected: true

    }
    ],

    markLine: {
        symbol: ['image://spot.png', 'none'],
        silent: true,
        symbolSize: 20,
        itemStyle: {
            normal: {
                color: 'black',
                lineStyle: {
                    type: 'solid',
                    width: 1,
                    color: '#fff',
                    //shadowColor: 'rgba(255,255,255,1.0)',
                    //shadowBlur: 5,
                    //shadowOffsetX: 30,
                    //shadowOffsetY: 30,
                },
            }
        },
        data: [

            [{
                value: [4, 5734],
                name: "江苏省",
                label: {

                    normal: {
                        formatter: [
                            '{Province|江苏}' +
                            '\n{l1|' + map1.num1 + '}   {l2|' + map1.num2 + '}																																								' +
                            '\n{l3|早癌数}   {l4|血检数}																																								' +
                            '\n{l5|0.1%}																																								' +
                            ' \n'
                        ].join('\n'),
                        position: 'end',
                        distance: 20,
                        rich: {
                            block: {
                                height: 50,
                            },
                            Province: {
                                align: 'left',
                                padding: [8, 0, 30, 0],
                                fontSize: 20,
                                fontFamily: 'myFourthFont',
                            },
                            l1: {
                                align: 'center',
                                //verticalAlign:'middle',
                                // backgroundColor: '#F86A3E',
                                backgroundColor: 'rgba(248,106,62,0.6)',
                                color: '#fff',
                                padding: [0, 0, 5, 0],
                                fontSize: 32,
                                width: 50,
                                height: 30,

                                borderWidth: 1,
                                borderColor: 'rgba(248,106,62,0.1)',
                                fontFamily: 'myFirstFont',
                            },
                            l2: {
                                align: 'center',
                                //verticalAlign:'bottom',
                                //backgroundColor: '#F41485',
                                backgroundColor: 'rgba(244,20,133,0.6)',
                                color: '#fff',
                                //borderWidth: 1,
                                padding: [0, 0, 5, 0],
                                fontSize: 32,
                                width: 75,
                                height: 30,

                                borderWidth: 1,
                                borderColor: 'rgba(244,20,133,0.1)',
                                fontFamily: 'myFirstFont',
                            },
                            l3: {
                                align: 'center',
                                backgroundColor: 'rgba(248,106,62,0.6)',
                                color: '#fff',
                                //borderRadius: 15,
                                padding: [5, 0, 0, 0],
                                fontSize: 12,
                                width: 50,
                                height: 16,

                                borderWidth: 1,
                                borderColor: 'rgba(248,106,62,0.1)',
                                fontFamily: 'myFourthFont',
                            },

                            l4: {
                                align: 'center',
                                backgroundColor: 'rgba(244,20,133,0.6)',
                                color: '#fff',
                                //borderRadius: 15,
                                padding: [5, 0, 0, 0],
                                fontSize: 12,
                                width: 75,
                                height: 16,

                                borderWidth: 1,
                                borderColor: 'rgba(244,20,133,0.1)',
                                fontFamily: 'myFourthFont',
                            },
                            l5: {
                                align: 'left',

                                color: '#fff',
                                padding: [53, 0, 18, 10],
                                // padding: 5 ,
                                //lineHeight:1,
                                fontSize: 50, //height: 66,
                                fontFamily: 'myFirstFont',
                            },
                        }
                    }
                },
                coord: [118.767413, 32.041544]
            },

            {
                name: "江苏省",
                coord: [95.984722, 45.756539]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [95.984722, 45.756539]
                },
                {

                    symbol: 'none',
                    coord: [77.984722, 45.756539]
                }
            ],
            [{
                value: [0, 309],
                name: "上海",
                label: {

                    normal: {
                        formatter: [
                            '{Province|上海}' +
                            '\n{l1|1}   {l2|339}																																								' +
                            '\n{l3|早癌数}   {l4|血检数}																																								' +
                            '\n{l5|0.2%}																																								' +
                            ' \n'
                        ].join('\n'),
                        position: 'end',
                        distance: 20,
                        rich: {
                            Province: {
                                align: 'left',
                                padding: [8, 0, 30, 0],
                                fontSize: 20,
                                fontFamily: 'myFourthFont',
                            },
                            l1: {
                                align: 'center',
                                //verticalAlign:'middle',
                                // backgroundColor: '#F86A3E',
                                backgroundColor: 'rgba(248,106,62,0.6)',
                                color: '#fff',
                                padding: [0, 0, 5, 0],
                                fontSize: 32,
                                width: 50,
                                height: 30,

                                borderWidth: 1,
                                borderColor: 'rgba(248,106,62,0.1)',
                                fontFamily: 'myFirstFont',
                            },
                            l2: {
                                align: 'center',
                                //verticalAlign:'bottom',
                                //backgroundColor: '#F41485',
                                backgroundColor: 'rgba(244,20,133,0.6)',
                                color: '#fff',
                                //borderWidth: 1,
                                padding: [0, 0, 5, 0],
                                fontSize: 32,
                                width: 54,
                                height: 30,

                                borderWidth: 1,
                                borderColor: 'rgba(244,20,133,0.1)',
                                fontFamily: 'myFirstFont',
                            },
                            l3: {
                                align: 'center',
                                backgroundColor: 'rgba(248,106,62,0.6)',
                                color: '#fff',
                                //borderRadius: 15,
                                padding: [5, 0, 0, 0],
                                fontSize: 12,
                                width: 50,
                                height: 16,

                                borderWidth: 1,
                                borderColor: 'rgba(248,106,62,0.1)',
                                fontFamily: 'myFourthFont',
                            },

                            l4: {
                                align: 'center',
                                backgroundColor: 'rgba(244,20,133,0.6)',
                                color: '#fff',
                                //borderRadius: 15,
                                padding: [5, 0, 0, 0],
                                fontSize: 12,
                                width: 54,
                                height: 16,

                                borderWidth: 1,
                                borderColor: 'rgba(244,20,133,0.1)',
                                fontFamily: 'myFourthFont',
                            },
                            l5: {
                                align: 'left',

                                color: '#fff',
                                padding: [59, 0, 18, 0],
                                // padding: 5 ,
                                fontSize: 50,
                                fontFamily: 'myFirstFont',
                            },
                        }
                    }
                },
                coord: [121.472644, 31.231706]
            },

            {
                name: "上海",
                coord: [136.472644, 31.231706]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [136.472644, 31.231706]
                },
                {

                    symbol: 'none',
                    coord: [151.472644, 31.231706]
                }
            ],
            [{
                value: [0, 309],
                name: "广东省",
                label: {

                    normal: {
                        formatter: [
                            '{Province|广东}' +
                            '\n{l1|0}   {l2|300}																																								' +
                            '\n{l3|早癌数}   {l4|血检数}																																								' +
                            '\n{l5|0%}																																								' +
                            ' \n'
                        ].join('\n'),

                        position: 'end',
                        distance: 20,
                        rich: {
                            Province: {
                                align: 'left',
                                padding: [8, 0, 30, 0],
                                fontSize: 20,
                                fontFamily: 'myFourthFont',
                            },
                            l1: {
                                align: 'center',
                                //verticalAlign:'middle',
                                // backgroundColor: '#F86A3E',
                                backgroundColor: 'rgba(248,106,62,0.6)',
                                color: '#fff',
                                padding: [0, 0, 5, 0],
                                fontSize: 32,
                                width: 50,
                                height: 30,

                                borderWidth: 1,
                                borderColor: 'rgba(248,106,62,0.1)',
                                fontFamily: 'myFirstFont',
                            },
                            l2: {
                                align: 'center',
                                //verticalAlign:'bottom',
                                //backgroundColor: '#F41485',
                                backgroundColor: 'rgba(244,20,133,0.6)',
                                color: '#fff',
                                //borderWidth: 1,
                                padding: [0, 0, 5, 0],
                                fontSize: 32,
                                width: 54,
                                height: 30,

                                borderWidth: 1,
                                borderColor: 'rgba(244,20,133,0.1)',
                                fontFamily: 'myFirstFont',
                            },
                            l3: {
                                align: 'center',
                                backgroundColor: 'rgba(248,106,62,0.6)',
                                color: '#fff',
                                //borderRadius: 15,
                                padding: [5, 0, 0, 0],
                                fontSize: 12,
                                width: 50,
                                height: 16,
                                lineHeight: 16,

                                borderWidth: 1,
                                borderColor: 'rgba(248,106,62,0.1)',
                                fontFamily: 'myFourthFont',
                            },

                            l4: {
                                align: 'center',
                                backgroundColor: 'rgba(244,20,133,0.6)',
                                color: '#fff',
                                //borderRadius: 15,
                                padding: [5, 0, 0, 0],
                                fontSize: 12,
                                width: 54,
                                height: 16,

                                borderWidth: 1,
                                borderColor: 'rgba(244,20,133,0.1)',
                                fontFamily: 'myFourthFont',
                            },
                            l5: {
                                align: 'left',

                                color: '#fff',
                                padding: [55, 0, 8, 0],
                                // padding: 5 ,
                                fontSize: 50,
                                height: 66,
                                fontFamily: 'myFirstFont',
                            },
                        }
                    }
                },
                coord: [113.280637, 23.125178]
            },

            {
                name: "广东省",
                coord: [130.280637, 17.125178]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [130.280637, 17.125178]
                },
                {

                    symbol: 'none',
                    coord: [145.280637, 17.125178]
                }
            ],
            [{
                value: [0, 15],
                name: "重庆",
                label: {

                    normal: {
                        formatter: [
                            '{Province|重庆}\n{l1|0}   {l2|15}\n{l3|早癌数}   {l4|血检数}\n{l5|0%}\n'
                        ].join('\n'),
                        padding: [-130, 0, 0, -130],
                        position: 'end',
                        distance: 20,
                        rich: {

                            Province: {
                                align: 'left',
                                padding: [8, 0, 30, 0],
                                fontSize: 20,
                                fontFamily: 'myFourthFont',
                            },
                            l1: {
                                align: 'center',
                                //verticalAlign:'middle',
                                // backgroundColor: '#F86A3E',
                                backgroundColor: 'rgba(248,106,62,0.6)',
                                color: '#fff',
                                padding: [0, 0, 5, 0],
                                fontSize: 32,
                                width: 50,
                                height: 30,

                                borderWidth: 1,
                                borderColor: 'rgba(248,106,62,0.1)',
                                fontFamily: 'myFirstFont',
                            },
                            l2: {
                                align: 'center',
                                //verticalAlign:'bottom',
                                //backgroundColor: '#F41485',
                                backgroundColor: 'rgba(244,20,133,0.6)',
                                color: '#fff',
                                //borderWidth: 1,
                                padding: [0, 0, 5, 0],
                                fontSize: 32,
                                width: 54,
                                height: 30,

                                borderWidth: 1,
                                borderColor: 'rgba(244,20,133,0.1)',
                                fontFamily: 'myFirstFont',
                            },
                            l3: {
                                align: 'center',
                                backgroundColor: 'rgba(248,106,62,0.6)',
                                color: '#fff',
                                //borderRadius: 15,
                                padding: [5, 0, 0, 0],
                                fontSize: 12,
                                width: 50,
                                height: 16,
                                lineHeight: 16,

                                borderWidth: 1,
                                borderColor: 'rgba(248,106,62,0.1)',
                                fontFamily: 'myFourthFont',
                            },

                            l4: {
                                align: 'center',
                                backgroundColor: 'rgba(244,20,133,0.6)',
                                color: '#fff',
                                //borderRadius: 15,
                                padding: [5, 0, 0, 0],
                                fontSize: 12,
                                width: 54,
                                height: 16,

                                borderWidth: 1,
                                borderColor: 'rgba(244,20,133,0.1)',
                                fontFamily: 'myFourthFont',
                            },
                            l5: {
                                align: 'left',

                                color: '#fff',
                                padding: [55, 0, 8, 0],
                                // padding: 5 ,
                                fontSize: 50,
                                height: 66,
                                fontFamily: 'myFirstFont',
                            },
                        }
                    }
                },
                coord: [106.545042, 29.656263]
            },

            {
                name: "重庆",
                coord: [97.71434, 19.304255]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [97.71434, 19.304255]
                },
                {

                    symbol: 'none',
                    coord: [82.71434, 19.304255]
                }
            ]
        ],
        animation: false
    }
};

var sequence = {};
sequence['江苏'] = series1;
sequence['上海'] = series2;
sequence['广东'] = series3;
sequence['重庆'] = series4;


var pointData = [{
    province: '江苏'
},
{
    province: '上海'
},
{
    province: '广东'
},
{
    province: '重庆'
}

];

function handle() {
    let pramAry = Array.prototype.slice.apply(arguments)
    for (let i = 0, len = pramAry.length; i < len; i++) {
        everyHandle(pramAry[i])
    }

}

function everyHandle(obj) {
    let len = obj.markLine.data.length
    for (let i = 0; i < len; i++) {
        if (i % 2 == 1) {
            let sublen = obj.markLine.data[i].length
            // obj.markLine.data[i][sublen - 1].coord-=10
        }
    }
}
handle(series1, series2, series3, series4)
