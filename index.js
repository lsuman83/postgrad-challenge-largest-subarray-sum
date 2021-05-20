const largestSubarraySum = (array) => {
    let n = array.length
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const sumArray = []
    const isAbove = (value) => value >= 0
    const isBelow = (value) => value < 0
     

    if(array.every(isAbove)){
        sumArray.push(array.reduce(reducer))
    }else if(array.every(isBelow)){
        sumArray.push(0);
    }else {
    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            const array2 = []
            for(let k = i; k <= j; k++){
                array2.push(array[k])
            }
            sumArray.push(array2.reduce(reducer))
        }
        
    }
}
     return Math.max.apply(null, sumArray)
}