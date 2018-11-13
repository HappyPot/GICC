
let mapp1 = {
    // 江苏
    sqnum: 24,
    allnum: 10
}//广东
let mapp2 = {
    sqnum: 31,
    allnum: 2
}
//湖北省
let mapp3 = {
    sqnum: 17,
    allnum: 0
}
// 山东省
let mapp4 = {
    sqnum: 8,
    allnum: 0
}
// 北京市

let mapp5 = {
    sqnum: 10,
    allnum: 0
}
// 重庆市

let mapp6 = {
    sqnum: 8,
    allnum: 1
}
// 上海市

let mapp7 = {
    sqnum: 6,
    allnum: 1
}
var series11 = {
    name: '1',
    type: 'map',
    zoom: 0.7,
    top: '13%',
    left: '30%',
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
    data: [
         {
             name: '江苏',
             selected: true

         },
         {
             name: '广东',
             selected: true

         },
         {
             name: '湖北',
             selected: true

         },
         {
             name: '山东',
             selected: true

         }

    ],

    markLine: {
        symbol: ['image://spot.png', 'none'],
        symbolSize: 20,
		silent:true,
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
                                           [
                   {
                       value: [17, 10],
                       name: "江苏省",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: [
							   '{Province|江苏}'
								+'\n{block10|}{l1|24}   {l2|16}																																								'
							   +'\n{block10|}{l4|申请数}   {l5|筛查数}																																								'
							   +'\n{l6|}																																								'
							   +' \n'].join('\n'),
							  // '{Province|江苏}\n{l1|17}   {l2|11}\n{l4|申请数}   {l5|筛查数}\n\n{l6|}'].join('\n'),

                               position: 'end',
                               distance: 20,
                               rich: {
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 0],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
								   block10:{padding: [0, 0, 0, 0],},
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [52, 0, 20, 0],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
                                       
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
                                       width: 50,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                
                                   l4: {
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
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       //borderRadius: 15,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                   },
                                  
                               }
                           }
                       },
                       coord: [118.767413, 32.041544]
                   },

                   {
                       name: "江苏省",
                       coord: [135.767413, 36.041544]
                   }

                                           ], [

                   {
                      
                       symbol: 'none',
                       coord: [135.767413, 36.041544]
                   },
                   {
                      
                       symbol: 'none',
                       coord: [150.767413, 36.041544]
                   }
                                           ],
			   //-------------------------------------------
			     [
                   {
                       value: [13, 2],
                       name: "广东省",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: [
							    '{Province|广东}'
								+'\n{block10|}{l1|34}   {l2|14}																																								'
							   +'\n{block10|}{l4|申请数}   {l5|筛查数}																																								'
							   +'\n{l6|}																																								'
							   +' \n'].join('\n'),
							   //'{Province|广东}\n{l1|11}   {l2|1}\n{l4|申请数}   {l5|筛查数}\n\n\n{l6|}'].join('\n'),

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
                                       width: 58,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                   l3: {

                                       align: 'center',
                                       backgroundColor: 'rgba(145,192,192,0.6)',
                                       color: '#fff',
                                       //borderWidth: 1,
                                       padding: [0, 0, 5, 0],
                                       fontSize: 32,
                                       width: 54,
                                       height: 30,
                                       borderWidth: 1,
                                       borderColor: 'rgba(145,192,192,0.1)',
                                       fontFamily: 'myFirstFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       borderRadius: 0,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 58,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                       //padding: [5, 13, 5, 13],
                                   },
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [57, 0, 23, 10],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
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

			     ], [

                   {
                      
                       symbol: 'none',
                       coord: [130.280637, 17.125178]
                   },
                   {
                      
                       symbol: 'none',
                       coord: [145.280637, 17.125178]
                   }
			     ],

                 //-------------------------------------------
			     [
                   {
                       value: [11, 0],
                       name: "湖北省",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: [
							   '{Province|湖北}'
								+'\n{block10|}{l1|17}   {l2|6}																																								'
							   +'\n{block10|}{l4|申请数}   {l5|筛查数}																																								'
							   +'\n{l6|}																																								'
							   +' \n'].join('\n'),
							   
							   //'{Province|湖北}\n{l1|11}   {l2|0}\n{l4|申请数}   {l5|筛查数}\n\n\n{l6|}'].join('\n'),

                               position: 'end',
                               distance: 20,
                                 rich: {
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 18],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
								   block10:{padding: [0, 0, 0, 18],},
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [53, 0, 28, 0],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
                                       
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
                                       width: 50,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                
                                   l4: {
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
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       //borderRadius: 15,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                   },
                                  
                               }
                           }
                       },
                       coord: [114.298572, 30.584355]
                   },

                   {
                       name: "湖北省",
                       coord: [98.773556, 20.682906]
                   }

			     ], [

                   {
                      
                       symbol: 'none',
                       coord: [98.773556, 20.682906]
                   },
                   {
                      
                       symbol: 'none',
                       coord: [83.62199, 20.682906]
                   }
			     ],

                   //-------------------------------------------
			     [
                   {
                       value: [8, 0],
                       name: "山东省",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: [
							   '{Province|山东}'
								+'\n{block10|}{l1|8}   {l2|2}																																								'
							   +'\n{block10|}{l4|申请数}   {l5|筛查数}																																								'
							   +'\n{l6|}																																								'
							   +' \n'].join('\n'),
							   
//							   '{Province|山东}\n{l1|8}   {l2|0}                                  \n{l4|申请数}   {l5|筛查数}                                  \n\n\n{l6|}'].join('\n'),

                               position: 'end',
                               distance: 20,
                               rich: {
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 18],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
								   block10:{padding: [0, 0, 0, 18],},
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [49, 0, 18, 0],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
                                       
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
                                       width: 50,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                
                                   l4: {
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
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       //borderRadius: 15,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                   },
                                  
                               }
                           }
                       },
                       coord: [117.000923, 36.675807]
                   },

                   {
                       name: "山东省",
                       coord: [101.158659, 50.249382]
                   }

			     ], [

                   {
                      
                       symbol: 'none',
                       coord: [101.158659, 50.249382]
                   },
                   {
                      
                       symbol: 'none',
                       coord: [86.158659, 50.249382]
                   }
			     ]


        ],
        animation: false
    }
};


