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
document.write('Items:' + items +'<br>' +'Prices: ' + prices)
let total = prices.reduce(function(a,b){
  return a + b;
},0)
document.write('<br>' + 'Total Sales Recorded is '+ total)
  