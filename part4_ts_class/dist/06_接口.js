"use strict";
(function () {
    const me = {
        name: 'yip',
        age: 12,
        sayHello: function () {
            throw new Error("Function not implemented.");
        }
    };
    console.log(me);
    class My {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log(2);
        }
    }
})();
