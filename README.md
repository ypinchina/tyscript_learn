### 学习 tyscript 全过程

# typescript 的类型

## 基本类型

### 布尔类型 (boolean)

布尔类型表示一个值为真或假的逻辑值。

```
let isDone: boolean = false;
```

### 数字类型 (number)

数字类型表示整数或浮点数。

```
let count: number = 10;
let price: number = 3.99;
```

### 字符串类型 (string)

字符串类型表示一串字符。

```
let message: string = "Hello, TypeScript!";
```

### 数组类型 (array)

数组类型表示一个元素的集合。

```
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: Array<string> = ["apple", "banana", "orange"];
```

### 元组类型 (tuple)

元组类型表示一个已知长度和类型的数组。

```
let person: [string, number] = ["John", 25];
```

### 枚举类型 (enum)

枚举类型表示一组具名的常量值。

```
enum Color {
  Red,
  Green,
  Blue,
}

let color: Color = Color.Red;
```

### 任意类型 (any)

任意类型表示可以是任意类型的值。

```
let value: any = "Hello";
value = 10;
value = true;
```

### 未知类型 (unknow)

### never

永远不会返回结构，没有值，连空都没有

### 空类型 (void)

空类型表示没有任何返回值的函数。

```
function showMessage(): void {
  console.log("Hello");
}
```

## 高级类型

### 联合类型 (union)

联合类型表示一个值可以是多个类型中的一个。

```
let value: string | number = "Hello";
value = 10;
```

### 交叉类型 (intersection)

交叉类型表示多个类型的组合。

```
interface A {
  name: string;
}

interface B {
  age: number;
}

type C = A & B;

let person: C = {
  name: "John",
  age: 25,
};
```

### 函数类型 (function)

函数类型表示函数的参数和返回值类型。

```
type AddFunc = (a: number, b: number) => number;

let add: AddFunc = (a, b) => a + b;
```

### 类型别名 (type)

类型别名可以为一个类型定义一个别名。

```
type Point = {
  x: number;
  y: number;
};

let p: Point = {
  x: 10,
  y: 20,
};
```

### 接口 (interface)

接口定义了一个对象的属性和方法。

```
interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: "John",
  age: 25,
};
```

### 类型断言

类型断言允许我们在编译期间告诉编译器变量的实际类型。

```
let value: any = "Hello";
let length: number = (value as string).length;
```

## 编译选项 文件热更新

- 热更新编译 tsc xxx.ts -w
- 使用 tsc -init 初始化 tsconfig.json 文件，进行编译配置
- 关于 tsconfig.json 里的知识
  1. include 用于指定哪些文件被编译 \**表示任意文件夹 *表示任意文件
  2. exclude 用于取反，不被编译 exclude 有默认值 ['node_modules']
  3. compilerOptions
     1. "target": "ES3"// 目标 编译到对应的 js 版本
     2. "module": 指定使用哪种模块化方案
     3. "lib": 使用的库 （可选数组）
     4. "outDir": 用于指定编译后的 js 文件输出存放的位置目录
     5. "outFile": 用于将输出的代码合并为一个文件
     6. "allowJs": false 是否编译目标文件夹下的 js 文件，默认为 false
     7. "checkJs": false 是否检测 js 文件是否符合 ts 语法，默认 false
     8. "removeComments": true 编译是否移除注释
     9. "noEmit": true 不生成编译后的文件
     10. "noEmitOnError": true 当有错误时不生成编译文件
     11. "alwaysStrict": false 编译使用严格模式 默认为打开 true
     12. "noImplicitAny": 不允许隐式的 any 类型
     13. "noImplicitThis": false 不允许不明确指向的 this
     14. "strictNullChecks": false 严格的空值检查，检查一个变量是否有可能为空的报错
     15. "strict": false 以上所有及等严格检查的总开关

## 类的学习

    // 抽象类即是在class关键字前面加abstract的类
    // 抽象类只用于继承，不能用于创建实例

    抽象方法只能在抽象类中定义，抽象方法没有方法体，需要子类实现和重载



    接口interface和type的区别 interface可以重复声明，两个同名接口会混入一起合并


    接口只用于定义类的接口，里面所有的方法都不能有方法体，属性也没属性值，都只有定义，没有实现
    而抽象类中，可以由抽象方法也可以有普通方法

    类使用implements对早已定义好的接口进行实现
    class Cat implements Animals {

    }

# 贪吃蛇游戏开发

使用 stylus

为了浏览器能兼容 css3 使用 postcss postcss-loader postcss-preset-env 来进行增加属性前缀

as 类型断言

！ 非空断言

除了枚举 基本学习完毕 游戏可正常游玩
