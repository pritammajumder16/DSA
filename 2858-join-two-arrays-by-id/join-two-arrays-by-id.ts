type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    const map = new Map<number, ArrayType>();
    arr2.forEach(item => map.set(item.id, item));
    let result: ArrayType[] = []
    arr1.forEach(item => {
        if (map.has(item.id)) {
            result.push({ ...item, ...map.get(item.id) });
            map.delete(item.id);
        } else {
            result.push(item);
        }
    });
    map.forEach(item => result.push(item));
    result.sort((a, b) => a.id - b.id)
    return result;
};