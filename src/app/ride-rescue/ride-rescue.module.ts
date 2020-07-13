import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RideRescueRoutingModule } from './ride-rescue-routing.module';
import { RideRescueComponent } from './ride-rescue.component';


@NgModule({
  declarations: [RideRescueComponent],
  imports: [
    CommonModule,
    RideRescueRoutingModule
  ]
})
export class RideRescueModule { }
