import { Object } from "./object"
export class User{
    korisnickoIme: string = '';
    lozinka: string = '';
    ime: string = '';
    prezime: string = '';
    tip: string = '';
    potroseno: number = 0;
    naStanju: number = 0;
    lista: Object[] = [];
}