const prompt = require('prompt-sync')()

//cambiar
const db = require('../models/conn');

class Item { 
    constructor (id,name,sku, inventory) {
  
   this.productId = id; 
   this.productName = name;
   this.sku = sku;
   this.price = price
   this.inventory = inventory; 
   this.decrease= options.decrease
    this.typeFrutas= function (){
        this.amount -= this.decrease
        if(this.amount < 0 ){
            console.log('no quedan frutas') 

}



function inventoryChange(itemid, qty, price) {
    // needs to remove/add inventory to specific item
    // cambiar a promt 
    let inputPrice= prompt(`cual es el precio del producto? ${price}`)
    let inputItemID= prompt(`This is itemid: ${itemid}`);
    return db.result(`
    UPDATE items
    SET inventory = inventory + ${qty}
    WHERE id=${itemid}
    `)
    
}

}


module.exports = Item;







// shows inventory from DB then runs the prompt function which starts a cascade of nested function calls
function showInventory() {
    connection.query('SELECT name, option, amount, price')
     function(err, row, fields){
      if(err) throw err;
      console.log('Frutas disponibles')
      for (let i=0; < row.legth; i++)
      console.log('Frutas ID: + rows[i].name +  ')
    }
    


//se puede colocar invetory change 


/*function FrutasItem(options) {
    let options = options
    this.name = options.name
    this.amount = options.amount 
    this.price = options.price
    this.decrease= options.decrease
    this.typeFrutas= function (){
        this.amount -= this.decrease
        if(this.amount < 0 ){
            console.log('no quedan frutas')
        }
    }
}


// shows inventory from DB then runs the prompt function which starts a cascade of nested function calls
function showInventory() {
    connection.query('SELECT name, option, amount, price' function(err, row, fields)){
      if(err) throw err;
      console.log('Frutas disponibles')
      for (let i=0; < row.legth; i++)
      console.log('Frutas ID: + rows[i].name +  ')
    }
    

*/


