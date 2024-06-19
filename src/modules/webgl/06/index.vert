precision mediump float;

attribute vec2 a_position;

// 获取 canvas 的宽高
attribute vec2 a_screen_size;

// 获取 JS 传来的颜色
attribute vec4 a_color;

// 顶点着色器给片元着色器传递颜色
varying vec4 v_color;

void main() {
    vec2 position = (a_position / a_screen_size) * 2.0 - 1.0;

    position = position * vec2(1.0, -1.0);

    gl_Position = vec4(position, 0.0, 1.0);
    v_color = a_color; // 使用varying在顶点着色器中接收到的值会被传递到片元着色器中
}