// 需求：鼠标点击绘制点

import frag from "@/modules/webgl/02/index.frag"
import vert from "@/modules/webgl/02/index.vert"
import { createProgram, createShader } from "@/utils"
import { generateRandomColor } from "../../../utils"

const myCanvas = document.querySelector("#myCanvas")

const gl =
    myCanvas.getContext("webgl") || myCanvas.getContext("experimental-webgl")

// 清空颜色缓冲区
gl.clearColor(0.0, 0.0, 0.0, 1.0)

// 清空颜色缓冲区
gl.clear(gl.COLOR_BUFFER_BIT)

// 创建顶点着色器程序对象
const vertexShader = createShader(gl, gl.VERTEX_SHADER, vert)

// 创建片元着色器程序对象
const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, frag)

// 创建着色器程序对象
const program = createProgram(gl, vertexShader, fragmentShader)

// 使用着色器程序对象
gl.useProgram(program)

const point = []

const a_CanvasPosition = gl.getAttribLocation(program, "a_CanvasPosition")
const a_CanvasSize = gl.getAttribLocation(program, "a_CanvasSize")
const u_color = gl.getUniformLocation(program, "u_color")

// 赋值canvas的宽高信息
gl.vertexAttrib2f(a_CanvasSize, myCanvas.width, myCanvas.height)

window.addEventListener("click", function (e) {
    // Canvas 的坐标原点在左上角，x 轴向右增大，y 轴向下增大
    const x = e.clientX
    const y = e.clientY
    const color = generateRandomColor()

    point.push({
        x,
        y,
        color
    })

    // 绘制
    gl.clearColor(0.0, 0.0, 0.0, 1.0)

    // 清空颜色缓冲区
    gl.clear(gl.COLOR_BUFFER_BIT)

    for (let i = 0; i < point.length; i++) {
        const color = point[i].color

        // 设置颜色
        gl.uniform4f(u_color, color.r, color.g, color.b, color.a)

        // 设置坐标信息
        gl.vertexAttrib2f(a_CanvasPosition, point[i].x, point[i].y)

        // 绘制
        gl.drawArrays(gl.POINTS, 0, 1)
    }
})
