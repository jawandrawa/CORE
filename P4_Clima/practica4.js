//parte 1
const fs = require("fs")
exports.load = (citiesFilename) => {
    const aux = fs.readFileSync(citiesFilename)
    return JSON.parse(aux);
}
//parte 2
exports.maxTemp =(cities) => {
    let max = cities[0].main.temp;
    
    for (let i = 1; i < cities.length ;i++){
        if(cities[i].main.temp > max)
            max = cities[i].main.temp;
    }
    return max;
}

exports.minTemp =(cities) => {
    let min = cities[0].main.temp;
    
    for (let i = 1; i < cities.length ;i++){
        if(cities[i].main.temp < min)
            min = cities[i].main.temp;
    }
    return min;
}

exports.minTempMax =(cities) => {
     let max_Min = cities[0].main.temp;
    
    for (let i = 1; i < cities.length ;i++){
        if(cities[i].main.temp_max < max_Min)
            max_Min = cities[i].main.temp_max;
    }
    return max_Min;
   
}
exports.maxTempMin =(cities) => {
    let min_Max = cities[0].main.temp;
    
    for (let i = 1; i < cities.length ;i++){
        if(cities[i].main.temp_min > min_Max)
            min_Max = cities[i].main.temp_min;
    }
    return min_Max;
   
}

exports.averageTemp =(cities) => {
    let N = cities.length;
    let sum = 0;
    for (let i = 0; i < cities.length ;i++){
        sum += cities[i].main.temp;
    }
    return sum/N;
}

exports.warmerAverageTemp =(cities) => {
    
}

//parte 3
exports.maxNorth =(cities) => {
    let Northest = cities[0].coord.lat;
    let res = cities[0].name;
    for (let i = 1; i < cities.length ;i++){
        if(cities[i].coord.lat > Northest)
        {
            Northest = cities[i].coord.lat;
            res = cities[i].name
        }
    }
    return res;
}

exports.maxSouth =(cities) => {
    let suthest = cities[0].coord.lat;
    let res = cities[0].name;
    for (let i = 1; i < cities.length ;i++){
        if(cities[i].coord.lat < suthest)
        {
            suthest = cities[i].coord.lat;
            res = cities[i].name;
        }
    }
    return res;
}

exports.gravityCenter =(cities) => {
    
}

exports.closestGC =(cities) => {
    
}
