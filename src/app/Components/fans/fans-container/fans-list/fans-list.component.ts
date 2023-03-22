import {Component, EventEmitter, Output} from '@angular/core';
import {Fans} from "../../../../models/fans";
import {FansService} from "../../../../services/fans.service";

@Component({
  selector: 'app-fans-list',
  templateUrl: './fans-list.component.html',
  styleUrls: ['./fans-list.component.scss']
})
export class FansListComponent {
  public fanslist!: Fans[]

  @Output() selectFan: EventEmitter<string> = new EventEmitter<string>()

  constructor(private _fans: FansService) {
  }

  ngOnInit() {
    this.fanslist = this._fans.getFans()
  }

  selectedFan(id: string) {
    this.selectFan.emit(id)
  }

}
