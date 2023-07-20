///
/*代码1：开始 */
//默认非严格模式下this指向调用函数的作用域
// function foo(a){//烟雾弹，等于在函数内部生成了一个var a;  又因为“foo(9)”调用处传入了9，所以默认执行a=9,属于函数内部作用域
//     // "use strict"
//     a=3//烟雾弹，函数里面的a和this.a没有任何关系
//     console.log(this.a);//this为调用处作用域所以为2
// }
// var a=2;
// foo(9)//此处调用，所以this指向此处的作用域对象。此处a为2
/*代码1：结束 */

/*代码2：开始 */
//改代码基于上面的代码1，未了证明：代码严格模式设置可以以函数未单位，如果函数外设置则下面代码都生效
//  var a=2;
//  (function(){
//     "use strict"
//     foo()  
//  })()
//  function foo(){
//     console.log(this.a);
//  }
/*代码2：结束 */

/*代码3：开始 */
function foo(){
    var a=3;
    console.log(this.a)
}

var obj={
    a:2,
    foo:foo
}

obj.foo()
/*代码3：结束 */
