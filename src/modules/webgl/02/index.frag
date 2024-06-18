precision mediump float;

// 传入的颜色(255, 255, 255, 1)
uniform vec4 u_color;

void main() {
    vec4 color = u_color / vec4(255.0, 255.0, 255.0, 1.0);

    // 内置变量
    // 三原色（红绿蓝） + 透明度
    gl_FragColor = color;
}
