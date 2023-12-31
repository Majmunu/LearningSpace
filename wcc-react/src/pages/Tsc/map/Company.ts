import {faker} from "@faker-js/faker";
export class Company {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };
    constructor() {
        this.name=faker.company.name()
        this.catchPhrase=faker.company.catchPhrase()
        this.location={
            lat:parseFloat(String(faker.location.latitude())),
            lng:parseFloat(String(faker.location.longitude()))
        }

    }
}