var series21 = {
    name: '1',
    type: 'map',
    zoom: 0.7,
    top: '13%',
    left: '30%',
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
    data: [
         {
             name: '北京',
             selected: true

         },
         {
             name: '上海',
             selected: true

         },
         {
             name: '重庆',
             selected: true

         },
         {
             name: '新疆',
             selected: true

         },

    ],

    markLine: {
        symbol: ['image://spot.png', 'none'],
        symbolSize: 20,
		silent:true,
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
                 [
                   {
                       value: [7, 0],
                       name: "北京市",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: [
							   '{block100|}{Province|北京}'
							   +'\n{block200|}{l1|10}   {l2|2}'
							   +'\n{block200|}{l4|申请数}   {l5|筛查数}'
							   +'\n{block10|}'].join('\n'),
							   
//							   '{Province|北京}\n                                        {l1|6}   {l2|0}\n                                        {l4|申请数}   {l5|筛查数}\n'].join('\n'),

                               position: 'end',
                               distance: 20,
                               rich: {
                                        Province:{
										align:'left',
										padding:[8,50,30,0],
										fontSize: 20,
										fontFamily: 'myFourthFont',
										},
										   block100:{padding: [0, 80, 0, 0],},
								   block200:{padding: [0, 110, 0, 0],},
								   block10:{padding: [-5, 0, 0, 0],}, 
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
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       //borderRadius: 15,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16, lineHeight:16,

                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                   },

                                   l5: {
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
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                         padding:[55,0,8,0],
                                       // padding: 5 ,
                                       fontSize: 50, height: 66,
                                       fontFamily: 'myFirstFont',
                                   },
                               }
                           }
                       },
                       coord: [116.405285, 39.904989]
                   },

                   {
                       name: "北京市",
                       coord: [120.854377, 45.965333]
                   }

                    ], [

                   {
                      
                       symbol: 'none',
                       coord: [120.854377, 45.965333]
                   },
                   {
                      
                       symbol: 'none',
                       coord: [136.854377, 45.965333]
                   }
                 ],
			   //-------------------------------------------
			     [
                   {
                       value: [5, 1],
                       name: "上海市",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: [
							   '{block100|}{Province|上海}'
							   +'\n{block200|}{l1|7}   {l2|1}'
							   +'\n{block200|}{l4|申请数}   {l5|筛查数}'
							   +'\n{block10|}'].join('\n'),
							   
//							   '{Province|上海}\n{l1|5}   {l2|1}\n{l4|申请数}   {l5|筛查数}\n\n\n{l6|}'].join('\n'),

                               position: 'end',
                               distance: 20,
                                rich: {
                                        Province:{
										align:'left',
										padding:[8,50,30,0],
										fontSize: 20,
										fontFamily: 'myFourthFont',
										},
										   block100:{padding: [0, 0, 0, 0],},
								   block200:{padding: [0, 0, 0, 0],},
								   block10:{padding: [123, 0, 0, 0],}, 
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
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       //borderRadius: 15,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16, lineHeight:16,

                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                   },

                                   l5: {
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
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                         padding:[55,0,8,0],
                                       // padding: 5 ,
                                       fontSize: 50, height: 66,
                                       fontFamily: 'myFirstFont',
                                   },
                               }
                           }
                       },
                       coord: [121.472644, 31.231706]
                   },

                   {
                       name: "上海市",
                       coord: [136.472644, 31.231706]
                   }

			     ], [

                   {
                      
                       symbol: 'none',
                       coord: [136.472644, 31.231706]
                   },
                   {
                      
                       symbol: 'none',
                       coord: [151.472644, 31.231706]
                   }
			     ],

                 //-------------------------------------------
			     [
                   {
                       value: [6, 1],
                       name: "重庆市",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: [
							   '{block50|}{Province|重庆}'
							   +'\n{block100|}{l1|8}   {l2|2}'
							   +'\n{block100|}{l4|申请数}   {l5|筛查数}'
							   +'\n{l6|}'
							   +' \n'].join('\n'),
//							   '{Province|重庆}\n{l1|5}   {l2|0}\n{l4|申请数}   {l5|筛查数}\n\n\n{l6|}'].join('\n'),

                               position: 'end',
                               distance: 20,
                                rich: {
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 0],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
								   block50:{padding: [0,0, 0,320],},
								   block100:{ padding: [0,0, 0,400],},
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [61, 0, 18, 10],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
                                       fontFamily: 'myFirstFont',
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
                                       width: 58,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                   l3: {

                                       align: 'center',
                                       backgroundColor: 'rgba(145,192,192,0.6)',
                                       color: '#fff',
                                       //borderWidth: 1,
                                       padding: [0, 0, 5, 0],
                                       fontSize: 32,
                                       width: 54,
                                       height: 30,
                                       borderWidth: 1,
                                       borderColor: 'rgba(145,192,192,0.1)',
                                       fontFamily: 'myFirstFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       borderRadius: 0,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 58,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                       //padding: [5, 13, 5, 13],
                                   },
                                   
                               }
                           }
                       },
                       coord: [106.504962, 29.533155]
                   },

                   {
                       name: "重庆市",
                       coord: [86.596129, 22.73058]
                   }

			     ], [

                   {
                      
                       symbol: 'none',
                       coord: [86.596129, 22.73058]
                   },
                   {
                      
                       symbol: 'none',
                       coord: [71.596129, 22.73058]
                   }
			     ],

                   //-------------------------------------------
			     [
                   {
                       value: [4, 0],
                       name: "新疆",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: [
							   '{block50|}{Province|新疆}'
							   +'\n{block100|}{l1|4}   {l2|0}'
							   +'\n{block100|}{l4|申请数}   {l5|筛查数}'
							   +'\n{l6|}'
							   +' \n'].join('\n'),
							   
//							   '{Province|新疆}\n{l1|4}   {l2|0}\n{l4|申请数}   {l5|筛查数}\n\n\n{l6|}'].join('\n'),

                               position: 'end',
                               distance: 20,
                               rich: {
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 0],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
								   block50:{padding: [0,0, 0,320],},
								   block100:{ padding: [0,0, 0,400],},
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [53, 0, 18, 10],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
                                       fontFamily: 'myFirstFont',
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
                                       width: 58,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                   l3: {

                                       align: 'center',
                                       backgroundColor: 'rgba(145,192,192,0.6)',
                                       color: '#fff',
                                       //borderWidth: 1,
                                       padding: [0, 0, 5, 0],
                                       fontSize: 32,
                                       width: 54,
                                       height: 30,
                                       borderWidth: 1,
                                       borderColor: 'rgba(145,192,192,0.1)',
                                       fontFamily: 'myFirstFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       borderRadius: 0,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 58,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                       //padding: [5, 13, 5, 13],
                                   },
                                   
                               }
                           }
                       },
                       coord: [87.617733, 43.792818]
                   },

                   {
                       name: "新疆",
                       coord: [76.285513, 47.390485]
                   }

			     ], [

                   {
                      
                       symbol: 'none',
                       coord: [76.285513, 47.390485]
                   },
                   {
                      
                       symbol: 'none',
                       coord: [61.285513, 47.390485]
                   }
			     ]


        ],
        animation: false
    }
};






