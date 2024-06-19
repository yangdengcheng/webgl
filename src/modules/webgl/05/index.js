// 需求：点击两个点进行连线

import frag from "@/modules/webgl/05/index.frag"
import vert from "@/modules/webgl/05/index.vert"
import { createProgram, createShader } from "@/utils"

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

// 读取 position 地址
const a_position = gl.getAttribLocation(program, "a_position")

// 读取 canvas 的宽高
const a_screen_size = gl.getAttribLocation(program, "a_screen_size")

// 给宽高赋值
gl.vertexAttrib2f(a_screen_size, myCanvas.width, myCanvas.height)

// 创建缓冲区
const buffer = gl.createBuffer()

// 绑定缓冲区
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)

// 将缓冲区的数据和 a_position 关联
gl.enableVertexAttribArray(a_position)

const size = 2 // 每次取两个数据
const type = gl.FLOAT // 数据类型
const normalize = false // 是否归一化
const stride = 0 // 0 表示取数据不间隔
const offset = 0 // 从第一个数据开始取

gl.vertexAttribPointer(a_position, size, type, normalize, stride, offset)

myCanvas.addEventListener("click", (e) => {
    const x = e.pageX
    const y = e.pageY
    point.push(x, y)

    if (point.length > 0) {
        // 将数据写入缓冲区
        // webgl 浮点数占用 4 个字节，32 位
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(point), gl.STATIC_DRAW)
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.drawArrays(gl.LINES, 0, point.length / 2)
    }
})

gl.clearColor(0.0, 0.0, 0.0, 1.0)
gl.clear(gl.COLOR_BUFFER_BIT)
