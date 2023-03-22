import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FansComponent } from './Components/fans/fans.component';
import { AddFanComponent } from './Components/fans/add-fan/add-fan.component';
import { FansListComponent } from './Components/fans/fans-container/fans-list/fans-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FansDetailComponent } from './Components/fans/fans-container/fans-detail/fans-detail.component';
import { FansContainerComponent } from './Components/fans/fans-container/fans-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FansComponent,
    AddFanComponent,
    FansListComponent,
    FansDetailComponent,
    FansContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
