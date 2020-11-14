function stopwatch() {
    let timeElement = document.getElementById('time');
    let timer = null;

    let startBtnElement = document.getElementById('startBtn');
    startBtnElement.addEventListener('click', start);

    let stopBtnElement = document.getElementById('stopBtn');
    stopBtnElement.addEventListener('click', stop);

    function stop() {
        stopBtnElement.disabled = true;
        startBtnElement.disabled = false;

        clearInterval(timer);
    }

    function start() {
        startBtnElement.disabled = true;
        stopBtnElement.disabled = false;

        let seconds = 0;

        timer = setInterval(tick, 1000);

        timeElement.textContent = '00:00';

        function tick() {
            seconds++;

            let currentMinute = ('0' + Math.floor(seconds / 60)).slice(-2);
            let currentSecond = ('0' + seconds % 60).slice(-2);

            timeElement.textContent = `${currentMinute}:${currentSecond}`;
        }
    }    
}
