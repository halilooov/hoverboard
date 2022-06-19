const board = document.querySelector('#board')
const colors = ['#FF1493', '#000080', '#FFD700', '#4B0082', '#F0FFFF', '#696969', '#800080']
const SQUARES_NUMBER = 400

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.setAttribute('id', `${i + 1}`)

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

setTimeout(() => {}, 10000)

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

function rangeOfNumber(start, end) {
    const range = []
    for (let i = start; i <= end; i++) {
        range.push(i)
    }
    return range
}

const clearBoard = () => {
    const board = document.querySelector('#board')
    board.querySelectorAll('.square').forEach((square) => {
        square.style.backgroundColor = '#1d1d1d'
        square.style.boxShadow = `0 0 2px #000`
    })
}

function drawPacman() {
    const yellowIds = [
        ...rangeOfNumber(69, 73),
        ...rangeOfNumber(87, 95),
        ...rangeOfNumber(106, 110),
        ...rangeOfNumber(112, 116),
        ...rangeOfNumber(126, 136),
        ...rangeOfNumber(145, 154),
        ...rangeOfNumber(165, 171),
        ...rangeOfNumber(185, 188),
        ...rangeOfNumber(205, 211),
        ...rangeOfNumber(225, 234),
        ...rangeOfNumber(246, 256),
        ...rangeOfNumber(266, 276),
        ...rangeOfNumber(287, 295),
        ...rangeOfNumber(309, 313),
        // ...rangeOfNumber(177, 179),
        // ...rangeOfNumber(197, 199),
        // ...rangeOfNumber(217, 219)
        ]

        for (let i = 0; i < yellowIds.length; i++) {
            const element = document.getElementById(yellowIds[i])
            element.style.backgroundColor = 'yellow'
            element.style.boxShadow = `0 0 2px yellow, 0 0 10px yellow`
        }       
}


// const intervalPacman = () => {
//     const int = se
// }

setInterval(() => {
    drawPacman()
    setTimeout(() => clearBoard(), 1000)
}, 5000)