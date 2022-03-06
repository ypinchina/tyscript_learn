(function () {
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        Person.prototype.getName = function () {
            return this.name;
        };
        Person.prototype.setAge = function (age) {
            this.age = age;
        };
        return Person;
    }());
    var per = new Person('孙悟空', 18);
    per.setAge(-18);
    console.log(per);
    // 属性修饰符 除了static 和 readonly 
    // 还有 public private protected
    // public默认 属性没有访问限制
    // private 私有属性 本类才能访问，外部和子类都不可以访问
    // protected 保护属性 本类和子类可以访问
})();
