// 01. Towns to JSON

function townsToJSON(towns) {

    let townsArr = [];
    for (let town of towns.slice(1)) {
        let [empty, townName, lat, lng] = town.split(/\s*\|\s*/);        
        let townObj = { 
            Town: townName, 
            Latitude: Math.round((Number(lat) + Number.EPSILON) * 100) / 100, 
            Longitude: Math.round((Number(lng) + Number.EPSILON) * 100) / 100, 
        }        
        townsArr.push(townObj);
    }
    console.log(JSON.stringify(townsArr));;
}