var series31 = {
    name: '1',
    type: 'map',
    zoom: 0.7,
    top: '13%',
    left: '30%',
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
    data: [
         {
             name: '云南',
             selected: true

         },
         {
             name: '安徽',
             selected: true

         },
         {
             name: '福建',
             selected: true

         },
         {
             name: '湖南',
             selected: true

         },

    ],

    markLine: {
        symbol: ['image://spot.png', 'none'],
        symbolSize: 20,
		silent:true,
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
                 [
                   {
                       value: [4, 0],
                       name: "云南省",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: ['{Province|云南}\n{l1|6}   {l2|0}\n{l4|申请数}   {l5|筛查数}\n\n\n{l6|}'].join('\n'),

                               position: 'end',
                               distance: 20,
                               rich: {
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 0],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [50, 0, 18, 10],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
                                       fontFamily: 'myFirstFont',
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
                                       width: 58,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                   l3: {

                                       align: 'center',
                                       backgroundColor: 'rgba(145,192,192,0.6)',
                                       color: '#fff',
                                       //borderWidth: 1,
                                       padding: [0, 0, 5, 0],
                                       fontSize: 32,
                                       width: 54,
                                       height: 30,
                                       borderWidth: 1,
                                       borderColor: 'rgba(145,192,192,0.1)',
                                       fontFamily: 'myFirstFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       borderRadius: 0,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 58,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                       //padding: [5, 13, 5, 13],
                                   },
                                  
                               }
                           }
                       },
                       coord: [102.712251, 25.040609]
                   },

                   {
                       name: "云南省",
                       coord: [94.773556, 20.682906]
                   }

                 ], [

                   {

                       symbol: 'none',
                       coord: [94.773556, 20.682906]
                   },
                   {

                       symbol: 'none',
                       coord: [79.773556, 20.682906]
                   }
                 ],
			   //-------------------------------------------
			     [
                   {
                       value: [4, 0],
                       name: "安徽省",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: ['{Province|安徽}\n{l1|8}   {l2|3}\n{l4|申请数}   {l5|筛查数}\n\n\n{l6|}'].join('\n'),

                               position: 'end',
                               distance: 20,
                               rich: {
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 0],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [41, 0, 18, 10],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
                                       fontFamily: 'myFirstFont',
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
                                       width: 58,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                   l3: {

                                       align: 'center',
                                       backgroundColor: 'rgba(145,192,192,0.6)',
                                       color: '#fff',
                                       //borderWidth: 1,
                                       padding: [0, 0, 5, 0],
                                       fontSize: 32,
                                       width: 54,
                                       height: 30,
                                       borderWidth: 1,
                                       borderColor: 'rgba(145,192,192,0.1)',
                                       fontFamily: 'myFirstFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       borderRadius: 0,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 58,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                       //padding: [5, 13, 5, 13],
                                   },
                                   
                               }
                           }
                       },
                       coord: [117.283042, 31.86119]
                   },

                   {
                       name: "安徽省",
                       coord: [135.767413, 38.041544]
                   }

			     ], [

                   {

                       symbol: 'none',
                       coord: [135.767413, 38.041544]
                   },
                   {

                       symbol: 'none',
                       coord: [150.767413, 38.041544]
                   }
			     ],

                 //-------------------------------------------
			     [
                   {
                       value: [4, 0],
                       name: "福建省",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: ['{Province|福建}\n                                 {l1|7}   {l2|2}\n                                 {l4|申请数}   {l5|筛查数}\n\n\n{l6|}'].join('\n'),

                               position: 'end',
                               distance: 20,
                               rich: {
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 118],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [53, 0, 18, 10],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
                                       fontFamily: 'myFirstFont',
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
                                       width: 58,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                   l3: {

                                       align: 'center',
                                       backgroundColor: 'rgba(145,192,192,0.6)',
                                       color: '#fff',
                                       //borderWidth: 1,
                                       padding: [0, 0, 5, 0],
                                       fontSize: 32,
                                       width: 54,
                                       height: 30,
                                       borderWidth: 1,
                                       borderColor: 'rgba(145,192,192,0.1)',
                                       fontFamily: 'myFirstFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       borderRadius: 0,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 58,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                       //padding: [5, 13, 5, 13],
                                   },
                                  
                               }
                           }
                       },
                       coord: [119.306239, 26.075302]
                   },

                   {
                       name: "福建省",
                       coord: [130.280637, 17.125178]
                   }

			     ], [

                   {

                       symbol: 'none',
                       coord: [130.280637, 17.125178]
                   },
                   {

                       symbol: 'none',
                       coord: [146.280637, 17.125178]
                   }
			     ],

                   //-------------------------------------------
			     [
                   {
                       value: [3, 0],
                       name: "湖南省",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: [
							    '{block50|}{Province|湖南}'
							   +'\n{block100|}{l1|5}   {l2|0}'
							   +'\n{block100|}{l4|申请数}   {l5|筛查数}'
							   +'\n{l6|}'].join('\n'),
//							   '{Province|湖南}\n{l1|3}   {l2|0}                                 \n{l4|申请数}   {l5|筛查数}                                 \n'].join('\n'),

                               position: 'end',
                               distance: 20,
                               rich: {
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 0],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
								   block50:{padding: [0,0, 0,-192],},
								   block100:{ padding: [0,0, 0,-115],},
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [0, 0, -43, 0],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
                                       fontFamily: 'myFirstFont',
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
                                       width: 58,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                   l3: {

                                       align: 'center',
                                       backgroundColor: 'rgba(145,192,192,0.6)',
                                       color: '#fff',
                                       //borderWidth: 1,
                                       padding: [0, 0, 5, 0],
                                       fontSize: 32,
                                       width: 54,
                                       height: 30,
                                       borderWidth: 1,
                                       borderColor: 'rgba(145,192,192,0.1)',
                                       fontFamily: 'myFirstFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       borderRadius: 0,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 58,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                       //padding: [5, 13, 5, 13],
                                   },
                                   
                               }
                           }
                       },
                       coord: [112.982279, 28.19409]
                   },

                   {
                       name: "湖南省",
                       coord: [101.158659, 45.249382]
                   }

			     ], [

                   {

                       symbol: 'none',
                       coord: [101.158659, 45.249382]
                   },
                   {

                       symbol: 'none',
                       coord: [86.158659, 45.249382]
                   }
			     ]


        ],
        animation: false
    }
};




