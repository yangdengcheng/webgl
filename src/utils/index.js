function createShader(gl, type, source) {
    // 创建顶点着色器对象
    const shader = gl.createShader(type)

    // 将代码分配给顶点着色器对象
    gl.shaderSource(shader, source)

    // 编译
    gl.compileShader(shader)
    return shader
}

function createProgram(gl, vertexShader, fragmentShader) {
    // 创建着色器程序对象
    const program = gl.createProgram()

    // 将顶点着色器对象和片元着色器对象分配给着色器程序对象
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)

    // 链接着色器程序对象
    gl.linkProgram(program)
    return program
}

export {
    createShader,
    createProgram
}