export const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
const carsByMake = [['f150'], ['corolla'], ['camaro']];
// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();
// Prevent incompatible values
//  carMakers.push(100);
// Help with 'map'
carMakers.map((car: string): string => {
    return car.toUpperCase();

});
// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
//元组
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}
const pepsi: [string, boolean, number] = ['brown', true, 40];
//type alias
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 40];