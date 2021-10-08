window.onload = function() {
    var winArray = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    var xArray = [];
    var oArray = [];
    var counter = 0;
    var x = true;

    var gameBoard = document.getElementById("board");
    console.log(gameBoard);

    var boardList = gameBoard.querySelectorAll("div");
    boardList.forEach( element => {
        element.setAttribute("class", "square");
        element.addEventListener( "click", clicked =>{
            if (x) {
                element.textContent = "X";
                element.classList.add("X");
                counter++;
                x = false;
            } else if (!x) {
                element.textContent = "O";
                element.classList.add("O");
                counter++;
                x = true;
            }

        })
    })


}
