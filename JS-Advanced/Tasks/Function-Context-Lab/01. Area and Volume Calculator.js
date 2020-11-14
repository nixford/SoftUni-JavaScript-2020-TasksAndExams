function solve(area, vol, input) {
    const objectArray = JSON.parse(input);
    function calc(obj) {
        let areaObj = Math.abs(area.call(obj));
        let volumeObj = Math.abs(vol.call(obj));
 
        return { area: areaObj, volume: volumeObj }
    }
    return objectArray.map(calc);
}

function area() {
    return this.x * this.y;
};

function vol() {
    return this.x * this.y * this.z;
};