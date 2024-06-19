precision mediump float;

attribute vec2 a_position;

// 获取 canvas 的宽高
attribute vec2 a_screen_size;

void main() {
    vec2 position = (a_position / a_screen_size) * 2.0 - 1.0;

    position = position * vec2(1.0, -1.0);

    gl_Position = vec4(position, 0.0, 1.0);
}