function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString)
        console.log(constructor)
    }

}

@Logger('Logging...')
export default class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
const person = new Person('Max')
console.log(232, person)