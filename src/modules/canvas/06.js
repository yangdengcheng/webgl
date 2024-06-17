const myCanvas = document.querySelector('#myCanvas')

const ctx = myCanvas.getContext('2d')

const balls = [];

const myCanvasWidth = myCanvas.width = document.documentElement.clientWidth - 30;
const myCanvasHeight = myCanvas.height = document.documentElement.clientHeight - 30;

let requestAnimationId;
let isRunning = false;

class Ball {
    x = Math.floor(Math.random() * myCanvasWidth)
    y = Math.floor(Math.random() * myCanvasHeight)
    r = 10
    color = 'pink';
    dx = Math.floor(Math.random() * 10) - 5;
    dy = Math.floor(Math.random() * 10) - 5;

    constructor() {
        balls.push(this)
    }

    render() {
        if (ctx !== null) {
            ctx.beginPath();

            ctx.globalAlpha = 1
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    update() {
        this.x += this.dx

        if (this.x <= this.r) {
            this.x = this.r
        } else if (this.x > myCanvasWidth - this.r) {
            this.x = myCanvasWidth - this.r
        }

        this.y += this.dy
        if (this.y <= this.r) {
            this.y = this.r
        } else if (this.y > myCanvasHeight - this.r) {
            this.y = myCanvasHeight - this.r
        }

        if (this.x + this.r >= myCanvasWidth || this.x - this.r <= 0) {
            this.dx *= -1
        }

        if (this.y + this.r >= myCanvasHeight || this.y - this.r <= 0) {
            this.dy *= -1
        }
    }
}

for (let i = 0; i < 20; i++) {
    new Ball();
}

function animate() {
    if (ctx !== null) {
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }

    for (let i = 0; i < balls.length; i++) {
        balls[i].update();
        balls[i].render();
    }

    // 如果动画需要继续，则请求下一帧
    if (isRunning) {
        requestAnimationId = requestAnimationFrame(animate);
    }

    handleBallsLine()
}

// 计算两个小球之间的距离
function calculateDistance(ball1, ball2) {
    return Math.sqrt(Math.pow(ball1.x - ball2.x, 2) + Math.pow(ball1.y - ball2.y, 2));
}

function handleBallsLine() {
    const closeBalls = [];

    for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
            const distance = calculateDistance(balls[i], balls[j])
            if (distance < 150) {
                ctx.strokeStyle = 'pink'
                ctx.beginPath();
                ctx.globalAlpha = 1 - distance / 150
                ctx.moveTo(balls[i].x, balls[i].y);
                ctx.lineTo(balls[j].x, balls[j].y);
                ctx.closePath();
                ctx.stroke();
            }
        }
    }

    return closeBalls;
}


// 开始或停止动画
function startAnimation() {
    isRunning = true;
    requestAnimationId = requestAnimationFrame(animate);
}

function stopAnimation() {
    isRunning = false;
    cancelAnimationFrame(requestAnimationId);
}

startAnimation();


