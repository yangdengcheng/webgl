// 需求：绘制一个点

import frag from "@/modules/webgl/01/index.frag"
import vert from "@/modules/webgl/01/index.vert"
import { createProgram, createShader } from "@/utils"

const myCanvas = document.querySelector("#myCanvas")

const gl =
    myCanvas.getContext("webgl") || myCanvas.getContext("experimental-webgl")

// 创建顶点着色器程序对象
const vertexShader = createShader(gl, gl.VERTEX_SHADER, vert)

// 创建片元着色器程序对象
const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, frag)

// 创建着色器程序对象
const program = createProgram(gl, vertexShader, fragmentShader)

// 使用着色器程序对象
gl.useProgram(program)

// 绘制
gl.clearColor(0.0, 0.0, 0.0, 1.0)

// 清空颜色缓冲区
gl.clear(gl.COLOR_BUFFER_BIT)

/**
 * 参数1：顶点属性的位置
 * 参数2：顶点属性的大小
 * 参数3：数据类型
 */
gl.drawArrays(gl.POINTS, 0, 1)
