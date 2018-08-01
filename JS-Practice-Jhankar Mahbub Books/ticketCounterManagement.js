
class BusCounter {
    constructor() {
        this.locations = [];
        this.seats = {};
        this.prices = {};
    }

    addDestination(dest) {
        this.locations.push(dest.location);
        this.seats[dest.location] = dest.seats;
        this.prices[dest.location] = dest.price;
    }

    isSeatAvailable(location) {
        var index = this.locations.indexOf(location);
        if (index == -1) {
            return false;
        }
        else {
            var available = this.seats[location];
            if (available > 0) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    buyTicket(location, money) {
        var available = this.isSeatAvailable(location);
        if (available) {
            var price = this.prices[location];
            if (money < price) {
                console.log("Give more money please");
            }
            else {
                this.seats[location] = this.seats[location] - 1;
                console.log("here is the ticket for", location);
                var returnAmount = money - price;
                console.log("you will get back", returnAmount);
            }
        }
    }
}


class Destination {
    constructor(location, seats, price) {
        this.location = location;
        this.seats = seats;
        this.price = price;
    }
}

var hanifPoribohon;
function main() {
    hanifPoribohon = new BusCounter();

    var khulna = new Destination("khulna", 50, 1200);
    hanifPoribohon.addDestination(khulna);

    var rangpur = new Destination("rangpur", 40, 1500);
    hanifPoribohon.addDestination(rangpur);

}
main();
