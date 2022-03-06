"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.age = age;
            this.name = name;
        }
    }
    class Cat extends Animal {
        bark() {
            console.log('喵喵喵');
        }
    }
    const cat = new Cat('mimi', 1);
    cat.bark();
})();