var series41 = {
    name: '1',
    type: 'map',
    zoom: 0.7,
    top: '13%',
    left: '30%',
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
    data: [
         {
             name: '四川',
             selected: true

         },
         {
             name: '浙江',
             selected: true

         },
         {
             name: '甘肃',
             selected: true

         },
         {
             name: '河南',
             selected: true

         },

    ],

    markLine: {
        symbol: ['image://spot.png', 'none'],
        symbolSize: 20,
		silent:true,
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
                 [
                   {
                       value: [4, 0],
                       name: "四川省",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: ['{Province|四川}\n{l1|16}   {l2|5}                                   \n{l4|申请数}   {l5|筛查数}                                   \n\n\n{l6|}'].join('\n'),

                               position: 'end',
                               distance: 20,
                               rich: {
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 0],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [53, 0, 18, 10],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
                                       fontFamily: 'myFirstFont',
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
                                       width: 58,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                   l3: {

                                       align: 'center',
                                       backgroundColor: 'rgba(145,192,192,0.6)',
                                       color: '#fff',
                                       //borderWidth: 1,
                                       padding: [0, 0, 5, 0],
                                       fontSize: 32,
                                       width: 54,
                                       height: 30,
                                       borderWidth: 1,
                                       borderColor: 'rgba(145,192,192,0.1)',
                                       fontFamily: 'myFirstFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       borderRadius: 0,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 58,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                       //padding: [5, 13, 5, 13],
                                   },
                                  
                               }
                           }
                       },
                       coord: [104.065735, 30.659462]
                   },

                   {
                       name: "四川省",
                       coord: [91.886421, 18.645686]
                   }

                 ], [

                   {

                       symbol: 'none',
                       coord: [91.886421, 18.645686]
                   },
                   {

                       symbol: 'none',
                       coord: [76.886421, 18.645686]
                   }
                 ],
			   //-------------------------------------------
			     [
                   {
                       value: [3, 0],
                       name: "浙江省",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: ['{Province|浙江}\n{l1|9}   {l2|1}\n{l4|申请数}   {l5|筛查数}\n\n\n{l6|}'].join('\n'),

                               position: 'end',
                               distance: 20,
                               rich: {
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 0],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [50, 0, 18, 10],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
                                       fontFamily: 'myFirstFont',
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
                                       width: 58,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                   l3: {

                                       align: 'center',
                                       backgroundColor: 'rgba(145,192,192,0.6)',
                                       color: '#fff',
                                       //borderWidth: 1,
                                       padding: [0, 0, 5, 0],
                                       fontSize: 32,
                                       width: 54,
                                       height: 30,
                                       borderWidth: 1,
                                       borderColor: 'rgba(145,192,192,0.1)',
                                       fontFamily: 'myFirstFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       borderRadius: 0,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 58,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                       //padding: [5, 13, 5, 13],
                                   },
                                 
                               }
                           }
                       },
                       coord: [120.153576, 30.287459]
                   },

                   {
                       name: "浙江省",
                       coord: [127.650766, 26.695733]
                   }

			     ], [

                   {

                       symbol: 'none',
                       coord: [127.650766, 26.695733]
                   },
                   {

                       symbol: 'none',
                       coord: [142.650766, 26.695733]
                   }
			     ],

                 //-------------------------------------------
			     [
                   {
                       value: [2, 0],
                       name: "甘肃省",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: ['{Province|甘肃}\n{l1|2}   {l2|0}                                   \n{l4|申请数}   {l5|筛查数}                                   \n\n\n{l6|}'].join('\n'),

                               position: 'end',
                               distance: 20,
                               rich: {
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 0],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [39, 0, 18, 10],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
                                       fontFamily: 'myFirstFont',
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
                                       width: 58,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                   l3: {

                                       align: 'center',
                                       backgroundColor: 'rgba(145,192,192,0.6)',
                                       color: '#fff',
                                       //borderWidth: 1,
                                       padding: [0, 0, 5, 0],
                                       fontSize: 32,
                                       width: 54,
                                       height: 30,
                                       borderWidth: 1,
                                       borderColor: 'rgba(145,192,192,0.1)',
                                       fontFamily: 'myFirstFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       borderRadius: 0,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 58,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                       //padding: [5, 13, 5, 13],
                                   },
                                 
                               }
                           }
                       },
                       coord: [103.823557, 36.058039]
                   },

                   {
                       name: "甘肃省",
                       coord: [89.678746, 45.353253]
                   }

			     ], [

                   {

                       symbol: 'none',
                       coord: [89.678746, 45.353253]
                   },
                   {

                       symbol: 'none',
                       coord: [74.678746, 45.353253]
                   }
			     ],

                   //-------------------------------------------
			     [
                   {
                       value: [2, 0],
                       name: "河南省",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: ['{block100|}{Province|河南}\n{block200|}{l1|5}   {l2|2}\n{block200|}{l4|申请数}   {l5|筛查数}\n{l6|}'].join('\n'),
//							   '{Province|河南}\n                                   {l1|3}   {l2|0}\n                                   {l4|申请数}   {l5|筛查数}\n'].join('\n'),

                               position: 'end',
                               distance: 20,
                              rich: {
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 0],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
								   block100:{padding:[0,35,0,0]},
								    block200:{padding:[0,120,0,0]},
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [0, 0, -43, 0],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
                                       fontFamily: 'myFirstFont',
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
                                       width: 58,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                   l3: {

                                       align: 'center',
                                       backgroundColor: 'rgba(145,192,192,0.6)',
                                       color: '#fff',
                                       //borderWidth: 1,
                                       padding: [0, 0, 5, 0],
                                       fontSize: 32,
                                       width: 54,
                                       height: 30,
                                       borderWidth: 1,
                                       borderColor: 'rgba(145,192,192,0.1)',
                                       fontFamily: 'myFirstFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       borderRadius: 0,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 58,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                       //padding: [5, 13, 5, 13],
                                   },
                                 
                               }
                           }
                       },
                       coord: [113.665412, 34.757975]
                   },

                   {
                       name: "河南省",
                       coord: [119.261599, 44.562738]
                   }

			     ], [

                   {

                       symbol: 'none',
                       coord: [119.261599, 44.562738]
                   },
                   {

                       symbol: 'none',
                       coord: [134.261599, 44.562738]
                   }
			     ]


        ],
        animation: false
    }
};











