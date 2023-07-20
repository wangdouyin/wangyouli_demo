///数组键值规则，有没有引号没有区别，直接通过数组键值方式进行++操作是可以的
const arr=[1];
arr[0]++;
arr['0']++
console.log(arr)
