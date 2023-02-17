// use id get data  input feild funcation 
let serial = 0;
function inputFieldValuById(inputId){
    
    const inputField = document.getElementById(inputId);
    const inputFieldString=inputField.value;
    const inputFieldValue =parseFloat(inputFieldString);
    return inputFieldValue;
}
// use id get data element funcation

// card title  get function
function getTextTitleValueById(text){
    const titleValue =document.getElementById(text).innerText;
    return titleValue;

}
//multfacation funcation
function multfacation(value1,value2){
  const firstInputValue =inputFieldValuById(value1);
  const secondInputValue =inputFieldValuById(value2);
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
  const result= multfacation('secondCard-firstInput','secondCard-secondInput');

 displayData(title , result);

})