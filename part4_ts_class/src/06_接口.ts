(function () {
  type myType = {
    name: string,
    age: number
  }
  const me:myInterFace = {
    name: 'yip',
    age: 12,
    sayHello: function (): void {
      throw new Error("Function not implemented.")
    }
  }
  // 接口 用于定义一个类的结构
  interface myInterFace {
    name: string,
    age: number,
    sayHello ():void
  }
  console.log(me)
  class My implements myInterFace {
    name: string
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
    sayHello () {
      console.log(2)
    }
  }
})()