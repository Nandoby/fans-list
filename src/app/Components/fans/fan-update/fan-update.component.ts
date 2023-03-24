import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fans } from 'src/app/models/fans';
import { formatDate } from '@angular/common';
import { FansService } from 'src/app/services/fans.service';

@Component({
  selector: 'app-fan-update',
  templateUrl: './fan-update.component.html',
  styleUrls: ['./fan-update.component.scss']
})
export class FanUpdateComponent implements OnInit {

  fan!: Fans
  fanList!: Fans[]
  fanIndex!: number
  fanFormUpdate!: FormGroup

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private fanService: FansService, private router: Router) {}

  ngOnInit() {

    this.fanList = this.fanService.getFans()


    this.fan = this.activatedRoute.snapshot.data['data']

    this.fanIndex = this.fanList.findIndex(f => f.firstname == this.fan.firstname)


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

  addSerie() {
    this.getSeries().push(
      this.formBuilder.group({
        serie_title: [null, Validators.required]
      })
    )
  }

  deleteSerie(index: number) {
    this.getSeries().removeAt(index)
  }

  onSubmit() {
    this.fan = {
      id: crypto.randomUUID(),
      ...this.fanFormUpdate.value
    }

    this.fanService.updateFan(this.fanIndex, this.fan)

    this.router.navigate(['/fans/fans-list'])



  }

}
