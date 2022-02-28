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
c = '241';
//报错 a = c
// 解决方式一： 提前判断
if (typeof c === 'string') {
    a = c;
}
// 方式二： 类型断言， 认为c就是字符串
a = c;
a = c;
// unknow 其实就是一个安全的any
// unknow 可以辅助任何属性 但是不能赋值给其他变量, 赋值给 any和unknown类型的变量除外
function fn1() { }
// void返回空值
function fn2() {
    throw new Error('报错了');
}
// 不会有返回值，连空都不返回
// 对象类型
var o1;
// 一般不这样声明
var o2;
o2 = { name: '2323' };
var o3;
o3 = { name: 'yip' };
var o4;
// 即可以多个除name必须外的其他属性，属性可以任意类型
// 函数类型
var fn3;
fn3 = function (s1, s2) {
    return s1 + s2;
};
// 数组
// 声明数组的两种方式
//  1. : 类型[]
//  2. : Array<类型>
var arr1;
// 即所以数组元素都是数字类型，否则报错
arr1 = [1, 2, 3];
var arr2;
arr2 = ['2', '34'];
// 元组 元组就是固定长度的数组
var brr2;
brr2 = ['123', 22];
// enum 枚举
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 1] = "male";
    Gender[Gender["female"] = 0] = "female";
})(Gender || (Gender = {}));
var mySelf = {
    name: 'yip',
    gender: Gender.male
};
console.log(mySelf);
