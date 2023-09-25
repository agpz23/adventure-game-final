document.addEventListener("DOMContentLoaded", function () {
    // Get the start button element
    var startButton = document.getElementById("start-button");

    // Add a click event listener to the button
    startButton.addEventListener("click", function() {
        startGame();
    });

    // Define the function to start the game
    function startGame() {
        var startScreen = document.getElementById("start-container")
        startScreen.remove()
    }
})

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64 * 8.5 // 544
canvas.height = 64 * 4 // 256



const parsedCollisions = collisionsLevel1.parse2D()
const collisionBlocks = parsedCollisions.createObjectsFrom2D()
    

const backgroundLevel1 = new Sprite({
position: {
    x: 0,
    y: 0,
},
imageSrc: './img/wholebgfinal.png'
})


const player = new Player({
    collisionBlocks,
    imageSrc: './img/evcharacter/everly-idle.png',
    frameRate: 3,
    animations: {
        eIdle: {
            frameRate: 3,
            frameBuffer: 10,
            loop: true,
            imageSrc: './img/evcharacter/everly-idle.png'
        },
        eRight: {
            frameRate: 3,
            frameBuffer: 7,
            loop: true,
            imageSrc: './img/evcharacter/everly-right.png'
        },
        eLeft: {
            frameRate: 3,
            frameBuffer: 7,
            loop: true,
            imageSrc: './img/evcharacter/everly-left.png'
        },
        eBack: {
            frameRate: 3,
            frameBuffer: 7,
            loop: true,
            imageSrc: './img/evcharacter/everly-back.png'
        },
    },

    checkCollision(rect1, rect2) {

    }
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
}
function animate() {
    window.requestAnimationFrame(animate)

    backgroundLevel1.draw()
    collisionBlocks.forEach(collisionBlocks => {
        collisionBlocks.draw()
    })

    player.velocity.x = 0
    if (keys.d.pressed) {
        player.switchSprite('eRight')
        player.velocity.x = 5
    } else if (keys.a.pressed)  {
        player.switchSprite('eLeft')
        player.velocity.x = -5}
    else player.switchSprite('eIdle')
    player.draw()
    player.update()
}


animate()



