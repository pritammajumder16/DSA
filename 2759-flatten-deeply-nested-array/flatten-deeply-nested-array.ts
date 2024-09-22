type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    const finalArr = []
    if (Array.isArray(arr)) {
        arr.forEach(item => {
            if ( n > 0&&Array.isArray(item)) {
                finalArr.push(...flat(item, n - 1))
            } else {
                finalArr.push(item)
            }

        })
        return finalArr;
    }
};