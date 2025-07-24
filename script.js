let web2Advance = {
    city: "Gloria",
    greet() {

        console.log(`Hello from ${this.city}`);

    }
}
web2Advance.greet();
console.log(web2Advance);



const car = {
    Brand: "Toyota",
    color: "blue",
    year: 2024,
    drive: function () {
        console.log("This car is driving");

    }
}


car.drive();
console.log(car.Brand)
console.log(car.color)
console.log(car.year)


class cars {
    constructor(brand, color, year) {
        this.brand = brand;
        this.color = color;
        this.year = year;
    }
    drive() {
        console.log(`${this.brand} is driving`);

    }
}


const Honda = new cars("Honda", "Red", 2021)
const Toyoto = new cars("Toyoto", "Green", 2020)
const Camry = new cars("Camry", "Green", 2022)
const Matrix = new cars("Matrix", "Brown", 2010)

Honda.drive();
Toyoto.drive();
Camry.drive();
Matrix.drive();


class fasterCar extends cars {
    constructor(brand, color, year, engine) {
        super(brand, color, year);
        this.engine = engine;
    }
    faster() {
        console.log(`${this.brand} is faster and ${this.engine}`);

    };
    speed() {
        console.log(`${this.brand} is speed`);

    }
}

const RaceCar = new fasterCar("Ferrari", "Gray", 2025, "V8")

RaceCar.drive();
RaceCar.faster();
RaceCar.speed();