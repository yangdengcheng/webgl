// 接受 JS 传来的变量

// 设置浮点数精度
precision mediump float; 

// 定义两个变量，接受 canvas 的 x 和 y
attribute vec2 a_CanvasPosition;

// 接受 canvas 的宽高
attribute vec2 a_CanvasSize;

void main () {
    // 将 canvas 的 x 和 y 转换到 [-1, 1] 的范围
    vec2 position = a_CanvasPosition / a_CanvasSize * 2.0 - 1.0;
    // y 轴翻转
    position = position * vec2(1.0, -1.0);

    // 四维向量，前三个分量表示位置，第四个分量表示齐次坐标
    // xyz 范围是 [-1.0, 1.0]，w 范围是 [-1, 1]
    gl_Position = vec4(position, 0.0, 1.0);

    // 设置点的大小
    gl_PointSize = 10.0;
}
