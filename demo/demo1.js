//涉及变量提升，let与var区别，编译原理，闭包函数等知识点
for(let i=1;i<=5;i++){
    setTimeout(function timer(){
      console.log(i);
    },i*1000)
}

for(var j=1;j<=5;j++){
    setTimeout(function timer(){
      console.log(j);
    },j*1000)
}


