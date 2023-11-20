import {faker} from '@faker-js/faker';

export const red = 'red';

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.person.fullName()
        this.location = {
            lat: parseFloat(String(faker.location.latitude())),
            lng: parseFloat(String(faker.location.longitude()))
        }

    }
}
