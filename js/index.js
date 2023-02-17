// use id get data  input feild funcation 
let serial = 0;
function inputFieldValuById(inputId){
    
    const inputField = document.getElementById(inputId);
    const inputFieldString=inputField.value;
    const inputFieldValue =parseFloat(inputFieldString);
    return inputFieldValue;
}
// card title  get function
function getTextTitleValueById(text){
    const titleValue =document.getElementById(text).innerText;
    return titleValue;

}
// use funcation createElement table
function displayData(name ,total) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `  
      <td>${serial} ${name}
      </td>
      <td>${total }</td>
      <td> 
      <button class="btn btn-info  text-white">Convert to m<sup>2</sup></button>
      </td>
    `;
    container.appendChild(tr);

  }
//   first card EventListener
document.getElementById('first-card').addEventListener('click', function(){
    serial += 1;
    const title= getTextTitleValueById('first-title');
    const firstInputValue =inputFieldValuById('firstCard-firstInput');
    const secondInputValue =inputFieldValuById('firstCard-secondInput');

    const calculet = 0.5 * firstInputValue * secondInputValue ;
   displayData(title , calculet);
 
})