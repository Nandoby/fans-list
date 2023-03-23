import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Fans } from 'src/app/models/fans';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-fan-update',
  templateUrl: './fan-update.component.html',
  styleUrls: ['./fan-update.component.scss']
})
export class FanUpdateComponent implements OnInit {

  fan!: Fans

  fanFormUpdate!: FormGroup

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {}

  ngOnInit() {

    this.fan = this.activatedRoute.snapshot.data['data']

    this.fanFormUpdate = this.formBuilder.group({
      firstname: [this.fan.firstname, [Validators.required]],
      birthdate: [formatDate(this.fan.birthdate, 'yyyy-MM-dd', 'en'), [Validators.required]],
      serie_array: this.formBuilder.array(this.fan.serie_array.map(serie => this.formBuilder.group({
        serie_title: [serie.serie_title, Validators.required]
      })))
    })



  }

  getSeries() {
    return this.fanFormUpdate.get('serie_array') as FormArray
  }

  onSubmit() {
  }

}
