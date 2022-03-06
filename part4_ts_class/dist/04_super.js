"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.age = age;
            this.name = name;
        }
        static bark() {
            console.log('动物都会吠');
        }
    }
    class Cat extends Animal {
        constructor(name, age, gender) {
            super(name, age);
            // 必须调用super方法
            this.gender = gender;
        }
        introduce() {
            console.log('my name is ' + this.name + ', my age is ' + this.age);
        }
    }
    const cat = new Cat('小黑猫', 1, 'female');
    cat.introduce();
})();
