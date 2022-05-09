function fibonazi(num){
    if (num <= 1) return num;
    return fibonazi(num - 2) + fibonazi(num - 1);
  }
  var fs = require('fs');
  var content = fs.readFileSync('activity.txt', 'utf8');
  let num = content.toString();
  let fib = fibonazi(num);
  console.log("Ingresar un numero:"+num);
  console.log("F("+num+")="+fib);