const myCanvas = document.querySelector('#myCanvas')

const ctx = myCanvas.getContext('2d')

/**
 * arc有六个参数：arc(x, y, r, sAngle, eAngle, counterclockwise);六个参数对应的意思：
 *
 * x,y表示圆心坐标
 *
 * r 表示圆的半径
 *
 * sAngle : 表示开始绘制的角度
 *
 * eAngle : 表示结束绘制的角度
 *
 * counterclockwise ： 表示顺时针绘制还是逆时针，false = 顺时针，true = 逆时针，默认值是false
 */
if (ctx !== null) {
    ctx.beginPath();

    ctx.arc(200, 200, 100, 0, Math.PI * 0.5, true);

    ctx.stroke();
}
