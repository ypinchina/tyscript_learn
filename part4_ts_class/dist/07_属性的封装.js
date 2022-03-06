"use strict";
(function () {
    class Person {
        // 复杂写法
        // private name: string
        // private age: number
        // constructor(name: string, age: number) {
        //   this.name = name
        //   this.age = age
        // }
        // 复合写法
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        // 以下是复杂的写法 下面写可以语法糖的写法
        // getName () {
        //   return this.name
        // }
        // setAge (age: number) {
        //   if (age >= 0) this.age = age
        // }
        // 语法糖写法
        get Name() {
            return this.name;
        }
        set Age(val) {
            if (val >= 0)
                this.age = val;
        }
    }
    const per = new Person('孙悟空', 18);
    console.log(per.Name);
    per.Age = -18; // 被限制
    console.log(per);
    // 属性修饰符 除了static 和 readonly 
    // 还有 public private protected
    // public默认 属性没有访问限制
    // private 私有属性 本类才能访问，外部和子类都不可以访问
    // protected 保护属性 本类和子类可以访问
})();
