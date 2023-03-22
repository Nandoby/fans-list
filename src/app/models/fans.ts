import {Serie} from "./serie";

export interface Fans {
  id: string
  firstname: string
  birthdate: Date
  serie_array: Serie[]
}
