type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): JSONValue {
    if (Array.isArray(obj)) {
        const finalArr = []
        for (const index in obj) {
            const temp = obj[index]
            if (temp && (Array.isArray(temp) || typeof temp == "object")) {
                finalArr.push(compactObject(temp))
            }
            else if (temp)
                finalArr.push(temp)
        }
        return finalArr;
    } else {
        Object.keys(obj).forEach(key => {
            const temp = obj[key]
            if (temp && (Array.isArray(temp) || typeof temp == "object")) {
                const val = compactObject(temp)
                if (val) {
                    obj[key] = val
                } else {
                    delete obj[key]
                }
            }
            else if (!temp) {
                delete obj[key]
            }
        })
        return obj;
    }
};