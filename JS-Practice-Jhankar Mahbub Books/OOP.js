class Vehicle{
    constructor(driver, wheels){
        this.driver = driver;
        this.wheels = wheels;
    }
}

class Bus extends Vehicle{
    constructor(driver, wheels, seats){
        super(driver, wheels);
        this.seats = seats;
    }
}
var enaBus = new Bus("Rafiq",6,50);
console.log("The bus driver name is "+enaBus.driver+". It has "+enaBus.wheels+" wheels and "+enaBus.seats+" seats.");
console.log(enaBus);