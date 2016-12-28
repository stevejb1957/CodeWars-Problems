function queueTime(customers, n) {
    var sum = 0;
    var Time = 0;
    var checkout = []
    if (n == 1) {
        var sum = customers.reduce((a, b) => a + b, 0);
        return sum;
    }
    else if (n >= customers.length) {
        var sum = Math.max(...customers)
        return sum;
    }
    for (x = 0; x < n; x++) {
        checkout.push(customers[x]);
        checkout.sort((a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            else return 0;
        })
    }
    for (x = 0; x < n; x++) {
        customers.shift()
    }
    while (customers.length > 0) {
        var finishedShopping = checkout.shift();
        Time = Time + finishedShopping;
        checkout = checkout.map(j => j - finishedShopping);
        checkout.push(customers[0]);
        checkout.sort((a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            else return 0;
        })
        customers.shift();
        if (customers.length == 0) {
            Time = Time + checkout[n - 1]
        }
    }
    return Time;
}
queueTime([8, 25, 23, 24, 50, 17, 37, 1, 10, 4, 44, 23, 9, 39, 1, 41, 39, 44, 40, 19, 30, 38, 49, 1, 41, 20, 22, 23], 3)
    // 246