window.onload = () => {
setTimeout(() => {
    let num = [25, 60, 80] //低中高状态值得数组
    setTimeout(() => {
        init(num[0])
    }, 0)
    setTimeout(() => {
        init(num[1])
    }, 4000)
    setTimeout(() => {
        init(num[2])
    }, 8000)

    /**
     *执行动画主方法
     *
     * @param {Number} param 数据值
     */
    function init(param) {

        let arrayColor = ['#10ffef', '#2bff10', '#ff8010', '#ff107f'] //蓝，绿，黄，红
        let value = param
        // // 调用定时器实现动态效果
        let timer = null;
        let n1 = 0;

        function loadCanvasThin(nowT) {
            timer = setInterval(() => {
                if (n1 > nowT) {
                    clearInterval(timer);
                } else {
                    n1 += 0.01;
                    circleProgressThin(n1, 'progress-thin')
                }
            }, 10);
        }
        loadCanvasThin(value / 100);
        let timer2 = null;
        let n2 = 0;

        function loadCanvasTchik(nowT) {
            timer2 = setInterval(() => {
                if (n2 > nowT) {
                    clearInterval(timer2);
                } else {
                    n2 += 0.01;
                    if (value < 25 && value > 0) {
                        circleProgressThick(n2, 'progress-thick', arrayColor[0])
                    } else if (value >= 25 && value < 50) {
                        circleProgressThick(n2, 'progress-thick', arrayColor[1])
                    } else if (value >= 50 && value < 75) {
                        circleProgressThick(n2, 'progress-thick', arrayColor[2])
                    } else if (value >= 75 && value <= 100) {
                        circleProgressThick(n2, 'progress-thick', arrayColor[3], 5)
                    }
                }
            }, 10);
        }
        loadCanvasTchik(value / 100);
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
            let c_height = canvas.height
            context.clearRect(0, 0, c_width, c_height);
            context.beginPath();
            context.arc(c_width / 2, c_height / 2, 80, Math.PI * 1 + Math.PI * 0.5 * cur, Math.PI * 1 + Math.PI * 0.5 * cur * step,
                false);
            let grad = context.createLinearGradient(0, 0, 300, 0);
            grad.addColorStop(0, '#4D5AFF'); // 蓝
            grad.addColorStop(1, color);
            context.strokeStyle = grad;
            context.lineWidth = 20
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
            context.font = "bold 20pt Arial"; // 字体大小，样式
            context.fillStyle = 'white'; // 颜色
            context.textAlign = 'center'; // 位置
            context.textBaseline = 'middle';
            context.moveTo(100, 75); // 文字填充位置
            let num = (n * 100).toFixed(0)
            let status = ''
            if (num <= 25 && num > 0) {
                status = '低'
            } else if (num > 25 && num <= 50) {
                status = '中'
            } else if (num > 50 && num <= 75) {
                status = '中'
            } else if (num > 75 && num <= 100) {
                status = '高'
            }
            context.fillText(num + "%", c_width / 2, (c_height / 2) - 30);
            context.fillText(status, c_width / 2, (c_height / 2 + 5));
            context.fillText("风险等级", c_width / 2, (c_height / 2) + 40);
        }

        /**
         *绘制刻度
         *
         */

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
    }
    drawMark('bg')
	}, 6000)
}