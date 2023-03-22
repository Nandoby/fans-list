import {Component, Input} from '@angular/core';
import {Fans} from "../../../../models/fans";

@Component({
  selector: 'app-fans-detail',
  templateUrl: './fans-detail.component.html',
  styleUrls: ['./fans-detail.component.scss']
})
export class FansDetailComponent {
  @Input() fanSelected!: Fans
}
