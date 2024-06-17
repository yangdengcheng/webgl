const myCanvas = document.querySelector('#myCanvas')

const ctx = myCanvas.getContext('2d')

if (ctx !== null) {
    // 创建一个路径
    ctx.beginPath();

    // 移动绘制点
    ctx.moveTo(100, 100);

    // 描述行进路径
    ctx.lineTo(200, 200);
    ctx.lineTo(300, 150);
    ctx.lineTo(250, 100);

    // 封闭路径
    ctx.closePath();

    // 绘制
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.fillStyle = 'pink';
    ctx.fill();
}
