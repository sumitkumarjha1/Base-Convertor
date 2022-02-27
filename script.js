"use strict";

let firstNum=document.getElementById("firstNum");
let SecondNum=document.getElementById("SecondNum");
let message = document.getElementById("message");
const convert_from =document.getElementById("convert-from");
const convert_to=document.getElementById("convert-to");

const Convert=document.getElementById("Convert");
const Swap=document.getElementById("Swap");
const Clear=document.getElementById("Clear");



function change(){
   let num = firstNum.value;
   let basef=+convert_from.value;
   let baset=+convert_to.value;
   

   var base_convert = function(number, initial_base, change_base) {
      
       return parseInt(number,initial_base)
       .toString(change_base);
   }
   let numb=base_convert(num,basef,baset);
   if(isNaN(numb)){
      SecondNum.value=`Please enter valid number`;
   }
   else {SecondNum.value=numb;}
 
   
}

function swap(){
   let x=SecondNum.value;
   SecondNum.value=firstNum.value;
   firstNum.value=x;

   let y=convert_from.value;
   convert_from.value=convert_to.value;
   convert_to.value=y;
   
}


Convert.addEventListener("click", change);
Swap.addEventListener("click",swap);
Clear.addEventListener("click",()=>{
   firstNum.value="";
   SecondNum.value="";
   convert_from.value=10;
   convert_to.value=10;
});

 
