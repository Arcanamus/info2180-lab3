window.onload = function() {
    var xArray = [[],[],[],[],[],[],[],[]];
    var oArray = [[],[],[],[],[],[],[],[]];
    var counter = 0;
    var id = 0;
    var x = true;
    var status = document.getElementById("status");
    var gameBoard = document.getElementById("board");
    var boardList = gameBoard.querySelectorAll("div");

    boardList.forEach( element => {
        element.setAttribute("class", "square");
        element.setAttribute("id", id);
        id++;
        element.addEventListener( "click", clicked =>{
            if (x) {
                element.textContent = "X";
                element.classList.add("X");
                counter++;
                var num = element.getAttribute("id");

                if (parseInt(num) == 0 || parseInt(num) == 1 || parseInt(num) == 2){
                    xArray[0].push(parseInt(num));
                    xArray[0].sort();
                } if (parseInt(num) == 3 || parseInt(num) == 4 || parseInt(num) == 5) {
                    xArray[1].push(parseInt(num));
                    xArray[1].sort();
                } if (parseInt(num) == 6 || parseInt(num) == 7 || parseInt(num) == 8) {
                    xArray[2].push(parseInt(num));
                    xArray[2].sort();
                } if (parseInt(num) == 0 || parseInt(num) == 3 || parseInt(num) == 6) {
                    xArray[3].push(parseInt(num));
                    xArray[3].sort();
                } if (parseInt(num) == 1 || parseInt(num) == 4 || parseInt(num) == 7) {
                    xArray[4].push(parseInt(num));
                    xArray[4].sort();
                } if (parseInt(num) == 2 || parseInt(num) == 5 || parseInt(num) == 8) {
                    xArray[5].push(parseInt(num));
                    xArray[5].sort();
                } if (parseInt(num) == 0 || parseInt(num) == 4 || parseInt(num) == 8) {
                    xArray[6].push(parseInt(num));
                    xArray[6].sort();
                } if (parseInt(num) == 2 || parseInt(num) == 4 || parseInt(num) == 6) {
                    xArray[7].push(parseInt(num));
                    xArray[7].sort();
                }

                x = false;
            } else if (!x) {
                element.textContent = "O";
                element.classList.add("O");
                counter++;
                var num = element.getAttribute("id")

                if (parseInt(num) == 0 || parseInt(num) == 1 || parseInt(num) == 2){
                    oArray[0].push(parseInt(num));
                    oArray[0].sort();
                } if (parseInt(num) == 3 || parseInt(num) == 4 || parseInt(num) == 5) {
                    oArray[1].push(parseInt(num));
                    oArray[1].sort();
                } if (parseInt(num) == 6 || parseInt(num) == 7 || parseInt(num) == 8) {
                    oArray[2].push(parseInt(num));
                    oArray[2].sort();
                } if (parseInt(num) == 0 || parseInt(num) == 3 || parseInt(num) == 6) {
                    oArray[3].push(parseInt(num));
                    oArray[3].sort();
                } if (parseInt(num) == 1 || parseInt(num) == 4 || parseInt(num) == 7) {
                    oArray[4].push(parseInt(num));
                    oArray[4].sort();
                } if (parseInt(num) == 2 || parseInt(num) == 5 || parseInt(num) == 8) {
                    oArray[5].push(parseInt(num));
                    oArray[5].sort();
                } if (parseInt(num) == 0 || parseInt(num) == 4 || parseInt(num) == 8) {
                    oArray[6].push(parseInt(num));
                    oArray[6].sort();
                } if (parseInt(num) == 2 || parseInt(num) == 4 || parseInt(num) == 6) {
                    oArray[7].push(parseInt(num));
                    oArray[7].sort();
                }

                x = true;

            }
            xArray.forEach( element => {
                if (element.length == 3) {
                    console.log(element);
                    status.textContent = "Congratulations! X is the Winner!";
                    status.classList.add("you-won");
               }
            } )

            oArray.forEach( element => {
                if (element.length == 3) {
                    console.log(element);
                    status.textContent = "Congratulations! O is the Winner!";
                    status.classList.add("you-won");
               }
            } )

        })

        element.onmouseover = mouseOn => {
            element.classList.add("hover");
        }
        element.onmouseout = mouseOn => {
            element.classList.remove("hover");
        }

    })

}
