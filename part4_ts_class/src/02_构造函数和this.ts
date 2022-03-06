class Animal {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  say() {
    console.log('my name is ' + this.name + ', my age is ' + this.age)
  }
}
const monkey = new Animal('孙悟空', 10)
monkey.say()