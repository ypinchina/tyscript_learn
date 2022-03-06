(function () {
  abstract class Animal {
    // 抽象类即是在class关键字前面加abstract的类
    // 抽象类只用于继承，不能用于创建实例
    name: string
    age: number
    constructor(name: string, age: number) {
      this.age = age
      this.name = name
    }
    abstract bark ():void
  }
  class Cat extends Animal {
    bark () {
      console.log('喵喵喵')
    }
  }
  const cat = new Cat('mimi', 1)
  cat.bark()
})()