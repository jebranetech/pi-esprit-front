import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RideRescueComponent } from './ride-rescue.component';

const routes: Routes = [{ path: '', component: RideRescueComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RideRescueRoutingModule { }
