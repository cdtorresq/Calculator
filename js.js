calculator= document.querySelector(".completeCalculator");
buttons= document.querySelectorAll(".singleButtons");
operators= document.querySelectorAll(".operators");
activeValues= document.querySelector(".activeValues");
equal= document.querySelector(".equal");
total=document.querySelector(".total");
del= document.querySelector(".del");
acc= document.querySelector(".acc");
let operation= [];
let numeroOperado= 0;
let numeroSinNada=""
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{    
        operation.push(button.textContent);        
        total.textContent=""    
    if(typeof +operation[1]== typeof 1 && operation[1]!=undefined)
    {
        numeroOperado= operation[0]+""+operation[1]
        activeValues.textContent= numeroOperado
        operation.pop();
        operation[0]=numeroOperado
        operation[0]=operation[0].replace("e","2.71828182846")
                
    }
    else if(operation.length==1)
    {

        activeValues.textContent= operation 
        operation[0]=operation[0].replace("e","2.71828182846")
    }    
})
})
operators.forEach((operator)=>{
operator.addEventListener('mousedown',()=>{
numeroSinNada=operation
operationSign= operator.textContent
operation=[]

})
})
equal.onclick= function operate (){
if(operationSign=="+")
{
    let resultadoFinal=(+numeroSinNada)+(+operation)
    total.textContent= resultadoFinal
 }
 else if(operationSign=="-")
{
    let resultadoFinal=(+numeroSinNada)-(+operation)
    total.textContent= resultadoFinal 
 }
 else if(operationSign=="*")
{
    let resultadoFinal=(+numeroSinNada)*(+operation)
    total.textContent= resultadoFinal 
 }
 else if(operationSign=="/")
 {
     let resultadoFinal=(+numeroSinNada)/(+operation)
     total.textContent= resultadoFinal 
  } 
  else if(operationSign=="Exp")
{
    let resultadoFinal=(+numeroSinNada)**(+operation)
    total.textContent= resultadoFinal 
 }
 else if(operationSign=="%")
{
    let resultadoFinal=(+numeroSinNada)*100
    total.textContent= resultadoFinal 
 }
 else if(operationSign=="Ln")
{
    let resultadoFinal=Math.log(+operation)
    total.textContent= resultadoFinal 
 }
 else if(operationSign=="X^(1/2)")
{
    let resultadoFinal=(+operation)**(1/2)
    total.textContent= resultadoFinal 
 }
 else if(operationSign=="X^(1/3)")
{
    let resultadoFinal=(+operation)**(1/3)
    total.textContent= resultadoFinal 
 }
 activeValues.textContent=""
 operation=[]
}
acc.onclick= function eraseeverything(){
    operation=[]
    activeValues.textContent=""
}
del.onclick= function eraselast(){
    operation[0]=operation[0].substring(1)
    activeValues.textContent=operation
}


