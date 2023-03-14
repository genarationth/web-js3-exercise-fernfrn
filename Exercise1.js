// Ex 01
// transaction

// transaction fee 3% and interest fee 0.01%

const transaction = cost => {
    cost = cost + (cost * 0.03) + (cost * 0.001)
    return cost;
}

console.log(transaction(300));