var series51 = {
    name: '1',
    type: 'map',
    zoom: 0.7,
    top: '13%',
    left: '30%',
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
    data: [
         {
             name: '黑龙江',
             selected: true

         },
         {
             name: '吉林',
             selected: true

         },
         {
             name: '宁夏',
             selected: true

         },
         {
             name: '陕西',
             selected: true

         },

    ],

    markLine: {
        symbol: ['image://spot.png', 'none'],
        symbolSize: 20,
		silent:true,
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
                 [
                   {
                       value: [3, 0],
                       name: "黑龙江省",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: ['{Province|黑龙江}\n                                   {l1|12}   {l2|0}\n                                   {l4|申请数}   {l5|筛查数}\n\n\n{l6|}'].join('\n'),

                               position: 'end',
                               distance: 20,
                               rich: {
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 125],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [38, 0, 18, 10],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
                                       fontFamily: 'myFirstFont',
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
                                       width: 58,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                   l3: {

                                       align: 'center',
                                       backgroundColor: 'rgba(145,192,192,0.6)',
                                       color: '#fff',
                                       //borderWidth: 1,
                                       padding: [0, 0, 5, 0],
                                       fontSize: 32,
                                       width: 54,
                                       height: 30,
                                       borderWidth: 1,
                                       borderColor: 'rgba(145,192,192,0.1)',
                                       fontFamily: 'myFirstFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       borderRadius: 0,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 58,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                       //padding: [5, 13, 5, 13],
                                   },
                                  
                               }
                           }
                       },
                       coord: [126.642464, 45.756967]
                   },

                   {
                       name: "黑龙江省",
                       coord: [134.347382, 52.736071]
                   }

                 ], [

                   {

                       symbol: 'none',
                       coord: [134.347382, 52.736071]
                   },
                   {

                       symbol: 'none',
                       coord: [149.347382, 52.736071]
                   }
                 ],
                               //-------------------------------------------
                                 [
                   {
                       value: [2, 0],
                       name: "吉林省",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: ['{Province|吉林}\n                                   {l1|2}   {l2|0}\n                                   {l4|申请数}   {l5|筛查数}\n\n\n{l6|}'].join('\n'),

                               position: 'end',
                               distance: 20,
                               rich: {
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 125],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [53, 0, 18, 10],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
                                       fontFamily: 'myFirstFont',
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
                                       width: 58,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                   l3: {

                                       align: 'center',
                                       backgroundColor: 'rgba(145,192,192,0.6)',
                                       color: '#fff',
                                       //borderWidth: 1,
                                       padding: [0, 0, 5, 0],
                                       fontSize: 32,
                                       width: 54,
                                       height: 30,
                                       borderWidth: 1,
                                       borderColor: 'rgba(145,192,192,0.1)',
                                       fontFamily: 'myFirstFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       borderRadius: 0,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 58,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                       //padding: [5, 13, 5, 13],
                                   },
                                  
                               }
                           }
                       },
                       coord: [125.3245, 43.886841]
                   },

                   {
                       name: "吉林省",
                       coord: [134.788917, 37.913398]
                   }

                                 ], [

                   {

                       symbol: 'none',
                       coord: [134.788917, 37.913398]
                   },
                   {

                       symbol: 'none',
                       coord: [149.788917, 37.913398]
                   }
                                 ],

                 //-------------------------------------------
                                 [
                   {
                       value: [2, 0],
                       name: "宁夏",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: ['{Province|宁夏}\n{l1|3}   {l2|2}                                   \n{l4|申请数}   {l5|筛查数}                                   \n\n\n{l6|}'].join('\n'),

                               position: 'end',
                               distance: 20,
                               rich: {
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 0],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [37, 0, 18, 10],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
                                       fontFamily: 'myFirstFont',
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
                                       width: 58,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                   l3: {

                                       align: 'center',
                                       backgroundColor: 'rgba(145,192,192,0.6)',
                                       color: '#fff',
                                       //borderWidth: 1,
                                       padding: [0, 0, 5, 0],
                                       fontSize: 32,
                                       width: 54,
                                       height: 30,
                                       borderWidth: 1,
                                       borderColor: 'rgba(145,192,192,0.1)',
                                       fontFamily: 'myFirstFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       borderRadius: 0,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 58,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                       //padding: [5, 13, 5, 13],
                                   },
                                 
                               }
                           }
                       },
                       coord: [106.278179, 38.46637]
                   },

                   {
                       name: "宁夏",
                       coord: [94.895529,46.848916]
                   }

                                 ], [

                   {

                       symbol: 'none',
                       coord: [94.895529,46.848916]
                   },
                   {

                       symbol: 'none',
                       coord: [79.895529,46.848916]
                   }
                                 ],

                   //-------------------------------------------
                                 [
                   {
                       value: [2, 0],
                       name: "陕西省",
                      label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: ['{Province|陕西}\n{l1|3}   {l2|0}                                   \n{l4|申请数}   {l5|筛查数}                                   \n\n\n{l6|}'].join('\n'),

                               position: 'end',
                               distance: 20,
                               rich: {
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 0],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [53, 0, 18, 10],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
                                       fontFamily: 'myFirstFont',
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
                                       width: 58,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                   l3: {

                                       align: 'center',
                                       backgroundColor: 'rgba(145,192,192,0.6)',
                                       color: '#fff',
                                       //borderWidth: 1,
                                       padding: [0, 0, 5, 0],
                                       fontSize: 32,
                                       width: 54,
                                       height: 30,
                                       borderWidth: 1,
                                       borderColor: 'rgba(145,192,192,0.1)',
                                       fontFamily: 'myFirstFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       borderRadius: 0,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 58,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                       //padding: [5, 13, 5, 13],
                                   },
                                 
                               }
                           }
                       },
                       coord: [108.948024, 34.263161]
                   },

                   {
                       name: "陕西省",
                       coord: [89.721864,19.043659]
                   }

                                 ], [

                   {

                       symbol: 'none',
                       coord: [89.721864,19.043659]
                   },
                   {

                       symbol: 'none',
                       coord: [74.721864,19.043659]
                   }
                                 ]


        ],
        animation: false
    }
};





