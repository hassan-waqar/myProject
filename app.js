const FIND_DULICATES = (arr) => {
    res = {}
    resArr = []
    for (let i = 0; i < arr.length; i++){
        if(res[arr[i]] == undefined){
            res[arr[i]] = 1
        } else {
            count = res[arr[i]] 
            res[arr[i]] = count + 1
        }
    }
    
    i = 0
    for (key in res){
        if(res[key] > 1){
            resArr[i] = key
            i++
        }
    }
    return resArr
}

arr = [1, 2, 3, 4, 2, 3, 2]
result = FIND_DULICATES(arr)
console.log(result)










