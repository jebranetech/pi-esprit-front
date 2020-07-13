import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkiteerComponent } from './parkiteer.component';

const routes: Routes = [{ path: '', component: ParkiteerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkiteerRoutingModule { }
