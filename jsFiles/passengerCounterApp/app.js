


let count=0
let countNum=document.getElementById("countnum");
let savePrevious=document.getElementById("save-previous")

function increment(){
    count=count+1;
    countNum.textContent=count;
   
}
function decrement(){
    count=count-1;
    countNum.textContent=count;
   
}
function save(){
      let countStr=count+" - ";
      savePrevious.textContent+=countStr;
      countNum.textContent=0;
      count=0;

}

