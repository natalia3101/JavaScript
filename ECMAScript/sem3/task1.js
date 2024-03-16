// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.
function getPrototypeChain(obj) {
    const chain = [];
    let currentObject = obj;
    while (currentObject !== null) {
        chain.push(currentObject);
        currentObject = Object.getPrototypeOf(currentObject);
    }
    return chain;
}
const obj = {};
const prototypeChain = getPrototypeChain(obj);
console.log(prototypeChain);