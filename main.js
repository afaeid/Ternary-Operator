// programe using if else 

  // var num1, num2, num3;
var num1 = Number(prompt('Enter first number :'));
var num2 = Number(prompt('Enter second number :'));
var num3 = Number(prompt('Enter third number :'));
// 100, 50, 500
// if(num1>num2 && num1 > num3){
//   document.write('Largest number is '+ num1);
// }
// else if(num2>num3){
//   document.write('Largest number is ' + num2)
// }
// else{
//   document.write('Largest number is '+ num3)
// }


 num1 > num2 && num1 > num3 ? 
 document.write('Largest number is num1 = '+ num1) : 
 num2 > num3 ? 
 document.write('Largest number is num2 = '+ num2) :
 document.write('Largest number is num3 = '+ num3) 
