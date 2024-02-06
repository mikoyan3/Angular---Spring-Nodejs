import { pomNarudzbina } from "./pomNarudzbina"

export class User{
  ime: string = ""
  prezime: string = ""
  kor_ime: string = ""
  lozinka: string = ""
  mejl: string = ""
  tip: string = ""
  narudzbine: pomNarudzbina[] = []
}