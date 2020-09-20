import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentComponent } from './component/component.component';
import { LandingComponent } from './component/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentComponent,
  },
  {
    path: 'landing',
    component: LandingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
