const myCanvas = document.getElementById('myCanvas');

const ctx = myCanvas.getContext('2d');

if (ctx !== null) {
    ctx.beginPath();

    /**
     * 可以利用lineWidth设置线的粗细，属性值为number型，默认为1，没有单位
     * @type {number}
     */
    ctx.lineWidth = 15

    /**
     * 可以使用lineCap指定如何绘制每一条线段末端的属性："butt" | "round" | "square"
     * 其中butt代表线段末端以方形结束
     * round表示线段末端以圆形结束
     * square线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域
     * 默认是butt。
     * @type {string}
     */
    ctx.lineCap = 'round'

    /**
     * 可以使用lineJoin来设置设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）:"bevel" | "round" | "miter"
     * round表示通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
     * bevel表示在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
     * miter表示通过延伸相连部分的外边缘，使其相交于一个点，从而绘制拐角的形状。 这个点称为交点，角度称为延长角，延长角的大小取决于lineWidth，lineJoin和miterLimit属性。
     * @type {string}
     */
    ctx.lineJoin = 'round'

    ctx.moveTo(100, 100)
    ctx.lineTo(200, 200)
    ctx.lineTo(300, 100)
    ctx.lineTo(400, 200)
    ctx.lineTo(500, 100)

    ctx.stroke()


    // ------------------------

    ctx.lineWidth = 1
    ctx.setLineDash([15, 15])
    ctx.strokeRect(100, 300, 90, 90)
    ctx.setLineDash([15, 5, 2, 5])
    ctx.strokeRect(250, 300, 90, 90)

    ctx.setLineDash([])
}
