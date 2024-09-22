interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function(fn) {
    const obj = {}
    this.forEach(item=>{
        const key = fn(item)
        if(!obj[key]){
            obj[key]=[item]
        }else{
            obj[key].push(item)
        }
    })
    return obj;
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */