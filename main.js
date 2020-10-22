$("#menu-one").click(function() {
    $("#main-screen").addClass('hide')
    $("#game-screen").removeClass('hide')
    gameStart()
})

$("#menu-two").click(function() {
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

let gameRunning = true;

async function gameStart() {
    let i = 0;
    while (gameRunning) {
        await moveSnake()
        await delay(100)
    }
}

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const moveSnake = () => {
        let left = $("div#pl-one.snake").position().left
        $("div#pl-one.snake").css('left', left+5+'px')
        checkBorders()
}

const checkBorders = () => {
    const snake_one = $("div#pl-one.snake").position()
    const snake_two = $("div#pl-two.snake").position()
    if (snake_one.left <= 0 || snake_one.left >= 1200) {
        gameRunning = false
        console.log("Player one lost!")
    }
    if (snake_two.left <= 0 || snake_two.left >= 1200) {
        gameRunning = false
        console.log("Player two lost!")
    }
    
}
