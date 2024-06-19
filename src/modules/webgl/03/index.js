// 需求：绘制三角形

/**
 * 三角形的三种绘制模式：基本三角形、三角带、三角扇
 */

// 需求：鼠标点击绘制点

import frag from "@/modules/webgl/03/index.frag"
import vert from "@/modules/webgl/03/index.vert"
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

// 定义三个顶点
const point = [1.0, 0.5, 0.2, 0.3, 0.6, 0.8]

// 读取 position 地址
const a_position = gl.getAttribLocation(program, "a_position")

// 创建缓冲区
const buffer = gl.createBuffer()

// 绑定缓冲区
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)

// 将数据写入缓冲区
// webgl 浮点数占用 4 个字节，32 位
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(point), gl.STATIC_DRAW)

// 将缓冲区的数据传入到顶点着色器

// 将缓冲区的数据和 a_position 关联
gl.enableVertexAttribArray(a_position)

const size = 2 // 每次取两个数据
const type = gl.FLOAT // 数据类型
const normalize = false // 是否归一化
const stride = 0 // 0 表示取数据不间隔
const offset = 0 // 从第一个数据开始取

gl.vertexAttribPointer(a_position, size, type, normalize, stride, offset)

gl.clearColor(0.0, 0.0, 0.0, 1.0)
gl.clear(gl.COLOR_BUFFER_BIT)

// 绘制三角形
gl.drawArrays(gl.TRIANGLES, 0, 3)
