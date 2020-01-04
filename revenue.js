{
	"folders": [
		{
			"path": "."
		}
	]
}


const prompt = require('prompt-sync')()


/*Document Processes
If you have executive buy-in, now is a great time to start documenting your current processes—and how Salesforce can improve upon them. You can break this project into four steps.

Document your current sales process. Ask yourself—and a sales leader with that on-the-ground expertise—these questions.
What happens at each stage of our sales motion?

What are we coaching reps to do at various points in the sale?

Get a detailed look at what’s working and what’s not. At this stage, you want to determine:
What’s working well for everyone?

What works well for some reps but isn’t being replicated well across the board? Is it easy to replicate?
What manual processes can be automated?

At what points do sales reps have to use multiple systems to get their job done?
Work with the sales leaders to revise the sales process. A change in technology can be an excellent time to update and streamline your sales process. Focus on how Salesforce can help:
A

utomate manual processes.

Get rid of steps that aren’t necessary.
Make processes faster and easier.
Integrate data that sales reps need so it’s in one place.
*/


let Revenue = function revenue() {
   // required fields
  this._price = null;

  // optional fields
  this.productId = null;
  this.quantity = 1;
  this.revenueType = null;
  this.properties = null;
   
}

// va con promt despues 
Revenue.prototype = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99);
 * amplitude.logRevenueV2(revenue);



 let frutas= {};
 let priceId = Number(prompt (''));
 let productId =  prompt('');
 let revenueType = prompt ('');
 let properties = prompt('');

 let Revenue = new revenue (priceId,productId,revenueType,properties )

 // * Set a value for the revenueType (for example purchase, cost, tax, refund, etc).


 Revenue.prototype._toJSONObject = function _toJSONObject() {
   var obj = type(this.properties) === 'object' ? this._properties : {};
 
   if (this.productId !== null) {
     obj[constants.REVENUE_PRODUCT_ID] = this.productId;
   }
   if (this._quantity !== null) {
     obj[constants.REVENUE_QUANTITY] = this.quantity;
   }
   if (this._price !== null) {
     obj[constants.REVENUE_PRICE] = this.price;
   }
   if (this._revenueType !== null) {
     obj[constants.REVENUE_REVENUE_TYPE] = this.revenueType;
   }
   return obj;
 };
 
 export default Revenue;