function deepEqual(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) {
        return false;
    }
    
    for (let key of keys1) {
        if (!keys2.includes(key) || obj1[key] !== obj2[key]) {
            return false;
        }
    }
    
    return true;
}

var obj1 = {name: "person1", age: 5};
var obj2 = {age: 5, name: "person1"};

console.log(deepEqual(obj1, obj2)); // true