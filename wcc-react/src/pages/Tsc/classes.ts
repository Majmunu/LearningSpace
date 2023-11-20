export class Vehicle {
    constructor(public name?:string, public color?:string) {
        this.name = name;
        this.color = color;
    }
    drive() {
        console.log(`The ${this.color} ${this.name} is driving.`);
    }
    honk() {
        console.log(`The ${this.color} ${this.name} is honking.`);
    }
}
class Car extends Vehicle{

}
const vehicle = new Vehicle('car', 'red');
vehicle.drive();
vehicle.honk();
const car = new Car();
car.drive();
car.honk();
