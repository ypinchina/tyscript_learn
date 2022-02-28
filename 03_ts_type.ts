let a: boolean | string
a = true
a = '123'
// 报错   a = 123


// 使用any作类型等于关闭了类型检测
let b: any
b = true
b = null
b = '123'

// unknow 未知类型
let c: unknown

c = '241'

//报错 a = c
// 解决方式一： 提前判断
if (typeof c === 'string') {
  a = c
} 
// 方式二： 类型断言， 认为c就是字符串
a = c as string

a = <string> c
// unknow 其实就是一个安全的any
// unknow 可以辅助任何属性 但是不能赋值给其他变量, 赋值给 any和unknown类型的变量除外

function fn1 (): void {}

// void返回空值

function fn2 (): never {
  throw new Error('报错了')
}

// 不会有返回值，连空都不返回


// 对象类型

let o1: object
// 一般不这样声明
let o2: {name: string}
o2 =  {name: '2323'}


let o3: {name: string, age?: number}
o3 = {name: 'yip'}

let o4: {name: string, [propName: string]: unknown}

// 即可以多个除name必须外的其他属性，属性可以任意类型


// 函数类型

let fn3: (s1: number, s2: number) => number
fn3 = (s1, s2) => {
  return s1 + s2
}


// 数组

// 声明数组的两种方式
//  1. : 类型[]
//  2. : Array<类型>


let arr1: number[]
// 即所以数组元素都是数字类型，否则报错
arr1 = [1,2,3]


let arr2: Array<string>
arr2 = ['2', '34']


