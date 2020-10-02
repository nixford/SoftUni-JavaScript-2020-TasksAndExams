function solve() {

    let expression = document.getElementById("expressionOutput");
    let result = document.getElementById("resultOutput");
    
    document.querySelector('.keys').addEventListener('click', symbolClicked);
    document.querySelector('.clear').addEventListener('click', clear);

    function clear(){
        expression.textContent = '';
        result.textContent = '';
    }


    function symbolClicked(event){
        let buttonPressed = event.target.value;

        switch (buttonPressed){
            case "/":
            case "*":
            case "+":
            case "-":
                expression.textContent += ` ${buttonPressed} `;
                break;
            case "=":
                let [
                    leftOperand, 
                    operator, 
                    rightOperand
                ] = expression.textContent.split(" ");

                if (!rightOperand || !operator) {
                    result.textContent = "NaN";
                } else {
                    result.textContent = calculateResult(+leftOperand, operator, +rightOperand);
                }
                break;
                default:
                    expression.textContent += buttonPressed;
                    
        }
     }

     function calculateResult(leftOperand, operator, rightOperand){
        switch(operator){
            case "*":
                return leftOperand * rightOperand;
                
            case "/":
                return leftOperand / rightOperand;
              
            case "+":
                return leftOperand + rightOperand;
              
            case "-":
                return leftOperand - rightOperand;              
        }
     }
}