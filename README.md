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
  