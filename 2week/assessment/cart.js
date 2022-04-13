///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

const summedPrice = cart.reduce((a, c) => a + c.price, 0)
// console.log(summedPrice)



//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    let totalPrice = cartTotal * (tax + 1) - couponValue
    return totalPrice
}

// console.log(calcFinalPrice(100, 15, .1))



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    - first name (string)
    - last name (string)
    - phone number (number)
    - address (string)
    - city (string)
    - state (string)
    - zipcode (number)

    A restaraunt would use the first and last names to tell apart customers as well as have a system
    that prints the customer name on it to give it a more personalized touch. Have a phone number
    on file helps with being able to contact a customer about their order or for the potential situation
    of customers with the same names (I live with that constantly being named after my father). Having an
    address on file helps with deliveries if the restaraunt offers that.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

let cust1 = {
    fName: "John",
    lName: "Booth",
    phNum: 8018675309,
    address: "1600 Pennsylvania Ave",
    city: "Washington",
    state: "D.C.",
    zipcode: 20500
}

// console.log(cust1)