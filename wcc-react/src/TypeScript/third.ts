import "reflect-metadata"
import {plainToInstance} from "class-transformer";
import {validate, IsNotEmpty, IsNumber, IsPositive} from "class-validator";

export default class Product {
    @IsNotEmpty()
    title: string;
    @IsNumber()
    @IsPositive()
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p
    }

    getInformation() {
        return [this.title, `${this.price}`]
    }
}
const products = [
    {title: 'A car', price: 999},
    {title: 'A house', price: 2999}
]
const newProd = new Product("", -5)
validate(newProd).then(error => {
    if (error.length > 0) {
        console.log("ERROR", error)
    } else {
        console.log(newProd.getInformation())
    }

})
// console.log(11, newProd.getInformation())
const loadProducts = plainToInstance(Product, products)
console.log(loadProducts)
const p1 = new Product('A book', 12.99)
console.log(p1)