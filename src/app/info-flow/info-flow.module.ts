import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoFlowRoutingModule } from './info-flow-routing.module';
import { InfoFlowComponent } from './info-flow.component';


@NgModule({
  declarations: [InfoFlowComponent],
  imports: [
    CommonModule,
    InfoFlowRoutingModule
  ]
})
export class InfoFlowModule { }
