const largestSubarraySum = (array) => {
    let n = array.length

    debugger
    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            for(let k = i; k <= j; k++){
                console.log(array[k])
            }
        }
    }
}