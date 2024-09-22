type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    const result: Obj[][] = []
    for (let i: number = 0; i < arr.length; i = i + size) {
        result.push(arr.slice(i, i + size))
    }
    return result
};
