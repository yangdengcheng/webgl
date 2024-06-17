const myCanvas = document.querySelector('#myCanvas')

const ctx = myCanvas.getContext('2d')


if (ctx !== null) {
    ctx.fillStyle = 'red'
    let left = -200

    setInterval(() => {
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height)
        left++

        if (left > myCanvas.width) {
            left = -200
        }

        ctx.fillRect(left, 100, 200, 200)

    }, 10)
}
