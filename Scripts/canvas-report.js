function RiskLoad() {
    let endThickDom = document.getElementById('progress-thick');
    let endThinDom = document.getElementById('progress-thin');
    let arrayColor = ['#ff107f', '#ff8010', '#10ffef', '#2bff10'] //红，黄，蓝，绿
    let num = [63.6, 31.1, 5.3] //低中高状态值得数组
    // // 调用定时器实现动态效果
    let timer = null;
    let n1 = 0;
    let timer2 = null;
    let n2 = 0;
    setTimeout(() => {
        setTimeout(() => {
            init(num[0])
            n1 = 0;
            n2 = 0;
        }, 0)
        setTimeout(() => {
            init(num[1])
            n1 = 0;
            n2 = 0;
        }, 3500)
        setTimeout(() => {
            init(num[2])
            n1 = 0;
            n2 = 0;
            setTimeout(() => {
                $(endThickDom).animate({
                    opacity: 0
                }, 1000)
                $(endThinDom).animate({
                    opacity: 0
                }, 1000)
            }, 1000)
        }, 6000)
        setTimeout(() => {
            end('progress-thick')
            $(endThickDom).animate({
                opacity: 1
            }, 1000)
            $(endThinDom).animate({
                opacity: 1
            }, 1000)
        }, 8000)
    }, 1500)

    /**
     *执行动画主方法
     *
     * @param {Number} param 数据值
     */
    function init(param) {
        loadCanvasThin(param / 100, param);
        loadCanvasTchik(param / 100, param);
    }

    function loadCanvasTchik(nowT, value) {
        timer2 = setInterval(() => {
            if (n2 > nowT) {
                clearInterval(timer2);
            } else {
                n2 += 0.001;
                if (value >= 33 && value < 50) {
                    circleProgressThick(n2, 'progress-thick', arrayColor[2])
                } else if (value >= 50 && value < 100) {
                    circleProgressThick(n2, 'progress-thick', arrayColor[3]) //低
                } else if (value >= 6 && value < 33) {
                    circleProgressThick(n2, 'progress-thick', arrayColor[1]) //中
                } else if (value >= 0 && value < 6) {
                    circleProgressThick(n2, 'progress-thick', arrayColor[0], 5) //高
                }
            }
        }, 1);
    }

    function loadCanvasThin(nowT) {
        timer = setInterval(() => {
            if (n1 > nowT) {
                clearInterval(timer);
            } else {
                n1 += 0.001;
                circleProgressThin(n1, 'progress-thin')
            }
        }, 1);
    }
    /**
     *
     *绘制背景粗线
     * @param {Number} cur   用来计算弧度的小数
     * @param {String} id    id选择器的名称
     * @param {String} color 线的色值
     */
    function circleProgressThick(cur, id, color, step = 4) {
        let canvas = document.getElementById(id);
        let context = canvas.getContext('2d');
        let c_width = canvas.width
        // console.log('c_width: ', c_width);
        let c_height = canvas.height
        // console.log('c_height: ', c_height);
        context.clearRect(0, 0, c_width, c_height);
        context.beginPath();
        context.arc(c_width / 2, c_height / 2, 80, Math.PI * 1 + Math.PI * 0.5 * cur, Math.PI * 1 + Math.PI * 0.5 * cur * step,
            false);
        let grad = context.createLinearGradient(0, 0, 300, 0);
        grad.addColorStop(0, '#4D5AFF'); // 蓝
        grad.addColorStop(1, color);
        context.strokeStyle = grad;
        context.lineWidth = 18;
        context.lineCap = "round";
        context.stroke();
        context.closePath();
    }

    /**
     *绘制背景细线
     *
     * @param {Number} cur 用来计算弧度
     * @param {String} id  id选择器的名称
     */
    function circleProgressThin(cur, id) {
        let canvas = document.getElementById(id);
        let context = canvas.getContext('2d');
        let c_width = canvas.width
        let c_height = canvas.height
        // // 清空画布
        context.clearRect(0, 0, c_width, c_height);
        context.beginPath();
        context.arc(c_width / 2, c_height / 2, 80, Math.PI * 0.5 * (1 + cur), Math.PI * 1 + (Math.PI * 1 * cur), false);
        context.strokeStyle = '#4D5AFF';
        context.lineWidth = 3
        context.lineCap = "round";
        context.stroke();
        context.closePath();
        //文字
        text(context, cur, c_width, c_height)

    };
    /**
     *绘制文字
     *
     * @param {Object} context   canvas对象
     * @param {Number} n         用来显示百分比的数值
     * @param {Number} c_width   canvas的宽度
     * @param {Number} c_height  canvas的高度
     */
    function text(context, n, c_width, c_height) {
        context.font = "bold 19pt myThirdFont"; // 字体大小，样式
        context.fillStyle = '#fff'; // 颜色
        context.textAlign = 'center'; // 位置
        context.textBaseline = 'middle';
        context.moveTo(100, 75); // 文字填充位置
        let num = (n * 100).toFixed(1)
        let status = ''
        if (num >= 33 && num < 50) {
            status = '低'
        } else if (num >= 50 && num < 100) {
            status = '低'
        } else if (num >= 6 && num < 33) {
            status = '中'
        } else if (num >= 0 && num < 6) {
            status = '高'
        }
        context.fillText(num + "%", c_width / 2, (c_height / 2) - 30);
        context.font = "bold 25pt myFourthFont"
        context.fillStyle = '#fff'; // 颜色
        context.textAlign = 'center'; // 位置
        context.textBaseline = 'middle';
        context.moveTo(100, 75); // 文字填充位置
        context.fillText(status, c_width / 2, (c_height / 2 + 5));
        context.font = "bold 12pt myThirdFont"
        context.fillStyle = '#fff'; // 颜色
        context.textAlign = 'center'; // 位置
        context.textBaseline = 'middle';
        context.moveTo(100, 75); // 文字填充位置
        context.fillText("风险等级", c_width / 2, (c_height / 2) + 40);
    }

    /**
     *绘制底图刻度盘
     *
     * @param {String} id id选择器的名称
     */
    function drawMark(id) {
        let canvas = document.getElementById(id);
        let context = canvas.getContext('2d');
        let c_width = canvas.width
        let c_height = canvas.height
        context.save();
        context.clearRect(0, 0, c_width, c_height);
        context.beginPath();
        context.arc(c_width / 2, c_height / 2, 100, 0, 2 * Math.PI);
        context.fillStyle = 'rgba(0, 0, 0, 0.2)';
        context.fill();
        context.lineWidth = "2";
        context.strokeStyle = "rgba(255, 255, 255, 0.2)";
        context.translate(canvas.width / 2, canvas.height / 2);
        for (let i = 0; i < 120; i++) {
            context.rotate(3 / 180 * Math.PI);
            context.beginPath();
            context.moveTo(0, -75);
            context.lineTo(0, -85);
            context.stroke();
        }
        context.restore();
    }

    // 最后的圆盘
    function end(id, color) {
        let canvas1 = document.getElementById('progress-thin');
        let context1 = canvas1.getContext('2d');
        let c_width1 = canvas1.width
        let c_height1 = canvas1.height
        context1.clearRect(0, 0, c_width1, c_height1);


        let canvas = document.getElementById(id);
        let context = canvas.getContext('2d');
        let c_width = canvas.width
        let c_height = canvas.height
        context.clearRect(0, 0, c_width, c_height);
        context.beginPath();
        context.arc(c_width / 2, c_height / 2, 80, Math.PI * 0, Math.PI * 1,
            false);
        let grad2 = context.createLinearGradient(70, 0, 300, 0);
        grad2.addColorStop(0, '#4D5AFF'); // 蓝
        grad2.addColorStop(1, '#2bff10'); //绿
        context.strokeStyle = grad2;
        context.lineWidth = 20
        context.lineCap = "round";
        context.stroke();

        context.beginPath();
        context.arc(c_width / 2, c_height / 2, 80, Math.PI * 1.1, Math.PI * 1.2,
            false);
        let grad = context.createLinearGradient(116, 0, 150, 0);
        grad.addColorStop(0, '#9808a9'); // 蓝
        grad.addColorStop(1, '#ff107f'); //红

        // let grad = context.createLinearGradient(0, 0, 150, 0);
        // grad.addColorStop(0, '#4D5AFF'); // 蓝
        // grad.addColorStop(1, '#ff107f'); //红
        context.strokeStyle = grad;
        context.lineWidth = 20
        context.lineCap = "round";
        context.stroke();


        context.beginPath();
        context.arc(c_width / 2, c_height / 2, 80, Math.PI * 1.3, Math.PI * 1.9,
            false);
        let grad1 = context.createLinearGradient(70, 0, 300, 0);
        grad1.addColorStop(0, '#4D5AFF'); // 蓝
        grad1.addColorStop(1, '#ff8010'); //黄
        context.strokeStyle = grad1;
        context.lineWidth = 20
        context.lineCap = "round";
        context.stroke();

        context.font = "bold 20pt Arial"; // 字体大小，样式
        context.fillStyle = 'white'; // 颜色
        context.textAlign = 'center'; // 位置
        context.textBaseline = 'middle';
        context.moveTo(100, 75); // 文字填充位置
        context.fillText('风险', c_width / 2, (c_height / 2 - 20));
        context.fillText("等级", c_width / 2, (c_height / 2) + 20);
        // 高line
        context.beginPath();
        context.moveTo(120, 150);
        context.lineTo(80, 150);
        context.lineTo(70, 140);
        context.lineWidth = 1
        context.strokeStyle = "#fff";
        context.stroke();
        // 高text
        context.font = " 12pt Arial"; // 字体大小，样式
        context.fillStyle = 'white'; // 颜色
        context.textAlign = 'center'; // 位置
        context.textBaseline = 'middle';
        context.moveTo(0, 0); // 文字填充位置
        context.fillText('高', 100, 120);
        context.fillText(num[2] + '%', 100, 140);
        // 中line

        context.beginPath();
        context.moveTo(280, 150);
        context.lineTo(320, 150);
        context.lineTo(330, 140);
        context.lineWidth = 1
        context.strokeStyle = "#fff";
        context.stroke();
        // 中text
        context.font = " 12pt Arial"; // 字体大小，样式
        context.fillStyle = 'white'; // 颜色
        context.textAlign = 'center'; // 位置
        context.textBaseline = 'middle';
        context.moveTo(100, 75); // 文字填充位置
        context.fillText('中', 300, 120);
        context.fillText(num[1] + '%', 300, 140);

        // 低line

        context.beginPath();
        context.moveTo(200, 290);
        context.lineTo(200, 330);
        context.lineTo(180, 340);
        context.lineWidth = 1
        context.strokeStyle = "#fff";
        context.stroke();
        // 低 text
        context.font = " 12pt Arial"; // 字体大小，样式
        context.fillStyle = 'white'; // 颜色
        context.textAlign = 'center'; // 位置
        context.textBaseline = 'middle';
        context.moveTo(100, 75); // 文字填充位置
        context.fillText('低', 170, 300);
        context.fillText(num[0] + '%', 170, 320);

    }
    drawMark('bg')
    circleProgressThick(0.34, 'progress-thick', arrayColor[2])
    circleProgressThin(0.34, 'progress-thin')
}