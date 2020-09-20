import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes , RouterModule} from '@angular/router';
import {LandingComponent} from './landing.component';
import { NavbarComponent } from 'src/app/shareComponent/navbar/navbar.component';




@NgModule({
  declarations: [LandingComponent ],
  imports: [
    CommonModule,
    NavbarComponent
  ]
})
export class LandingModule { }
