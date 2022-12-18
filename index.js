//  1)function call without any events (like onclick,hover) -function definition and calling order is not important

function myFunction(a, b) {
  return a * b;
}
var x = myFunction(4, 3);
console.log(x)
document.getElementById("demo").innerHTML = x;
// document.write(x)
document.write("<br>");

//named function call vs self invocation
//named function
function loki() {
    console.log("foo");
  }
  loki();
//self invoke or immediate function call
  (function ()  {
    document.write("welcome to js clases");
  })();
  // 2)function call by using onclick events through html
  function myFunction2(a=500, b=600) {
    // document.getElementById("demo1").innerHTML =  a * b;
    alert(a * b)
}
//dynamic value
function myFunction7() {
    var c=+prompt("enter number c");
    var d=+prompt("enter number d")
    alert(c - d);
}

//function call on js file by using event listiner
//js
$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });
//left(html).(right-action)
//under stand of js functions
// 1)first we write functions according to our business logic.
// 2)for execute the function we do function call.
