"use strict";
// 当定义函数时 无法确定类型时，可以使用泛型
function getA(valA) {
    return valA;
}
// 使用泛型代替any
function getB(valB) {
    return valB;
}
// 可以直接调用具有泛型的函数
let result1 = getB(2); // 泛型自动判断
let result2 = getB('hello'); // 用户事先判断泛型
// 指定多个泛型
function getC(a, b) {
    return a;
}
function getLength(obj) {
    return obj.length;
}
getLength({ name: 'yip', length: 5 });
// 必须传入拥有length属性的对象才可以
class My {
    constructor(name) {
        this.name = name;
    }
}
const me = new My('yip');
console.log(me);
