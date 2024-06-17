// 点动小球

const myCanvas = document.querySelector('#myCanvas')

const ctx = myCanvas.getContext('2d')

const balls = [];

class Ball {
    constructor({
        x = 0,
        y = 0,
    }) {
        this.x = x;
        this.y = y;
        this.color = this.generateRandomColor();
        this.r = Math.floor(Math.random() * 100);
        this.moveX = Math.floor(Math.random() * 10) - 5;
        this.moveY = Math.floor(Math.random() * 10) - 5;
    }

    generateRandomColor() {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        return `rgb(${r}, ${g}, ${b})`
    }

    update() {
        this.x += this.moveX;
        this.y += this.moveY;
        this.r -= 0.5;
        if (this.r <= 0) {
            this.remove();
        }
    }

    render() {
        if (ctx !== null) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;

            // 设置透明度
            ctx.globalAlpha = 0.1;
            ctx.fill();
        }
    }

    remove() {
        const index = balls.findIndex(ball => ball === this);
        balls.splice(index, 1);
    }
}

myCanvas.addEventListener('click', (e) => {
    console.log(e);
    balls.push(new Ball({
        x: e.x,
        y: e.y,
    }))
})

setInterval(() => {
    if (ctx !== null) {
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }

    for (let i = 0; i < balls.length; i++) {
        balls[i].update();

        if (balls[i]) {
            balls[i].render()
        }
    }
}, 1000 / 60)
