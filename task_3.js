function createObj() {
    return Object.create(null);
}

const obj = createObj();
console.log(obj);
console.log(Object.getPrototypeOf(obj));
