import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FansService} from "../../../services/fans.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-fan',
  templateUrl: './add-fan.component.html',
  styleUrls: ['./add-fan.component.scss']
})
export class AddFanComponent implements OnInit{

  constructor(private _fb: FormBuilder, private _fans: FansService, private _router: Router) {}

  fanForm!: FormGroup

  ngOnInit() {
    this.fanForm = this._fb.group({
      firstname: [''],
      birthdate: [''],
      serie_array: this._fb.array([])
    })
  }

  onSubmit() {
    const value = {
      id: crypto.randomUUID(),
      ...this.fanForm.value
    }
    console.log(value)
    this._fans.addFan(value)

    this._router.navigate(['/fans/fans-list'])

  }

  getSerieArray(): FormArray {
    return this.fanForm.get('serie_array') as FormArray
  }

  addSerie(): void {
    this.getSerieArray().push(
      this._fb.group({
        serie_title: [null, [Validators.required]]
      })
    )
  }

}
