import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    ccnum: string;
    exp: string;
    cvc: string;
    getId(): number | undefined;
}
