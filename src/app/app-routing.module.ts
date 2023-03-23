import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FansComponent} from "./Components/fans/fans.component";
import {AddFanComponent} from "./Components/fans/add-fan/add-fan.component";
import {FansContainerComponent} from "./Components/fans/fans-container/fans-container.component";
import { FanUpdateComponent } from './Components/fans/fan-update/fan-update.component';
import { UpdateResolver } from './services/fans/update.resolver';

const routes: Routes = [
  {path:'', redirectTo:'fans/fans-list', pathMatch:'full'},
  {path: 'fans', component: FansComponent, children: [
      {path: 'fans-list', component: FansContainerComponent},
      {path: 'add-fan', component: AddFanComponent},
      {path: 'update-fan/:id', resolve: {data: UpdateResolver} , component: FanUpdateComponent}
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
