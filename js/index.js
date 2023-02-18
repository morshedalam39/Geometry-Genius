// use id get data  input feild funcation 
let serial = 0;
function inputFieldValuById(num1,num2){
    console.log(num1)
    console.log(num2)

    if (num1 == "" || num2 == "") {
      return "requard";
    }
   else if (num1 <= 0 || num2 <= 0 ) {
      return "negative";
    }
   else if (typeof (num1) != "number" || isNaN(num1) != "number"){
      return "num";
    }
    else {
      return true;
    }
  
    
}
// use id get data element funcation
function textElementValueByID(elementId){
  const textElementValue=document.getElementById(elementId);
  const textElementValueString=textElementValue.innerText;
  const textElement =parseFloat(textElementValueString);
  return textElement;
}

// card title  get function
function getTextTitleValueById(text){
    const titleValue =document.getElementById(text).innerText;
    return titleValue;

}
//multfacation funcation for input value calculation first two card

function multfacation(value1,value2){
  console.log(value1)
  const inputValue =inputFieldValuById(value1.value,value2.value);
  console.log(inputValue)
  if(inputValue =="requard"){
    
    return alert ('empty')
  }
  
  else if (inputValue =="negative"){
    return alert ('negative')
  }
  
  else if (inputValue =="num"){
    return alert ('isnumber')
  }
  console.log("no");
  
  const calculet = value1.value * value2.value;
  

  if (calculet %2==0){
    return calculet;
  }
  else{
    return calculet.toFixed(2);
  }
  
}
// multfacation funcation for text elemnent value calculation last foure card
function multfacationTextElemnt(value1,value2){
  const firstInputValue =textElementValueByID(value1);
  const secondInputValue =textElementValueByID(value2);
  const calculet = firstInputValue * secondInputValue;
  return calculet;
}
// use funcation createElement table
function displayData(name ,total) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `  
      <td>${serial} ${name}</td>
      <td>${total}cm<sup>2</sup></td>
      <td> 
      <button class="btn btn-info inline  text-white">Convert to m<sup>2</sup></button>
      </td>
    `;
    container.appendChild(tr);

  }
//   first card EventListener
document.getElementById('first-card').addEventListener('click', function(){
    serial += 1;
    const title= getTextTitleValueById('first-title');
    const result= 0.5 *  multfacation('firstCard-firstInput','firstCard-secondInput');
    displayData(title , result);
 
})

// second card EventListener
document.getElementById('second-card').addEventListener('click', function(){
  serial += 1;
  const title= getTextTitleValueById('second-title');
  let sfi =document.getElementById('secondCard-firstInput')
  let ssi= document.getElementById('secondCard-secondInput')
  const result= multfacation(sfi, ssi);

 displayData(title , result);

})
// third card EventListener
document.getElementById('third-card').addEventListener('click', function(){
  serial += 1;
  const title= getTextTitleValueById('third-title');
  const result= multfacationTextElemnt('thirdCard-firstValue','thirdCard-secondValue');

 displayData(title , result);

})
