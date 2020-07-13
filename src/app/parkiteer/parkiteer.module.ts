import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkiteerRoutingModule } from './parkiteer-routing.module';
import { ParkiteerComponent } from './parkiteer.component';


@NgModule({
  declarations: [ParkiteerComponent],
  imports: [
    CommonModule,
    ParkiteerRoutingModule
  ]
})
export class ParkiteerModule { }
