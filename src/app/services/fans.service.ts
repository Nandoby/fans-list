import { Injectable } from '@angular/core';
import {Fans} from "../models/fans";

@Injectable({
  providedIn: 'root'
})
export class FansService {

  private _fanslist: Fans[] = [
    {
      id: crypto.randomUUID(),
      firstname: "Nando",
      birthdate: new Date("1991/09/13"),
      serie_array: [
        {
          serie_title: "Walking Dead"
        }
      ]
    }
  ]

  constructor() { }

  getFans(): Fans[] {
    return [...this._fanslist]
  }

  addFan(fan: Fans) {
    this._fanslist = [...this._fanslist, fan]
  }

}
