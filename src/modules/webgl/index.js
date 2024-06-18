import frag from "./01/index.frag"
import vert from "./01/index.vert"

const myCanvas = document.querySelector("#myCanvas")

const gl =
    myCanvas.getContext("webgl") || myCanvas.getContext("experimental-webgl")

// 流程1：创建顶点着色器对象
const vertexShader = gl.createShader(gl.VERTEX_SHADER)

// 将代码分配给顶点着色器对象
gl.shaderSource(vertexShader, vert)

// 编译
gl.compileShader(vertexShader)

// 流程 2：创建片元着色器对象
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)

// 将代码分配给片元着色器对象
gl.shaderSource(fragmentShader, frag)

// 编译
gl.compileShader(fragmentShader)

// 流程 3：创建着色器程序对象
const program = gl.createProgram()

// 将顶点着色器对象和片元着色器对象分配给着色器程序对象
gl.attachShader(program, vertexShader)
gl.attachShader(program, fragmentShader)

// 链接着色器程序对象
gl.linkProgram(program)

// 使用着色器程序对象
gl.useProgram(program)

// 流程 4：绘制
gl.clearColor(0.0, 0.0, 0.0, 1.0)

// 清空颜色缓冲区
gl.clear(gl.COLOR_BUFFER_BIT)

/**
 * 参数1：顶点属性的位置
 * 参数2：顶点属性的大小
 * 参数3：数据类型
 */
gl.drawArrays(gl.POINTS, 0, 1)