var series61 = {
    name: '1',
    type: 'map',
    zoom: 0.7,
    top: '13%',
    left: '30%',
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
    data: [
         {
             name: '广西',
             selected: true

         },
         {
             name: '贵州',
             selected: true

         },
         {
             name: '河北',
             selected: true

         },
         {
             name: '江西',
             selected: true

         }

    ],

    markLine: {
        symbol: ['image://spot.png', 'none'],
        symbolSize: 20,
		silent:true,
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
                                           [
                   {
                       value: [1, 0],
                       name: "广西",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: ['{Province|广西}\n{l1|2}   {l2|0}                                  \n{l4|申请数}   {l5|筛查数}                                  \n\n\n{l6|}'].join('\n'),

                               position: 'end',
                               distance: 20,
                               rich: {
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 0],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [53, 0, 18, 10],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
                                       fontFamily: 'myFirstFont',
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
                                       width: 58,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                   l3: {

                                       align: 'center',
                                       backgroundColor: 'rgba(145,192,192,0.6)',
                                       color: '#fff',
                                       //borderWidth: 1,
                                       padding: [0, 0, 5, 0],
                                       fontSize: 32,
                                       width: 54,
                                       height: 30,
                                       borderWidth: 1,
                                       borderColor: 'rgba(145,192,192,0.1)',
                                       fontFamily: 'myFirstFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       borderRadius: 0,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 58,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                       //padding: [5, 13, 5, 13],
                                   },
                                 
                               }
                           }
                       },
                       coord: [108.320004, 22.82402]
                   },

                   {
                       name: "广西",
                       coord: [98.864302, 17.095381]
                   }

                                           ], [

                   {

                       symbol: 'none',
                       coord: [98.864302, 17.095381]
                   },
                   {

                       symbol: 'none',
                       coord: [83.864302, 17.095381]
                   }
                                           ],
                               //-------------------------------------------
                                 [
                   {
                       value: [1, 0],
                       name: "贵州省",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: ['{Province|贵州}\n{l1|4}   {l2|0}                                  \n{l4|申请数}   {l5|筛查数}                                  \n\n\n{l6|}'].join('\n'),

                               position: 'end',
                               distance: 20,
                               rich: {
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 0],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [38, 0, 18, 10],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
                                       fontFamily: 'myFirstFont',
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
                                       width: 58,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                   l3: {

                                       align: 'center',
                                       backgroundColor: 'rgba(145,192,192,0.6)',
                                       color: '#fff',
                                       //borderWidth: 1,
                                       padding: [0, 0, 5, 0],
                                       fontSize: 32,
                                       width: 54,
                                       height: 30,
                                       borderWidth: 1,
                                       borderColor: 'rgba(145,192,192,0.1)',
                                       fontFamily: 'myFirstFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       borderRadius: 0,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 58,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                       //padding: [5, 13, 5, 13],
                                   },
                                 
                               }
                           }
                       },
                       coord: [106.713478, 26.578343]
                   },

                   {
                       name: "贵州省",
                       coord: [87.749248,38.927463]
                   }

                                 ], [

                   {

                       symbol: 'none',
                       coord: [87.749248, 38.927463]
                   },
                   {

                       symbol: 'none',
                       coord: [72.749248, 38.927463]
                   }
                                 ],

                 //-------------------------------------------
                                 [
                   {
                       value: [1, 0],
                       name: "河北省",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: ['{Province|河北}\n                                  {l1|5}   {l2|0}\n                                  {l4|申请数}   {l5|筛查数}\n\n\n{l6|}'].join('\n'),

                               position: 'end',
                               distance: 20,
                               rich: {
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 120],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [38, 0, 18, 10],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
                                       fontFamily: 'myFirstFont',
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
                                       width: 58,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                   l3: {

                                       align: 'center',
                                       backgroundColor: 'rgba(145,192,192,0.6)',
                                       color: '#fff',
                                       //borderWidth: 1,
                                       padding: [0, 0, 5, 0],
                                       fontSize: 32,
                                       width: 54,
                                       height: 30,
                                       borderWidth: 1,
                                       borderColor: 'rgba(145,192,192,0.1)',
                                       fontFamily: 'myFirstFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       borderRadius: 0,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 58,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                       //padding: [5, 13, 5, 13],
                                   },
                                  
                               }
                           }
                       },
                       coord: [114.502461, 38.045474]
                   },

                   {
                       name: "河北省",
                       coord: [133.529852,52.025402]
                   }

                                 ], [

                   {

                       symbol: 'none',
                       coord: [133.529852,52.025402]
                   },
                   {

                       symbol: 'none',
                       coord: [148.529852,52.025402]
                   }
                                 ],

                   //-------------------------------------------
                                 [
                   {
                       value: [1, 0],
                       name: "江西省",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: ['{Province|江西}\n{l1|5}   {l2|0}\n{l4|申请数}   {l5|筛查数}\n\n\n{l6|}'].join('\n'),

                               position: 'end',
                               distance: 20,
                               rich: {
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 0],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [43, 0, 18, 10],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
                                       fontFamily: 'myFirstFont',
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
                                       width: 58,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                   l3: {

                                       align: 'center',
                                       backgroundColor: 'rgba(145,192,192,0.6)',
                                       color: '#fff',
                                       //borderWidth: 1,
                                       padding: [0, 0, 5, 0],
                                       fontSize: 32,
                                       width: 54,
                                       height: 30,
                                       borderWidth: 1,
                                       borderColor: 'rgba(145,192,192,0.1)',
                                       fontFamily: 'myFirstFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       borderRadius: 0,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 58,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                       //padding: [5, 13, 5, 13],
                                   },
                                  
                               }
                           }
                       },
                       coord: [115.892151, 28.676493]
                   },

                   {
                       name: "江西省",
                       coord: [124.265664, 28.676493]
                   }

                                 ], [

                   {

                       symbol: 'none',
                       coord: [124.265664, 28.676493]
                   },
                   {

                       symbol: 'none',
                       coord: [139.265664, 28.676493]
                   }
                                 ]


        ],
        animation: false
    }
};



var series71 = {
    name: '1',
    type: 'map',
    zoom: 0.7,
    top: '13%',
    left: '30%',
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
    data: [
         {
             name: '辽宁',
             selected: true

         },
         {
             name: '山西',
             selected: true

         },
         {
             name: '青海',
             selected: true

         }

    ],

    markLine: {
        symbol: ['image://spot.png', 'none'],
        symbolSize: 20,
		silent:true,
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
                                           [
                   {
                       value: [1, 0],
                       name: "辽宁省",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: ['{Province|辽宁}\n                                  {l1|3}   {l2|0}\n                                  {l4|申请数}   {l5|筛查数}\n\n\n{l6|}'].join('\n'),

                               position: 'end',
                               distance: 20,
                               rich: {
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 120],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [38, 0, 18, 10],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
                                       fontFamily: 'myFirstFont',
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
                                       width: 58,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                   l3: {

                                       align: 'center',
                                       backgroundColor: 'rgba(145,192,192,0.6)',
                                       color: '#fff',
                                       //borderWidth: 1,
                                       padding: [0, 0, 5, 0],
                                       fontSize: 32,
                                       width: 54,
                                       height: 30,
                                       borderWidth: 1,
                                       borderColor: 'rgba(145,192,192,0.1)',
                                       fontFamily: 'myFirstFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       borderRadius: 0,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 58,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                       //padding: [5, 13, 5, 13],
                                   },
                                  
                               }
                           }
                       },
                       coord: [123.429096, 41.796767]
                   },

                   {
                       name: "辽宁省",
                       coord: [133.979436, 49.351453]
                   }

                                           ], [

                   {

                       symbol: 'none',
                       coord: [133.979436, 49.351453]
                   },
                   {

                       symbol: 'none',
                       coord: [148.979436, 49.351453]
                   }
                                           ],
			   //-------------------------------------------
			     [
                   {
                       value: [1, 0],
                       name: "山西省",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: ['{block50|}{Province|山西}\n{block100|}{l1|10}   {l2|1}\n{block100|}{l4|申请数}   {l5|筛查数}\n{l6|}'].join('\n'),

                               position: 'end',
                               distance: 20,
                               rich: {
								    block50:{padding:[0,0,0,-200]},
								   block100:{padding:[0,0,0,-120]},
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 0],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
								   l6: {padding:[-5,0,0,0]},
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
                                       width: 58,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                   l3: {

                                       align: 'center',
                                       backgroundColor: 'rgba(145,192,192,0.6)',
                                       color: '#fff',
                                       //borderWidth: 1,
                                       padding: [0, 0, 5, 0],
                                       fontSize: 32,
                                       width: 54,
                                       height: 30,
                                       borderWidth: 1,
                                       borderColor: 'rgba(145,192,192,0.1)',
                                       fontFamily: 'myFirstFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       borderRadius: 0,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 58,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                       //padding: [5, 13, 5, 13],
                                   },
                                  
                               }
                           }
                       },
                       coord: [112.549248, 37.857014]
                   },

                   {
                       name: "山西省",
                       coord: [106.309902,49.829852]
                   }

			     ], [

                   {

                       symbol: 'none',
                       coord: [106.309902,49.829852]
                   },
                   {

                       symbol: 'none',
                       coord: [91.309902, 49.829852]
                   }
			     ],

			     [
                   {
                       value: [1, 0],
                       name: "青海省",
                       label: {
                           textStyle: {
                               align: 'left',
                               verticalAlign: 'bottom',
                               baseline: 'bottom',
                               fontSize: 60,
                               fontFamily: 'sl'
                           },
                           normal: {
                               formatter: ['{Province|青海}\n{l1|1}   {l2|1}                                  \n{l4|申请数}   {l5|筛查数}                                  \n\n\n{l6|}'].join('\n'),

                               position: 'end',
                               distance: 20,
                               rich: {
                                   Province: {
                                       align: 'left',
                                       padding: [8, 0, 30, 0],
                                       fontSize: 20,
                                       fontFamily: 'myFourthFont',
                                   },
                                   l6: {
                                       align: 'left',

                                       color: '#fff',
                                       padding: [53, 0, 18, 10],
                                       // padding: 5 ,
                                       //lineHeight:1,
                                       fontSize: 50, //height: 66,
                                       fontFamily: 'myFirstFont',
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
                                       width: 58,
                                       height: 30,

                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFirstFont',
                                   },
                                   l3: {

                                       align: 'center',
                                       backgroundColor: 'rgba(145,192,192,0.6)',
                                       color: '#fff',
                                       //borderWidth: 1,
                                       padding: [0, 0, 5, 0],
                                       fontSize: 32,
                                       width: 54,
                                       height: 30,
                                       borderWidth: 1,
                                       borderColor: 'rgba(145,192,192,0.1)',
                                       fontFamily: 'myFirstFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l4: {
                                       align: 'center',
                                       backgroundColor: 'rgba(248,106,62,0.6)',
                                       color: '#fff',
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 50,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(248,106,62,0.1)',
                                       fontFamily: 'myFourthFont',
                                       // padding: [5, 13, 5, 13],
                                   },
                                   l5: {
                                       align: 'center',
                                       backgroundColor: 'rgba(244,20,133,0.6)',
                                       color: '#fff',
                                       borderRadius: 0,
                                       padding: [5, 0, 0, 0],
                                       fontSize: 12,
                                       width: 58,
                                       height: 16,
                                       borderWidth: 1,
                                       borderColor: 'rgba(244,20,133,0.1)',
                                       fontFamily: 'myFourthFont',
                                       //padding: [5, 13, 5, 13],
                                   },
                                  
                               }
                           }
                       },
                       coord: [98.778916, 36.623178]
                   },

                   {
                       name: "青海省",
                       coord: [81.289578, 24.964161]
                   }

			     ], [

                   {

                       symbol: 'none',
                       coord: [81.289578, 24.964161]
                   },
                   {

                       symbol: 'none',
                       coord: [66.289578, 24.964161]
                   }
			     ]


        ],
        animation: false
    }
};

var sequence2 = {};
sequence2['1'] = series11;
sequence2['2'] = series21;
sequence2['3'] = series31;

sequence2['4'] = series41;
sequence2['5'] = series51;
sequence2['6'] = series61;
sequence2['7'] = series71;



var pointData2 = [

{ province: '1' },
{ province: '2' },
{ province: '3' },
{ province: '4' },
{ province: '5' },
{ province: '6' },
{ province: '7' },
];

