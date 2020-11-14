function attachGradientEvents() {
    
    let resultElement = document.getElementById('result');
    let gradientElement = document.getElementById('gradient');

    gradientElement.addEventListener('mousemove', attachPosition);
    gradientElement.addEventListener('mouseout', clearResult);

    function attachPosition(event){
        let currentMouse = event.offsetX;
        let percetage = Math.floor(currentMouse / this.clientWidth * 100);
        resultElement.textContent = percetage + '%';
    }

    function clearResult(){
        resultElement.textContent = '';
    }
}