/*
 * jQuery - jcMarquee v0.10
 * Copyright(c) 2012 by Riddick-design 
 * Date: 2012-01-07
 * 相关参数 
   'marquee':'x',        \\ 设置滚动方向，提供 marquee:x 或 marquee:y
   'margin_bottom':'0',  \\ 设置margin_bottom值
   'margin_right':'0',   \\ 设置margin_right值
   'speed':'10'          \\ 设置滚动速度,单位mm
 * 重要提醒
   #Marquee_x ul li { float:left;} // 横向滚动时必须让所有li左浮动 
 * HTML结构
   <div id="Marquee"> 
         <ul> 
              <li> 
                  <div><img height="50" width="100" alt="图片1" /></div>
              </li>
         </ul> 
   </div>  
 */
; (function ($) {
    $.fn.jcMarquee = function (options) {
        var defaults = {
            'marquee': 'x',
            'margin_bottom': '0',
            'margin_right': '0',
            'speed': '10'
        };
        var options = $.extend(defaults, options);
        return this.each(function () {
            var $marquee = $(this),
			    $marquee_scroll = $marquee.children('ul');
            $marquee_scroll.append("<li class='clone' id='clone'>" + "</li>");
            $marquee_scroll.append("<li class='clone' id='clone1'>" + "</li>");
            $marquee_scroll.append("<li class='clone' id='clone2'>" + "</li>");
            $marquee_scroll.append("<li class='clone' id='clone3'>" + "</li>");
            $marquee_scroll.append("<li class='clone' id='clone4'>" + "</li>");
            $marquee_scroll.append("<li class='clone' id='clone5'>" + "</li>");
            $marquee_scroll.append("<li class='clone' id='clone6'>" + "</li>");
            $marquee_scroll.append("<li class='clone' id='clone7'>" + "</li>");
            $marquee_scroll.append("<li class='clone' id='clone8'>" + "</li>");
            $marquee_scroll.append("<li class='clone' id='clone9'>" + "</li>");
            $marquee_scroll.append("<li class='clone' id='clone10'>" + "</li>");
            $marquee_scroll.append("<li class='clone' id='clone11'>" + "</li>");
            $marquee_scroll.append("<li class='clone' id='clone12'>" + "</li>");
            $marquee_scroll.append("<li class='clone' id='clone13'>" + "</li>");
            $marquee_scroll.find('li').eq(0).children().clone().appendTo('#clone');
            $marquee_scroll.find('li').eq(1).children().clone().appendTo('#clone1');
            $marquee_scroll.find('li').eq(2).children().clone().appendTo('#clone2');
            $marquee_scroll.find('li').eq(3).children().clone().appendTo('#clone3');
            $marquee_scroll.find('li').eq(4).children().clone().appendTo('#clone4');
            $marquee_scroll.find('li').eq(5).children().clone().appendTo('#clone5');
            $marquee_scroll.find('li').eq(6).children().clone().appendTo('#clone6');
            $marquee_scroll.find('li').eq(7).children().clone().appendTo('#clone7');
            $marquee_scroll.find('li').eq(8).children().clone().appendTo('#clone8');
            $marquee_scroll.find('li').eq(9).children().clone().appendTo('#clone9');
            $marquee_scroll.find('li').eq(10).children().clone().appendTo('#clone10');
            $marquee_scroll.find('li').eq(11).children().clone().appendTo('#clone11');
            $marquee_scroll.find('li').eq(11).children().clone().appendTo('#clone12');
            $marquee_scroll.find('li').eq(11).children().clone().appendTo('#clone13');
            var $marquee_left = $marquee_scroll.find('li');
            if (options.marquee == 'x') {
               
                $marquee_scroll.css('width', '1000%');
                $marquee_left.find('div').css({ 'margin-right': options.margin_right });
                $marquee_left.css({ 'margin-right': options.margin_right });
				 var x = 0;
                function Marquee_x() {
                    $marquee.scrollLeft(++x);
                    _margin = parseInt($marquee_left.find('div').css('margin-right'));
                    if (x == $marquee_left.width() + _margin) { x = 0 };
                };
                var MyMar = setInterval(Marquee_x, options.speed);
                $("#start").click(function () {
                    x = 0;

                    MyMar = setInterval(Marquee_x, options.speed);
                });
                $("#end").click(function () {
					x=0;
                 Marquee_x();
                    clearInterval(MyMar);
                });

            }

        });
    };
})(jQuery)