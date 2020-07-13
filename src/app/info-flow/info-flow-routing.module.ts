import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoFlowComponent } from './info-flow.component';

const routes: Routes = [{ path: '', component: InfoFlowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoFlowRoutingModule { }
