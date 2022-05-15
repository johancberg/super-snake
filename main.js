let twoPlayers = false; // True when there's two players.
let gameRunning = false;

$("#menu-one").click(function() {
    $("#main-screen").addClass('hide')
    $("#game-screen").removeClass('hide')
    gameStart()
})

$("#menu-two").click(function() {
    twoPlayers = true;
    $("#main-screen").addClass('hide')
    $("#game-screen").removeClass('hide')
    $(".game-info #pl-two").removeClass('hide')
    $("div#pl-one.snake").removeClass('hide')
    gameStart()
})

$("#menu-rules").click(function() {
    $(".rules").addClass('open')
        $(".rules-blocker").addClass('open')
})
$(".rules-blocker").click(function() {
    if($(".rules").css("display") === "block"){
        $(".rules").removeClass('open')
        $(".rules-blocker").removeClass('open')
    }
})

$("#play-again").click(() => {
    $("#end-screen").addClass('hide')
    $("#main-screen").removeClass('hide')
    twoPlayers = false;
    gameRunning = false;
    $("div#pl-one.snake").css('left', 300+'px')
    $("div#pl-one.snake").css('top', 125+'px')
    $("div#pl-two.snake").css('left', 900+'px')
    $("div#pl-two.snake").css('top', 500+'px')
    frontLeft = 5
    frontDown = 0
    left = 0
    up = 0
    degree = 45
})

let left, up
let speed = 5
let degree = -45

// CONTROLLERS!
async function gameStart() {
    left = $("div#pl-one.snake").position().left
    up = $("div#pl-one.snake").position().top
    gameRunning = true;
    while (gameRunning) {
        setTimeout(moveSnake(), 500)
    }
}

 function moveSnake() {
    //left = left + frontLeft
    //up = up + frontDown
    left = left + speed * Math.cos(degree * Math.PI / 180);
    up = up + speed * Math.sin(degree * Math.PI / 180);
    $('html').keydown(async (event) => {
        if (event.which == 65) { // 37, 65 is left & 39, 68 is right
            degree = (degree - 10) % 180
            console.log(degree)
            left = left + speed * Math.cos(degree * Math.PI / 180);
            up = up - speed * Math.sin(degree * Math.PI / 180);
            //frontLeft = degree / 10
            //frontDown = frontDown - 0.1
        } else if (event.which == 68) {
            degree = (degree + 10) % 180
            console.log(degree)
            left = left + speed * Math.cos(degree * Math.PI / 180);
            up = up - speed * Math.sin(degree * Math.PI / 180);
            //frontLeft = frontLeft - 0.1
            //frontDown = frontDown + 0.1
        } 
        /*if (event.which == 37) { // 37 is left & 39 is right
            frontLeft = frontLeft - 0.1
            frontDown = frontDown - 0.1
            console.log(left)
        } else if (event.which == 39) {
            frontLeft = frontLeft - 0.1
            frontDown = frontDown + 0.1
        }*/
    })
    $("div#pl-one.snake").css('left', left+'px')
    $("div#pl-one.snake").css('top', up+'px')
    checkBorders()
}

const checkBorders = () => {
    const snake_one = $("div#pl-one.snake").position()
    const snake_two = $("div#pl-two.snake").position()
    if (snake_one.left <= 0 || snake_one.left >= 1200) {
        gameRunning = false
        $("#game-screen").addClass('hide')
        $("#end-screen").removeClass('hide')
        twoPlayers ? $("#the-winner").html("Player 2 won!") : $("#the-winner").html("You lost!");
    }
    if (twoPlayers && (snake_two.left <= 0 || snake_two.left >= 1200)) {
        gameRunning = false
        $("#game-screen").addClass('hide')
        $("#end-screen").removeClass('hide')
        twoPlayers ? $("#the-winner").html("Player 1 won!") : $("#the-winner").html("You won!");
    }
    
}