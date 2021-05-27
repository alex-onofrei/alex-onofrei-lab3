// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		dairyFree: true,
		nutFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		dairyFree: true,
		nutFree: true,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		dairyFree: true,
		nutFree: true,
		organic: false,
		price: 10.19
	},
	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		dairyFree: false,
		nutFree: true,
		organic: false,
		price: 7.99
	},
	{
		name: "cheese",
		vegetarian: true,
		glutenFree: true,
		dairyFree: false,
		nutFree: true,
		organic: false,
		price: 3.99
	},
	{
		name: "beer",
		vegetarian: true,
		glutenFree: false,
		dairyFree: true,
		price: 12.99
	},
	{
		name: "cereals",
		vegetarian: true,
		glutenFree: false,
		dairyFree: true,
		price: 4.99
	},
	{
		name: "apples",
		vegetarian: true,
		glutenFree: true,
		dairyFree: true,
		nutFree: true,
		organic: true,
		price: 2.99
	},
	{
		name: "peanut butter",
		vegetarian: true,
		glutenFree: true,
		dairyFree: false,
		nutFree: false,
		organic: false,
		price: 5.89
	},
	{
		name: "nuts",
		vegetarian: true,
		glutenFree: true,
		dairyFree: true,
		nutFree: false,
		organic: true,
		price: 6.99
	},
	{
		name: "cheese cake",
		vegetarian: true,
		glutenFree: true,
		dairyFree: false,
		nutFree: true,
		organic: false,
		price: 14.99
	},
	{
		name: "kiwis",
		vegetarian: true,
		glutenFree: true,
		dairyFree: true,
		nutFree: true,
		organic: true,
		price: 5.49
	},
	{
		name: "fish",
		vegetarian: false,
		glutenFree: true,
		dairyFree: true,
		nutFree: true,
		organic: false,
		price: 18.49
	}
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_information = [];
	let product_price = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_information.push(prods[i]);
			product_information.sort((a,b) => (a.price > b.price) ? 1:-1);

		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_information.push(prods[i]);
			product_information.sort((a,b) => (a.price > b.price) ? 1:-1);
		}
		else if ((restriction == "DairyFree") && (prods[i].dairyFree == true)){
			product_information.push(prods[i]);
			product_information.sort((a,b) => (a.price > b.price) ? 1:-1);
		}
		else if ((restriction == "NutFree") && (prods[i].nutFree == true)){
			product_information.push(prods[i]);
			product_information.sort((a,b) => (a.price > b.price) ? 1:-1);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_information.push(prods[i]);
			product_information.sort((a,b) => (a.price > b.price) ? 1:-1);
		}
		else if (restriction == "None"){
			product_information.push(prods[i]);
			product_information.sort((a,b) => (a.price > b.price) ? 1:-1);
		}
	}
	return product_information;
}

function selectType (restriction){

	let type = "";

	if (restriction == "Vegetarian"){
		type = "images/vegetarian.jpg";

	}
	else if (restriction == "GlutenFree"){
		type = "images/glutenfree.jpg";
	}
	else if (restriction == "DairyFree"){
		type = "images/dairyfree.jpg";
	}
	else if (restriction == "NutFree"){
		type = "images/nutfree.jpg";
	}
	else if (restriction == "Organic"){
		type = "images/organic.jpg";
	}
	else if (restriction == "None"){
		type = "images/none.jpg";
	}

	return type;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
