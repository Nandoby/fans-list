import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Fans } from 'src/app/models/fans';
import { FansService } from '../fans.service';

@Injectable({
  providedIn: 'root'
})

export class UpdateResolver implements Resolve<any> {

  constructor(private _fanService: FansService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const id = route.params['id']
    return this._fanService.getOne(id)
  }
}
