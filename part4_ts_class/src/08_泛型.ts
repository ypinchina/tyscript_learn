// 当定义函数时 无法确定类型时，可以使用泛型

function getA(valA: any): any {
  return valA
}

// 使用泛型代替any
function getB<T>(valB: T): T {
  return valB
}

// 可以直接调用具有泛型的函数
let result1 = getB(2) // 泛型自动判断
let result2 = getB<string>('hello') // 用户事先判断泛型

// 指定多个泛型
function getC<T, K>(a: T, b: K): T {
  return a
}

// 缩小泛型的范围
interface api1 {
  length: number
}

function getLength<T extends api1>(obj: T): number {
  return obj.length
}
getLength({ name: 'yip', length: 5 })
// 必须传入拥有length属性的对象才可以

class My<T>{ 
  name: T
  constructor(name:T) {
    this.name = name
  }
}
const me = new My<string>('yip')
console.log(me)