var prices = [];
let items =[];
let item;
let price;
while(item != ''){
  item = prompt('name of item')
  if(item != ''){
    price = parseInt(prompt('amount sold'));
    let  itm = items.push(item)
    let amount = prices.push(price)
  }else{
    alert ('end of record')
  }
}
console.log(items,prices)
let total = prices.reduce(function(a,b){
  return a + b;
},0)
console.log('Total Sales Recorded is '+ total)
  