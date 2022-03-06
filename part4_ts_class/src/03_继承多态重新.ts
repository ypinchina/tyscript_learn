(function() {
  class Animal {
    name: string
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
    run () {
      console.log('动物会奔跑')
    }
    bark () {
      console.log('动物会叫')
    }
    introduce() {
      console.log('my name is ' + this.name + ', my age is ' + this.age)
    }
  }
  class Cat extends Animal {
    bark () {
      // 重写父类的同名方法
      console.log('猫会喵喵叫')
    }
  }
  class Dog extends Animal {
    bark () {
      console.log('狗会汪汪叫')
    }
  }
  // OCP原则 开放关闭原则 拓展开放，修改关闭

  const cat = new Cat('小黄猫', 1)
  cat.bark()
  cat.introduce()
  const dog = new Dog('小黑狗', 2)
  dog.bark()
  dog.introduce()
})()