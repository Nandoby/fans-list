import {Component, Input, OnInit} from '@angular/core';
import {Fans} from "../../../models/fans";
import {FansService} from "../../../services/fans.service";

@Component({
  selector: 'app-fans-container',
  templateUrl: './fans-container.component.html',
  styleUrls: ['./fans-container.component.scss']
})
export class FansContainerComponent implements OnInit {

  constructor(private _fanslist: FansService) {
  }

  fanslist!: Fans[]

  selectedFan!: Fans

  ngOnInit() {
    this.fanslist = this._fanslist.getFans()
    this.selectedFan = this.fanslist[0]
  }

  selectedFanFromList(id: string) {
    let index = this.fanslist.findIndex(fan => fan.id == id)
    this.selectedFan = this.fanslist[index]
  }



}
