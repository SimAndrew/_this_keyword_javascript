var house={
    price: 100000,
    squareFeet: 2000,
    owner: 'Taylor',
    getPricePerSquareFoot: function() {
        return this.price / this.squareFeet;
    }
};

console.log(house.price);
console.log(house.getPricePerSquareFoot());


//this keyword refers to an object, that object which is executing the current bit of javascript code.
// In other words, every javascript function while executing has a reference to its current execution context, called this.
// Execution context means here is how the function is called.
