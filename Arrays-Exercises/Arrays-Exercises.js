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

// function solve(input) {
//     let arr = [
//         [false, false, false],
//         [false, false, false],
//         [false, false, false]
//     ];
//     let player = 'X';
 
//     for (let line of input) {
//         [currRow, currCol] = line.split(' ').map(Number);
 
//         if (arr[currRow][currCol] !== false) {
//             console.log('This place is already taken. Please choose another!');
//             continue;
//         }
 
//         arr[currRow][currCol] = player;
 
//         //check horizontal and vertical
//         for (let i = 0; i < 3; i++) {
//             if (
//                 arr[i][0] === player &&
//                 arr[i][1] === player &&
//                 arr[i][2] === player
//             ) {
//                 console.log(`Player ${player} wins!`);
//                 printMatrix();
//                 return;
//             } else if (
//                 arr[0][i] === player &&
//                 arr[1][i] === player &&
//                 arr[2][i] === player
//             ) {
//                 console.log(`Player ${player} wins!`);
//                 printMatrix();
//                 return;
//             }
//         }
 
//         //check left to right
//         if (
//             arr[0][0] === player &&
//             arr[1][1] === player &&
//             arr[2][2] === player
//         ) {
//             console.log(`Player ${player} wins!`);
//             printMatrix();
//             return;
//         }
 
//         //check right to left
//         else if (
//             arr[0][2] === player &&
//             arr[1][1] === player &&
//             arr[2][0] === player
//         ) {
//             console.log(`Player ${player} wins!`);
//             printMatrix();
//             return;
//         }
 
//         let theresFalse = false;
 
//         for (let row = 0; row < arr.length; row++) {
//             if (arr[row].includes(false)) {
//                 theresFalse = true;
//             }
//         }
 
//         if (!theresFalse) {
//             console.log('The game ended! Nobody wins :(');
//             printMatrix();
//             return;
//         }
 
//         player = player === 'X' ? 'O' : 'X';
//     }
 
//     function printMatrix() {
//         for (let row = 0; row < arr.length; row++) {
//             console.log(arr[row].join('\t'));
//         }
//     }
// }


// 


// 09. Diagonal Attack

function diagonalAttack(array) {
    let matrix = fillMatrix(array);
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {
        firstDiagonal += matrix[row][row];
        secondDiagonal += matrix[row][matrix.length - 1 - row]
    }

    if (firstDiagonal === secondDiagonal) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row !== col && col !== matrix.length - 1 - row) {
                    matrix[row][col] = firstDiagonal;
                }                
            }            
        }
    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }

    function fillMatrix(array) {
        let matrix = [];
        for (let item of array) {
            let row = item.split(' ').map(x => Number(x));
            matrix.push(row);
        }

        return matrix;
    }
}


// 10. Orbit

function orbit(input) {
    let rows = input[0], cols = input[1], x = input[2], y = input[3];
    let matrix = fillMatrix(rows);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }
    printMatrix(matrix);

    function fillMatrix(rows) {
        let matrix = [];
        for (let row = 0; row < rows; row++) {
            matrix.push([]);
        }
        return matrix;
    }

    function printMatrix(matrix) {
        for (let line of matrix) {
            console.log(line.join(" "));
        }
    }
}


// 11. Spiral Matrix

function spiralMatrix(rows, cols) {
    let matrix = fillMatrix(rows);

    let number = 1;
    let startRow = 0;
    let endRow = rows - 1;
    let startCol = 0;
    let endCol = cols - 1;

    while (startRow <= endRow || startCol <= endCol) {
        for (let i = startRow; i <= endRow; i++) {
            matrix[startRow][i] = number;
            number++;
        }

        for (let i = startRow + 1; i <= endRow; i++) {
            matrix[i][endCol] = number;
            number++;
        }

        for (let i = endCol - 1; i >= startCol; i--) {
            matrix[endRow][i] = number;
            number++;
        }

        for (let i = endRow - 1; i > startRow; i--) {
            matrix[i][startCol] = number;
            number++;
        }

        startRow++;
        endRow--;
        startCol++;
        endCol--;
    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }

    function fillMatrix(rows) {
        let matrix = [];
        for (let row = 0; row < rows; row++) {
            matrix.push([]);
        }

        return matrix;
    }
}

