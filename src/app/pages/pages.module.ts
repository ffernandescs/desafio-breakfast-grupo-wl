import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CafesComponent } from './cafes/cafes.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    CafesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
