import { Injectable } from '@angular/core';
import {Fans} from "../models/fans";

@Injectable({
  providedIn: 'root'
})
export class FansService {

  private storage: any = localStorage.getItem("fanlist")
  private _fanslist: Fans[] = this.storage ? JSON.parse(this.storage) : []

  constructor() { }

  getFans(): Fans[] {
    localStorage.setItem("fanlist", JSON.stringify(this._fanslist))
    return [...this._fanslist]

  }

  addFan(fan: Fans) {
    this._fanslist = [...this._fanslist, fan]


  }

  getOne(id: string): Fans {
    return <Fans>this._fanslist.find(fan => fan.id == id)
  }

  updateFan(index: number, fan: Fans ) {
    this._fanslist[index] = fan
  }

}
