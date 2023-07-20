///对比箭头函数和传统函数中this的区别，相对而言箭头函数this很简单，指向箭头函数所在位置的作用域

/*代码1：开始 */

// "use strict";
var obj={
    id:"awesome",
    cool:function coolFn(){
        console.log(this.id);
    }
}

var id="not awesome"
obj.cool()
setTimeout(obj.cool,100);//这段代码在浏览器和nodejs中执行的结果不同。因为浏览器中此行代码this指向window对象，但nondjs中指向空对象。
/*代码1：结束 */





/*代码2：开始 */

// var obj={
//     count:0,
//     cool:function coolFn(){
//         if(this.count<1){
//             setTimeout(() => {
//                 this.count++
//                 console.log("awesome?")
//                 // console.log("awesome?")
//             }, 1000);
//         }
//     }
// }

// obj.cool();
/*代码2：结束 */



