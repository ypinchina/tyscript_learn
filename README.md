### 学习tyscript全过程
# typescript的类型

* any 使用any则相当于去除了类型检测
* | 联合类型
* unknow 未知类型
// unknow 其实就是一个安全的any
// unknow 可以辅助任何属性 但是不能赋值给其他变量, 赋值给 any和unknown类型的变量除外
* void  空值， 返回空
* never 永远不会返回结构，没有值，连空都没有

* 数组
// 声明数组的两种方式
//  1. : 类型[]
//  2. : Array<类型>

* 元组  元组就是固定长度的数组 
  


## 编译选项  文件热更新

* 热更新编译  tsc xxx.ts -w
* 使用 tsc -init  初始化 tsconfig.json文件，进行编译配置
* 关于 tsconfig.json里的知识
  1. include用于指定哪些文件被编译  **表示任意文件夹 *表示任意文件
  2. exclude用于取反，不被编译 exclude有默认值 ['node_modules']
  3.  compilerOptions
      1.   "target": "ES3"// 目标 编译到对应的js版本
      2.   "module": 指定使用哪种模块化方案
      3.   "lib": 使用的库 （可选数组）
      4.   "outDir": 用于指定编译后的js文件输出存放的位置目录
      5.   "outFile": 用于将输出的代码合并为一个文件
      6.   "allowJs": false   是否编译目标文件夹下的js文件，默认为false
      7.   "checkJs": false 是否检测js文件是否符合ts语法，默认false
      8.   "removeComments": true  编译是否移除注释
      9.   "noEmit": true  不生成编译后的文件
      10.  "noEmitOnError": true 当有错误时不生成编译文件 
      11.  "alwaysStrict": false 编译使用严格模式 默认为打开 true
      12.  "noImplicitAny":  不允许隐式的any类型
      13.  "noImplicitThis": false 不允许不明确指向的this
      14.  "strictNullChecks": false 严格的空值检查，检查一个变量是否有可能为空的报错
      15.  "strict": false  以上所有及等严格检查的总开关