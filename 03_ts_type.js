var a;
a = true;
a = '123';
// 报错   a = 123
// 使用any作类型等于关闭了类型检测
var b;
b = true;
b = null;
b = '123';
// unknow 未知类型
var c;
// unknow 其实就是一个安全的any
// unknow 可以辅助任何属性 但是不能赋值给其他变量
