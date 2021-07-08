// We're going to start with some item costs
var bookCost: number = 10
var gameCost: number = 60
var movieCost: number = 20

// We're going to use the values above to make some 'Carts'
var cart1: number = 2 * bookCost + gameCost
var cart2: number = movieCost + bookCost
var cart3: number = 6 * gameCost + 4 * movieCost + 15 * bookCost

// We'll start by initializing the function

// You'll want to specify how each of the parameters will be formatted (More on this later)
function printSubtotal(total: number, taxRate: number) {
    // We'll copy in the console.log() from earlier, except we need to make some changes
    console.log(
        `*****\n
        Your Cart: 
            \n\t Total: ${total} 
            \n\t Tax (at %${taxRate.toFixed(4)}): ${(total * (taxRate/100)).toFixed(2)} 
            \n\t ----- 
            \n\t Subtotal: $${(total * (1 + (taxRate/100))).toFixed(2)}
        \n*****`
    )
}

printSubtotal(cart2, 9)
printSubtotal(cart3, 3.87)




// We're going to console.log the cart and the subtotal
// If you see a '\n', that means a new line
// If you see a '\t', that means it's tabbed over for spacing
// And the '*****'s and the '-----'s are just to make this more readable
// console.log(
//     `*****\n
//     Cart 1: 
//         \n\t Total: ${cart1} 
//         \n\t Tax (at 4.85%): ${cart1 * 0.0485} 
//         \n\t ----- 
//         \n\t Subtotal: $${cart1 * 1.0485}
//     \n*****`
// )