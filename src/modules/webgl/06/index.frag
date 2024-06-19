precision mediump float;

// 顶点着色器给片元着色器传递颜色 这里是 js 中的 rgba
varying vec4 v_color;

void main() {
    vec4 color = v_color / vec4(255.0, 255.0, 255.0, 1.0);
    gl_FragColor = color;
}