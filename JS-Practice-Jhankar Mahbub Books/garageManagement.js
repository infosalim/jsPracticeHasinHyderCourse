class Garage {
    constructor() {
        this.vehicles = [];
        this.customers = {};
    }

    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
        var isExisting = this.customers[vehicle.owner];
        if (!isExisting) {
            this.customers[vehicle.owner] = 0;
        }
    }

    releaseVehicle() {
        var vehicle = this.vehicles.shift();
        var currentDue = this.customers[vehicle.owner];
        var totalDue = currentDue + vehicle.repairCost;;
        this.customers[vehicle.owner] = totalDue;
        console.log("released", vehicle);
        console.log("due from from onwer", totalDue);
    }
}

class Vehicle {
    constructor(ownwer, repairCost) {
        this.ownwer = ownwer;
        this.repairCost = repairCost;
    }
}

class Bus extends Vehicle {
    constructor(ownwer, repairCost, seats) {
        super(ownwer, repairCost);
        this.seats = seats;
    }
}

class Truck extends Vehicle {
    constructor(ownwer, repairCost, capacity) {
        super(ownwer, repairCost);
        this.capacity = capacity;
    }
}

var habluGarage;

function main() {
    habluGarage = new Garage();

    var khulna = new Bus("hanif", 10000, 50);
    habluGarage.addVehicle(khulna);

    var rangpur = new Truck("eagle", 8000, 5);
    habluGarage.addVehicle(rangpur);

}
main();