"use strict";
// 使用class关键字定义一个类
class Person {
    constructor() {
        // 实例属性。前面没有static关键字，只可以被该对象的实例访问
        this.name = 'yip';
        this.age = 18;
    }
    sayHello() {
        // 实例方法
        console.log('你好');
    }
    static classSayHello() {
        console.log('类方法 说你好');
    }
}
Person.gender = 'male';
const p = new Person();
console.log(p.age);
// console.log(Person.age) 报错 没有这个静态属性（类属性）
console.log(Person.gender);
// 这里不报错， 因为gender是静态属性（类属性）
// console.log(p.gender) 报错，因为没有该实例属性
console.log(p.sayHello());
// 类方法说你好， 只能类调用 实例不能调用
console.log(Person.classSayHello());
