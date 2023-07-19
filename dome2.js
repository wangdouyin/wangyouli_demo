////知识点包括：闭包原理，作用域原理，变量声明，对代码执行顺序的理解
function foo(){
    let a=2
    function baz(){
        console.log(a);
    }
    bar(baz)
}
function bar(fn){
    const a=3
    fn()
}
var a=4;
foo()

