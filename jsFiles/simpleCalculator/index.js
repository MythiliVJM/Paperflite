let num1=23;
let num2=34;
document.getElementById("number1").textContent=num1;
document.getElementById("number2").textContent=num2;
let sumEl=document.getElementById("sum-el");
function add(){
   let result=num1+num2;
   sumEl.textContent="Sum: "+result;
}
function sub(){
   let result=num1-num2;
   sumEl.textContent="sub: "+result;
}
function mul(){
    let result=num1*num2;
   sumEl.textContent="multiple: "+result;
}
function divide(){
    let result=num1/num2;
   sumEl.textContent="divide: "+result;
}