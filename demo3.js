///模块原理，通过函数的形式声明模块概念

function CoolModule(){
    var something="cool"
    var another=[1,2,3]
    function doSomething(){
        console.log(something)
    }
    function doAnother(){
        console.log(another)
    }
    return {
        doSomething:doSomething,
        doAnother:doAnother
    }
}


var foo=CoolModule()
foo.doSomething()
foo.doAnother()

