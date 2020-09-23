// 01. Sum First Last

function sumFirstLast(numArr) {
    
    return Number(numArr[0]) + Number(numArr[numArr.length - 1]);
}


// 02. Even Position Elements

function evenPositionElements(numArr){

    let result = '';
    for (let i = 0; i < numArr.length; i++) {
        
        if (i % 2 == 0) {            
            result += numArr[i] + ' ';
        }        
    }
    return result;
}


// 03. Negative / Positive Numbers

function negativeAndPositiveNumbers(numArr) {

    let newNumArr = [];
    for (const num of numArr) {        
        if (Number(num) < 0) {            
            newNumArr.unshift(num);
        }
        else{
            newNumArr.push(num);
        }
    }
    function iterate(item) {
        console.log(item);
      }

    return newNumArr.forEach(iterate);
}


// 04. Last K Numbers Sequence

function lastKNumbersSequence(n, k) {
    let result = [1];
    
    for (let i = 1; i < n; i++) {

        let current = result.slice(k * - 1).reduce((a, b) => a + b);

        result[i] = current;
    }

    console.log(result.join(' '));
}


// 05. Process Odd Numbers

function processOddNumbers(numArr){

    let result = [];    

    for (let i = 0; i < numArr.length; i++) {
        
        if (i % 2 !== 0) {
            
            result.push(numArr[i] * 2);
        }
    }
    result.reverse();

    console.log(...result);
    // console.log(result.join(' '));
}

// let doubledOddPositions = arr => arr
//     .filter((e, n) => n % 2 !== 0)
//     .reverse()
//     .map(e => e * 2)
//     .join(' ');


// 06. Smallest Two Numbers

function smallestTwoNumbers(numArr){

    // let firstTwoMin = []; 
    // firstTwoMin.push(Math.min(...numArr)); 
    // let value = Math.min(...numArr);
    // numArr = numArr.filter(item => item !== value);
    // firstTwoMin.push(Math.min(...numArr));
    // console.log(...firstTwoMin);

    let smallestTwoNumbers = numArr => numArr
    .sort((a, b) => a - b)
    .slice(0, 2);

    console.log(...smallestTwoNumbers(numArr));
}


// 07. Biggest Element

function biggestElement(matrix) {
 
    // let biggestNum = Number.NEGATIVE_INFINITY;
    // matrix.forEach(
    //         row => row.forEach(
    //             col => biggestNum = Math.max(biggestNum, col)));
    // console.log(biggestNum);

    let num = matrix => Math.max.apply(null, matrix
        .reduce((a, b) => a.concat(b)));

    console.log(num(matrix));
}


// 08. Diagonal Sums

function diagonalsSum(matrix) {
    let result = '';
    let mdSum = 0;

    // First Diagonal
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === j) {
                mdSum += matrix[i][j];
            }
        }
    }

    result += mdSum + ' ';
    let sdSum = 0;

    // Second Diagonal
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (j === matrix[i].length - 1 - i) {
                sdSum += matrix[i][j];
            }            
        }
    }

    result += sdSum;
    return result;
}


// 09. Equal Neighbors

function equalPairsCount(matrix) {
    let count = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let rightNeighbor = matrix[i][j + 1];
            if (rightNeighbor !== undefined && rightNeighbor === matrix[i][j]) {
                count++;
            }

            if (i > 0) {
                let upNeighbor = matrix[i - 1][j];
                if (upNeighbor !== undefined && upNeighbor === matrix[i][j]) {
                    count++;
                }
            }
        }
    }

    return count;
}