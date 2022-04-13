/*This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.

The best function will be given an array of stock prices in the order they happened throughout the day.

It should return the maximum possible profit on the stock for that day.

For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:

best([15, 10, 20, 22, 1, 9])
12*/

const best = (dailyPrices) => {
    let profit = []
    for (let i = 0; i < dailyPrices.length; i++){
        for (let x = i + 1; x < dailyPrices.length; x++){
            if(dailyPrices[i] < dailyPrices[x]){
                profit.push(dailyPrices[x] - dailyPrices[i])
            }
        }
    }
    profit.sort((buy, sell) => buy - sell)
    return profit[profit.length - 1] !=undefined? profit[profit.length - 1]: 0
}

console.log(best([15, 10, 20, 22, 1, 9]))