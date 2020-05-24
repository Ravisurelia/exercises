(function() {
    var currentPlayer = 'player1';
    var slots = $(".slot");
    for (var i = 0; i < 7; i++){
        var slotsInRow = $(".row" + i);
        //console.log(slotsInRow);
    }
    //array for the all possible diagonal wins
    var diagonalWin = [
        [0, 7, 14, 21],
        [1, 8, 15, 22],
        [2, 9, 16, 23],
        [3, 8, 13, 18],
        [4, 9, 14, 19],
        [5, 10, 15, 20],
        [6, 13, 20, 27],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 14, 19, 24],
        [10, 15, 20, 25],
        [11, 16, 21, 26],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
        [14, 21, 28, 35],
        [15, 20, 25, 30],
        [16, 21, 26, 31],
        [17, 22, 27, 32],
        [18, 25, 32, 39],
        [19, 26, 33, 40],
        [20, 27, 34, 41],
        [21, 26, 31, 36],
        [22, 27, 32, 37],
        [23, 28, 33, 38],
    ];

    //selecting the columns to check the win 
    $('.column').on('click', function(e) {
        var selectedColumn = $(e.currentTarget);
        var slotsInColumn = selectedColumn.children(); // selectedColumn.find('.slot');//appending child to parent element
        
        //we are looking for the epmty slots. mainly the bottom last empty slot!!
        var emptySlotFound;
        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInColumn.eq(i).hasClass('player1')
                &&
                !slotsInColumn.eq(i).hasClass('player2')
            ) {
                slotsInColumn.eq(i).addClass(currentPlayer);
                emptySlotFound = true;
                break; // we have to break to stop the loop
            }
        }
  
        if (!emptySlotFound) { 
            return;// (i == -1) {  no empty slot found
        }
    
  
        //checking for the virtical win
        function verticalWin(slotsInColumn) {
            var y = 0;
            for (var i = 0; i < selectedColumn.length; i++) {
                if (selectedColumn.eq(i).hasClass(currentPlayer)) {
                    count++;
                    if (y == 4) {
                        return true; //stop the loop at 4 otherwise it will continue to check the holes
                    }
                } else {
                     y = 0; //this checks if the same color count !4 then will restart the count
                }
            }
        }
        console.log("match: ", verticalWin);

        // checking for the horizontal win
        function horizontalWin(slotsInRow) {
            var x = 0;
            for (var i = 0; i < slotsInRow.length; i++){
                if (slotsInRow.eq(i).hasClass(currentPlayer)){
                    x++;
                    if(x===4){
                        return true;
                    }else {
                        x = 0 ; //this checks if the same color count !4 then will restart the count
                    }
                }
            }
        }
        console.log("match: ", horizontalWin);
        
        function diagonalcheck (slots){
            var count = 0;
            for ( var a = 0; a < diagonalWin.length; a++){
                for (var m = 0; m < diagonalWin[a].length; m++){
                    if (slots.eq(diagonalcheck[a][m]).hasClass(currentPlayer)){
                        count++;
                        if (count === 4){
                            return true;
                        }
                    }else {
                        count = 0;
                    }
                }
            }
        }

        if (checkForVictory(slotsInColumn)) {
        return("we have a winner!!!")
        } else if (checkForVictory($('.row' + i))) { // check row
            return ("winner!!!");
        } else if (diagonalcheck) { 
            return ("Won diagonalllllyyy!!!");
            // checking diagonal
        } else {
            switchPlayers();
        };
    });

    function switchPlayers() {
        if (currentPlayer == 'player1') {
            currentPlayer = 'player2';
        } else {
            currentPlayer = 'player1';
         }
    }
         
})();