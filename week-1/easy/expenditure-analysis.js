/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    const categoryMap = {}; 

    //Iterate through each transaction
    transactions.forEach(transaction => {
        const { category, price } = transaction; 

        //If the category is not in the map, add it with the current transaction's price
        if(!categoryMap[category]){
            categoryMap[category] = price; 
        } else {
            //If the category is already in the map, add the current transaction's price to the existing total
            categoryMap[category] += price; 
        }
    }); 

    //convert the map to an array of objects
    const result = Object.keys(categoryMap).map(category => ({
        category, 
        totalSpent: categoryMap[category] 
    })); 
    return result; 
}
  
const transactions = [
    { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
    { id: 2, timestamp: 1656076800001, price: 20, category: 'Food', itemName: 'Burger' },
    { id: 3, timestamp: 1656076800002, price: 15, category: 'Electronics', itemName: 'Headphones' },
    { id: 4, timestamp: 1656076800003, price: 30, category: 'Clothing', itemName: 'T-Shirt' },
  ];
  
  console.log(calculateTotalSpentByCategory(transactions));
  