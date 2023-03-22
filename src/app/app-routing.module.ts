import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FansComponent} from "./Components/fans/fans.component";
import {AddFanComponent} from "./Components/fans/add-fan/add-fan.component";
import {FansListComponent} from "./Components/fans/fans-container/fans-list/fans-list.component";
import {FansContainerComponent} from "./Components/fans/fans-container/fans-container.component";

const routes: Routes = [
  {path:'', redirectTo:'fans/fans-list', pathMatch:'full'},
  {path: 'fans', component: FansComponent, children: [
      {path: 'fans-list', component: FansContainerComponent},
      {path: 'add-fan', component: AddFanComponent}
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
