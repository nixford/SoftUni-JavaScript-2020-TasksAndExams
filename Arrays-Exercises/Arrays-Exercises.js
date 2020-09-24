// 01. Print Array with Given Delimiter

function arrayDelimiter(stringArr) {

    let delimiter = stringArr.pop();

    console.log(stringArr.join(delimiter));
}


// 02. Print every N-th Element from an Array

function everyNthElement(stringArr) {

    let step = Number(stringArr.pop());    
    for (let i = 0; i < stringArr.length; i+=step) {    

        console.log(stringArr[i]);
    }
}


// 03. Add and Remove Elements

function addAndRemoveElements(stringArr){

    let numbers = [];
    for (let i = 1; i <= stringArr.length; i++) {
        
        if (stringArr[i - 1] == 'add') {            
            numbers.push(i);
        }
        else if (stringArr[i - 1] == 'remove') {            
            numbers.pop(i);
        }
    }
    
    if (numbers.length == 0) {        
        console.log('Empty');
    }
    else{
        console.log(numbers.join('\n')); // Print on new line each element
    }    
}


// 04. Rotate Array

function rotateArray(stringArr){

    let rotationsCount = Number(stringArr.pop());
    for (let i = 0; i < rotationsCount; i++) {
        
        let lastElement = stringArr.pop();
        stringArr.unshift(lastElement);
    }
    console.log(...stringArr);

    // function rotateArray(array) {
    //     let rotationsCount = Number(array.pop());
    //     rotationsCount %= array.length;
    
    //     for (let i = 0; i < rotationsCount; i++) {
    //         let lastElement = array.pop();  
    //         array.unshift(lastElement);      
    //     }
    //     console.log(array.join(' '));
    // }
}


// 05. Extract Increasing Subsequence from Array

function extractIncreasingSubsequence(numArr){
    
    let increasingSecArr = [];
    maxNumInArr = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < numArr.length; i++) {

        if (numArr[i] >= maxNumInArr) {
            
            increasingSecArr.push(numArr[i]);
        }
        maxNumInArr = Math.max(...increasingSecArr);
    }
    return increasingSecArr.join('\n');
}


// 06. Sort Array

function sortArray(stringArr) {

    // stringArr = stringArr.sort((a, b) => a.localeCompare(b));
    // stringArr = stringArr.sort((a, b) => a.length - b.length);
    stringArr.sort((a, b) => sortByLengthThenByNameCaseInsens(a, b));    

    function sortByLengthThenByNameCaseInsens(a, b) {
        return a.length - b.length || sortByName(a, b); 
    } // First sort by length in ascending order as primary criteria

    function sortByName(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    } // by alphabetical value in ascending order as second criteria. 
    // The comparison is case-insensitive.

    console.log(stringArr.join('\n'));
}


// 07. Magic Matrices

function magicMatrices(matrix){

    let IsMagic = true;
    let sumCurrRow = 0;
    let sumCurrColl = 0;    

    for (let row = 0; row < matrix.length; row++) {        
        for (let col = 0; col < matrix[row].length; col++) {
            
            sumCurrRow += matrix[row][col];          
        }

        for (let row = 0; row < matrix.length; row++) {            
            for (let col = 0; col < matrix.length; col ++) {
            
                sumCurrColl += matrix[col][row];            
            }
            if (sumCurrRow != sumCurrColl) {
                IsMagic = false;
                break;
            }
            sumCurrColl = 0;     
        }
        sumCurrRow = 0;        
    }    
    console.log(IsMagic);
}


// 08. Tic-Tac-Toe

