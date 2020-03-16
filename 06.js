function foo(el){
  console.log(el, this.id);
}
var obj = {
  id: 'awesome'
}

var arr = [1, 2, 3];
// 调用foo(..)时把 this 绑定到 obj
arr.forEach(foo, obj);