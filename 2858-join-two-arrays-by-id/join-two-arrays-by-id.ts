type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    const map = new Map<number, ArrayType>();
    arr2.forEach(item => map.set(item.id, item));
    arr1.forEach(item => {
        if (map.has(item.id)) {
            map.set(item.id, { ...item, ...map.get(item.id) })
        } else {
            map.set(item.id, item)
        }
    });
    return Array.from(map.values()).sort((a, b) => a.id - b.id);

};