 //const prompt = require('prompt-sync')()

/*let roi= function calRoi() {
    this.cost= null
    this.gains= null
    


let roiVal = roi(cost, gains);

let roiCalc = {
    'cost': '$' + cost,
    'gains': '$' + gains,
    'roi': roiVal
};

updateThis(roiCalc)

}

*/

/*function roi(cost, gains) {
  cost =(cost);
  gains = (gains);


  if(cost > 0 && gains > 0 )
   
   let profit, loss;
   profit= gains - cost;
   loss= frist /cost * 100;

   //let roiVal = (gains - cost) / gains;


   roiVal = roiVal * 100;
   
   return roiVal + '%';
    
} */



//let promptRoi= {};
//let cost = Number(prompt (''))
//let  gains = Number(prompt (''))

//let roi = new roi (cost, gains)


//roi.print()



/*
1. Calculate breakeven for your farm
2. Track sales and hedges as you make them/ 
Calculate field level profit/loss (P&L) based on 
your input expenses and rates- por productos e
j.papayas, vacas, otros productos 
3.Monitor profitability and position
*/



//***intento 2

function profit(cost, gains) { 
  profit = (gains - cost); 
return profit; 
} 


// Function to calculate loss. 

function loss(cost,gains) { 
leloss = (cost / gains *100); 
return loss; 
} 


///cambiar a js 
// Driver Code. 
let cost = 1500; 
let price = 2000; 
  
if (price == cost) 
    console.log ( "No ganacias, no perdidas")
  
else if ( price > cost) 
    console.log(`${cost} ,${price}  las ganancias son `)

  
else
console.log("perdidas ")
     