function ticTacToe(matrix) {

    let ticTacToeMatrix = [];
    for(let i=0; i<3; i++) {
        ticTacToeMatrix[i] = [];
        for(let j=0; j<3; j++) {
            ticTacToeMatrix[i][j] = 'false';
        }
    }    

    let IsFirstPlayerTurn = true;
    for (let i = 0; i < matrix.length; i++) {

        // Check if there is free space on dushboard          
          function exists(ticTacToeMatrix, search) {
              return ticTacToeMatrix.some(row => row.includes(search));
          }
          
          if (!exists(ticTacToeMatrix, 'false')) {
              console.log('The game ended! Nobody wins :(');
              // Print matrix
              let matrixPrint = '';
              for (let i = 0; i < ticTacToeMatrix.length; i++) {
                  for (let j = 0; j < ticTacToeMatrix[i].length; j++) {
                      
                      matrixPrint += ticTacToeMatrix[i][j] + '\t';
                  }
                  matrixPrint += '\n';                                         
              }
              console.log(matrixPrint);

              break;
          }


        if (IsFirstPlayerTurn) {
            let firstPlayerRow = matrix[i][0];
            let firstPlayerCol = matrix[i][2];
            if (ticTacToeMatrix[firstPlayerRow][firstPlayerCol] != 'false') {
                console.log('This place is already taken. Please choose another!');
                continue;
            } else {
                ticTacToeMatrix[firstPlayerRow][firstPlayerCol] = 'X';
                IsFirstPlayerTurn = false;

                if (ticTacToeMatrix[0][0] == 'X' &&
                    ticTacToeMatrix[0][1] == 'X' &&
                    ticTacToeMatrix[0][2] == 'X' ||
                    ticTacToeMatrix[0][0] == 'X' &&
                    ticTacToeMatrix[1][0] == 'X' &&
                    ticTacToeMatrix[2][0] == 'X' ||
                    ticTacToeMatrix[2][0] == 'X' &&
                    ticTacToeMatrix[2][1] == 'X' &&
                    ticTacToeMatrix[2][2] == 'X' ||
                    ticTacToeMatrix[2][2] == 'X' &&
                    ticTacToeMatrix[1][2] == 'X' &&
                    ticTacToeMatrix[0][2] == 'X' ||
                    ticTacToeMatrix[0][0] == 'X' &&
                    ticTacToeMatrix[1][1] == 'X' &&
                    ticTacToeMatrix[2][2] == 'X') {
                    
                        console.log('Player X wins!');
                        let matrixPrint = '';

                        for (let i = 0; i < ticTacToeMatrix.length; i++) {
                            for (let j = 0; j < ticTacToeMatrix[i].length; j++) {
                                
                                matrixPrint += ticTacToeMatrix[i][j] + '\t';
                            }
                            matrixPrint += '\n';                                         
                        }
                        console.log(matrixPrint);
                        break;
                    }                
                
            }                        
        }
        else{
            let secondPlayerRow = matrix[i][0];
            let secondPlayerCol = matrix[i][2];            
            if (ticTacToeMatrix[secondPlayerRow][secondPlayerCol] != 'false') {
                console.log('This place is already taken. Please choose another!');
                continue;
            } else {
                ticTacToeMatrix[secondPlayerRow][secondPlayerCol] = 'O';
                IsFirstPlayerTurn = true;

                if (ticTacToeMatrix[0][0] == 'O' &&
                    ticTacToeMatrix[0][1] == 'O' &&
                    ticTacToeMatrix[0][2] == 'O' ||
                    ticTacToeMatrix[0][0] == 'O' &&
                    ticTacToeMatrix[1][0] == 'O' &&
                    ticTacToeMatrix[2][0] == 'O' ||
                    ticTacToeMatrix[2][0] == 'O' &&
                    ticTacToeMatrix[2][1] == 'O' &&
                    ticTacToeMatrix[2][2] == 'O' ||
                    ticTacToeMatrix[2][2] == 'O' &&
                    ticTacToeMatrix[1][2] == 'O' &&
                    ticTacToeMatrix[0][2] == 'O' ||
                    ticTacToeMatrix[0][0] == 'O' &&
                    ticTacToeMatrix[1][1] == 'O' &&
                    ticTacToeMatrix[2][2] == 'O') {
                    
                        console.log('Player O wins!');
                        let matrixPrint = '';

                        for (let i = 0; i < ticTacToeMatrix.length; i++) {
                            for (let j = 0; j < ticTacToeMatrix[i].length; j++) {
                                
                                matrixPrint += ticTacToeMatrix[i][j] + '\t';
                            }
                            matrixPrint += '\n';                                         
                        }
                        console.log(matrixPrint);
                        break;
                    }                
            }
        } 
    }    
}



