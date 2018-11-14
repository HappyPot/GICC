let map1 = {
    // 江苏省
    num1: 8,//早癌数
    num2: 8249//血检数
}
let map2 = {
    // 上海省
    num1: 3,//早癌数
    num2: 564//血检数
}
let map3 = {
    // 广东省
    num1: 3,//早癌数
    num2: 1317//血检数
}
let map4 = {
    // 重庆省
    num1: 0,//早癌数
    num2: 28//血检数
}
let map5 = {
    // 宁夏
    num1: 0,//早癌数
    num2: 431//血检数
}
let map6 = {
    // 福建
    num1: 0,//早癌数
    num2: 52//血检数
}
let map7 = {
    // 河南
    num1: 0,//早癌数
    num2: 5//血检数
}
let map8 = {
    // 四川
    num1: 0,//早癌数
    num2: 33//血检数
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
                coord: [95.984722, 49.756539]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [95.984722, 49.756539]
                },
                {

                    symbol: 'none',
                    coord: [77.984722, 49.756539]
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
                coord: [95.984722, 49.756539]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [95.984722, 49.756539]
                },
                {

                    symbol: 'none',
                    coord: [77.984722, 49.756539]
                }
            ],
            [{
                value: [0, 309],
                name: "上海",
                label: {

                    normal: {
                        formatter: [
                            '{Province|上海}' +
                            '\n{l1|' + map2.num1 + '}   {l2|' + map2.num2 + '}																																								' +
                            '\n{l3|早癌数}   {l4|血检数}																																								' +
                            '\n{l5|0.4%}																																								' +
                            ' \n'
                        ].join('\n'),
                        padding: [0, 10, -130, 280],
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
                                fontFamily: 'myFirstFont',
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
                coord: [126.472644, 50.231706]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [126.472644, 50.231706]
                },
                {

                    symbol: 'none',
                    coord: [141.472644, 50.231706]
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
                coord: [95.984722, 49.756539]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [95.984722, 49.756539]
                },
                {

                    symbol: 'none',
                    coord: [77.984722, 49.756539]
                }
            ],
            [{
                value: [0, 309],
                name: "上海",
                label: {

                    normal: {
                        formatter: [
                            '{Province|上海}' +
                            '\n{l1|' + map2.num1 + '}   {l2|' + map2.num2 + '}																																								' +
                            '\n{l3|早癌数}   {l4|血检数}																																								' +
                            '\n{l5|0.4%}																																								' +
                            ' \n'
                        ].join('\n'),
                        padding: [0, 10, -130, 280],
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
                coord: [126.472644, 50.231706]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [126.472644, 50.231706]
                },
                {

                    symbol: 'none',
                    coord: [141.472644, 50.231706]
                }
            ],
            [{
                value: [0, 309],
                name: "广东省",
                label: {

                    normal: {
                        formatter: [
                            '{Province|广东}' +
                            '\n{l1|' + map3.num1 + '}   {l2|' + map3.num2 + '}																																								' +
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
                                width: 75,
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
                coord: [95.984722, 49.756539]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [95.984722, 49.756539]
                },
                {

                    symbol: 'none',
                    coord: [77.984722, 49.756539]
                }
            ],
            [{
                value: [0, 309],
                name: "上海",
                label: {

                    normal: {
                        formatter: [
                            '{Province|上海}' +
                            '\n{l1|' + map2.num1 + '}   {l2|' + map2.num2 + '}																																								' +
                            '\n{l3|早癌数}   {l4|血检数}																																								' +
                            '\n{l5|0.4%}																																								' +
                            ' \n'
                        ].join('\n'),
                        padding: [0, 10, -130, 280],
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
                coord: [126.472644, 50.231706]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [126.472644, 50.231706]
                },
                {

                    symbol: 'none',
                    coord: [141.472644, 50.231706]
                }
            ],
            [{
                value: [0, 309],
                name: "广东省",
                label: {

                    normal: {
                        formatter: [
                            '{Province|广东}' +
                            '\n{l1|' + map3.num1 + '}   {l2|' + map3.num2 + '}																																								' +
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
                                width: 75,
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
                            '{Province|重庆}\n{l1|' + map4.num1 + '}   {l2|' + map4.num2 + '}\n{l3|早癌数}   {l4|血检数}\n{l5|0%}\n'
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
                                width: 75,
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
var series5 = {
    name: '宁夏',
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

    },
    {
        name: '宁夏',
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
                coord: [95.984722, 49.756539]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [95.984722, 49.756539]
                },
                {

                    symbol: 'none',
                    coord: [77.984722, 49.756539]
                }
            ],
            [{
                value: [0, 309],
                name: "上海",
                label: {

                    normal: {
                        formatter: [
                            '{Province|上海}' +
                            '\n{l1|' + map2.num1 + '}   {l2|' + map2.num2 + '}																																								' +
                            '\n{l3|早癌数}   {l4|血检数}																																								' +
                            '\n{l5|0.4%}																																								' +
                            ' \n'
                        ].join('\n'),
                        padding: [0, 10, -130, 280],
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
                coord: [126.472644, 50.231706]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [126.472644, 50.231706]
                },
                {

                    symbol: 'none',
                    coord: [141.472644, 50.231706]
                }
            ],
            [{
                value: [0, 309],
                name: "广东省",
                label: {

                    normal: {
                        formatter: [
                            '{Province|广东}' +
                            '\n{l1|' + map3.num1 + '}   {l2|' + map3.num2 + '}																																								' +
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
                                width: 75,
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
                            '{Province|重庆}\n{l1|' + map4.num1 + '}   {l2|' + map4.num2 + '}\n{l3|早癌数}   {l4|血检数}\n{l5|0%}\n'
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
                                width: 75,
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
            ],
            //@
            [{
                value: [0, 200],
                name: "宁夏",
                label: {
                    normal: {
                        formatter: [
                            '{Province|宁夏}\n{l1|' + map5.num1 + '}   {l2|' + map5.num2 + '}\n{l3|早癌数}   {l4|血检数}\n{l5|0%}\n'
                        ].join('\n'),
                        padding: [0, 0, 0, 0],
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
                                width:75,
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
                                width: 75,
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
                coord: [106.545042, 37.656263]
            },

            {
                name: "宁夏",
                coord: [80.71434, 33.304255]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [80.71434, 33.304255]
                },
                {

                    symbol: 'none',
                    coord: [65.71434, 33.304255]
                }
            ],
        ],
        animation: false
    }
};
var series6 = {
    name: '福建',
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

    },
    {
        name: '宁夏',
        selected: true

    },
    {
        name: '福建',
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
                coord: [95.984722, 49.756539]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [95.984722, 49.756539]
                },
                {

                    symbol: 'none',
                    coord: [77.984722, 49.756539]
                }
            ],
            [{
                value: [0, 309],
                name: "上海",
                label: {

                    normal: {
                        formatter: [
                            '{Province|上海}' +
                            '\n{l1|' + map2.num1 + '}   {l2|' + map2.num2 + '}																																								' +
                            '\n{l3|早癌数}   {l4|血检数}																																								' +
                            '\n{l5|0.4%}																																								' +
                            ' \n'
                        ].join('\n'),
                        padding: [0, 10, -130, 280],
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
                                width:75,
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
                coord: [126.472644, 50.231706]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [126.472644, 50.231706]
                },
                {

                    symbol: 'none',
                    coord: [141.472644, 50.231706]
                }
            ],
            [{
                value: [0, 309],
                name: "广东省",
                label: {

                    normal: {
                        formatter: [
                            '{Province|广东}' +
                            '\n{l1|' + map3.num1 + '}   {l2|' + map3.num2 + '}																																								' +
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
                                width: 75,
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
                            '{Province|重庆}\n{l1|' + map4.num1 + '}   {l2|' + map4.num2 + '}\n{l3|早癌数}   {l4|血检数}\n{l5|0%}\n'
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
                                width: 75,
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
            ],
            //@
            [{
                value: [0, 200],
                name: "宁夏",
                label: {
                    normal: {
                        formatter: [
                            '{Province|宁夏}\n{l1|' + map5.num1 + '}   {l2|' + map5.num2 + '}\n{l3|早癌数}   {l4|血检数}\n{l5|0%}\n'
                        ].join('\n'),
                        padding: [0, 0, 0, 0],
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
                                width: 75,
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
                coord: [106.545042, 37.656263]
            },

            {
                name: "宁夏",
                coord: [80.71434, 33.304255]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [80.71434, 33.304255]
                },
                {

                    symbol: 'none',
                    coord: [65.71434, 33.304255]
                }
            ],
            //福建
            [{
                value: [0, 240],
                name: "福建",
                label: {
                    normal: {
                        formatter: [
                            '{Province|福建}\n{l1|' + map6.num1 + '}   {l2|' + map6.num2 + '}\n{l3|早癌数}   {l4|血检数}\n{l5|0%}\n'
                        ].join('\n'),
                        padding: [0, 10, 0, 0],
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
                                width: 75,
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
                coord: [117.472644, 26.231706]
            },

            {
                name: "福建",
                coord: [140.472644, 33.231706]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [140.472644, 33.231706]
                },
                {

                    symbol: 'none',
                    coord: [155.472644, 33.231706]
                }
            ],
        ],
        animation: false
    }
};
var series7 = {
    name: '河南省',
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
        name: '河南',
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
                name: "河南省",
                padding: [8, 0, 30, 10],
                 label: {
                    normal: {
                        formatter: [
                            '{Province|河南}\n{l1|' + map7.num1 + '}   {l2|' + map7.num2 + '}\n{l3|早癌数}   {l4|血检数}\n{l5|0%}\n'
                        ].join('\n'),
                        padding: [0, 0, 0, 0],
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
                                width: 75,
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

                coord: [114.767413, 34.041544]
            },

            {
                name: "河南",
                coord: [80.71434, 49.304255]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [80.71434, 49.304255]
                },
                {

                    symbol: 'none',
                    coord: [65.71434, 49.304255]
                }
            ]


        ],
        animation: false
    }
};

var series8 = {
    name: '四川',
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
        name: '河南',
        selected: true

    },
    {
        name: '四川',
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
                name: "河南省",
                label: {
                    normal: {
                        formatter: [
                            '{Province|河南}\n{l1|' + map7.num1 + '}   {l2|' + map7.num2 + '}\n{l3|早癌数}   {l4|血检数}\n{l5|0%}\n'
                        ].join('\n'),
                        padding: [0, 0, 0, 0],
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
                                width: 75,
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

             coord: [114.767413, 34.041544]
            },

             {
                name: "河南",
                coord: [80.71434, 49.304255]
            }

            ],
            [

                {

                    symbol: 'none',
                    coord: [80.71434, 49.304255]
                },
                {

                    symbol: 'none',
                    coord: [65.71434, 49.304255]
                }
            ],
            [{
                value: [0, 309],
                name: "四川",
                 label: {

                    normal: {
                        formatter: [
                            '{Province|四川}\n{l1|' + map8.num1 + '}   {l2|' + map8.num2 + '}\n{l3|早癌数}   {l4|血检数}\n{l5|0%}\n'
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
                                width: 75,
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
                coord: [102.545042, 29.656263]
            },

            {
                name: "四川",
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
sequence['宁夏'] = series5;
sequence['福建'] = series6;
sequence['河南'] = series7;
sequence['四川'] = series8;


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
},
{
    province: '宁夏'
},
{
    province: '福建'
},
{
    province: '河南'
},
{
    province: '四川'
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
handle(series1, series2, series3, series4, series5, series6, series7, series8)
