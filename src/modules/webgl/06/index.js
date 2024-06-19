// 需求：点击两个点进行连线

import frag from "@/modules/webgl/06/index.frag"
import vert from "@/modules/webgl/06/index.vert"
import { createProgram, createShader, generateRandomColor } from "@/utils"

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

// 定义两个顶点，传入 canvas 的 x 和 y 坐标
const point = []

const color = []

// 读取 position 地址
const a_position = gl.getAttribLocation(program, "a_position")

// 读取 canvas 的宽高
const a_screen_size = gl.getAttribLocation(program, "a_screen_size")

const a_color = gl.getAttribLocation(program, "a_color")

// 给宽高赋值
gl.vertexAttrib2f(a_screen_size, myCanvas.width, myCanvas.height)

function createBuffer(gl, attribute, vertexAttribPointer) {
    let { size, type, normalize, stride, offset } = vertexAttribPointer
    gl.enableVertexAttribArray(attribute)
    let buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.vertexAttribPointer(
        attribute,
        size,
        type || gl.FLOAT,
        normalize || false,
        stride || 0,
        offset || 0
    )
    return buffer
}

// 定义颜色和位置的 buffer 数据绑定
// 定义位置
const positionBuffer = createBuffer(gl, a_position, {
    size: 2,
    type: gl.FLOAT,
    normalize: false,
    stride: 0,
    offset: 0
})

const colorBuffer = createBuffer(gl, a_color, {
    size: 4,
    type: gl.FLOAT,
    normalize: false,
    stride: 0,
    offset: 0
})

myCanvas.addEventListener("click", (e) => {
    const x = e.pageX
    const y = e.pageY
    point.push(x, y)

    const temColor = generateRandomColor()
    color.push(temColor.r, temColor.g, temColor.b, temColor.a)

    if (point.length > 0) {
        //  每次要重新 bindBuffer
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)

        // 将静态改为动态
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(point), gl.DYNAMIC_DRAW)

        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(color), gl.DYNAMIC_DRAW)

        if (point.length % 6 === 0) {
            gl.clear(gl.COLOR_BUFFER_BIT)
            gl.drawArrays(gl.TRIANGLES, 0, point.length / 2)
        }
    }
})

gl.clearColor(0.0, 0.0, 0.0, 1.0)
gl.clear(gl.COLOR_BUFFER_BIT)
