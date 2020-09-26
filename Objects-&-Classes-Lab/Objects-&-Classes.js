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


// 02. Sum by Town

function sumByTown(arr){

    let obj = {}
    
    for (let i = 0; i < arr.length; i += 2) {

        if (obj.hasOwnProperty(arr[i])) { 

            obj[arr[i]] = obj[arr[i]] + Number(arr[i+1]);
        }
        else{
            obj[arr[i]] = Number(arr[i+1]);
        }
    }
    console.log(JSON.stringify(obj));
}

sumByTown(['Sofia','20','Varna','3','Sofia','5','Varna','4']);