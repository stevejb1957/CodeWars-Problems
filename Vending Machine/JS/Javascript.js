function VendingMachine(coins) {
    this.coins = coins;
}

VendingMachine.prototype.checkingMax = function(checkMax, key, ans, coinQuantity){
        // remove coin ammounts from vending machine
    this.coins[key] = coinQuantity - (ans / key);
    var obj = {}
    obj[key] = ans/key
    return obj
    }
VendingMachine.prototype.vending = function (price, credit) {
    var prod = []
    var change = []
    var checkMax = {}
    //var coins = vm.coins;
    
    for (var key in credit) {
        var value = credit[key];
        prod.push(key * value); // creates array of products(denom * ammount) of coins put in
    }
    var sum = prod.reduce((a, b) => a + b, 0); // total sum of coins put in
    var ans = sum - price;
    if (ans < 0) {
        return credit; // if credit not enough return credit
    }
    for (var key in credit) {
        var check = this.coins.hasOwnProperty(key); // checking if credit has coins of same denom as coins.
        if (check == true) {
            var coinQuantity = this.coins[key]; // if true record coin quantity
            var creditQuantity = credit[key]; // if true record credit coin quantity 
            var coinSum = coinQuantity + creditQuantity; // sum the two values 
            this.coins[key] = coinSum; // update new quantity of coin demon 
        }
        else if (check == false) {
            this.coins[key] = credit[key];
        }
    }
    if (ans == 0) { // if credit is correct return empty 
        return {};
    }
    else if (ans > 0) { // if credit too much...
        for (var key in this.coins) {
            var coinQuantity = this.coins[key]; // quantity of coin denom
            if (key == ans && coinQuantity > 0) { // if there is coin denom of change required return coin and quantity 
                // remove coin amounts from vending machine
                this.coins[key] = coinQuantity - 1;
                var temp = {}
                temp[key] = 1
                return temp
                
            }
            else if (ans % key == 0 && coinQuantity >= ans / key) {
                // check max value coin
                checkMax[key] = ans / coinQuantity;
            }
        }
    }
    return this.checkingMax(checkMax, key, ans, coinQuantity);
    
}
var vm = new VendingMachine({
    1: 1
    , 2: 0
    , 4: 3
    , 6: 2
});
vm.vending(12, {
    1: 3
    , 4: 2
})
vm.vending(12, {
    1: 1
    , 5: 2
})
vm.vending(12, {
    4: 3
})
vm.vending(12, {
    6: 1
    , 2: 3
})
vm.vending(12, {
    6: 2
})
vm.vending(12, {
    6: 1
    , 4: 2
})
vm.vending(12, {
    6: 4
})
vm.vending(12, {
    6: 4
    , 3: 4
})
vm.vending(12, {
    4: 5
})
vm.vending(17, {
    4: 4
    , 2: 1
})
vm.vending(17, {
    4: 4
    , 2: 1
})