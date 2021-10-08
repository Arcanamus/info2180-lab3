window.onload = function() {
    var gameBoard = document.getElementById("board");
    console.log(gameBoard);

    var boardList = gameBoard.querySelectorAll("div");
    boardList.forEach( element => {
        element.setAttribute("class", "square")
    })


}
