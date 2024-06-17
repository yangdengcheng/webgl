const myCanvas = document.querySelector('#myCanvas')

const ctx = myCanvas.getContext('2d')

class Rect {
    constructor({
        x = 0,
        y = 0,
        width = 0,
        height = 0,
        color = 'pink'
    }) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
    }

    update() {
        this.x++;
        if (this.x > myCanvas.width) {
            this.x = -200
        }
    }

    render(ctx, rectAction) {
        ctx.fillStyle = this.color
        ctx[rectAction](this.x, this.y, this.width, this.height)
    }
}

let myRect1 = new Rect({
    x: -100,
    y: 200,
    height: 100,
    width: 100,
    color: 'pink'
})

let myRect2 = new Rect({
    x: -100,
    y: 400,
    height: 100,
    width: 100,
    color: 'purple'
})

setInterval(() => {
    if (ctx !== null) {
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

        myRect1.update();
        myRect2.update();

        myRect1.render(ctx, 'fillRect');
        myRect2.render(ctx, 'strokeRect');
    }
}, 10)
