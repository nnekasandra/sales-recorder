/*function to add item*/
function addItem(){
  let tables = document.getElementById('table');
  let tableBody = document.createElement('tbody');
  let rowCount = tables.rows.length;
  let newRow = tables.insertRow(rowCount);
  let firstCell = newRow.insertCell(0);
  firstCell.innerHTML = rowCount++;
  let secondCell = newRow.insertCell(1);
  let secondCellElement = document.createElement('input');
  secondCellElement.type = 'text';
  secondCellElement.name = 'item-name';
  let thirdCell = newRow.insertCell(2);
  let thirdCellElement = document.createElement('input');
  thirdCellElement.type = 'number';
  thirdCellElement.name = 'price';
  tables.appendChild(tableBody);
  secondCell.appendChild(secondCellElement);
  thirdCell.appendChild(thirdCellElement);
}
addItem();

//function to calculate total price
function checkTotal(){
  let price = document.getElementsByName('price')
  let total = 0;
  for(let i = 0; i<price.length;i++){
    total += parseFloat(price[i].value);
  }
  alert ('you made a total sales of ' + total)
}