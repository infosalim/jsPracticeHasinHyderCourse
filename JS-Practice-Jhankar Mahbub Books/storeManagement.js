class Store {
    constructor(name) {
        this.name = name;
        this.items = [];
        this.stock = {};
        this.prices = {};
        this.totalSales = 0;
    }
    isItemAvailable(name) {
        var itemIndex = this.items.indexOf(name);
        if (itemIndex == -1) {
            return false;
        } else {
            return true;
        }
    }

    getPrice(name) {
        var isAvailable = this.isItemAvailable(name);
        if (isAvailable == true) {
            var price = this.prices[name];
            return price;
        } else {
            console.log("Sorry, we don't have the item...");
        }
    }
    getTotalSales() {
        return this.totalSales;
    }
    sellItem(name, quantity) {
        var available = this.stock[name];
        if (available < quantity) {
            console.log("Sorry, we don't have enough...");
            return;
        } else {
            var itemPrice = this.getPrice(name);
            var currentSales = itemPrice * quantity;
            this.totalSales += currentSales;
            var remaining = available - quantity;
            this.stock[name] = remaining;
            console.log("Thank you for the purcase");
        }
    }
    addItem(name, quantity, price) {
        var isExisting = this.isItemAvailable(name);
        if (isExisting == true) {
            var available = this.stock[name];
            this.stock[name] = available + quantity;
        } else {
            this.items.push(name);
            this.prices[name] = price;
            this.stock[name] = quantity;
        }


    }





}

var rStore = new Store("Rasel Store");
rStore.addItem("Shirt", 50,560);
rStore.addItem("Pant", 100,350);
rStore.sellItem("Pant",4);
rStore.sellItem("Shirt",6);
var tsale = rStore.totalSales;
console.log(tsale);