import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedDetailRoutingModule } from './breed-detail-routing.module';
import { BreedDetailComponent } from './breed-detail.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    BreedDetailComponent
  ],
  imports: [
    CommonModule,
    BreedDetailRoutingModule,
    SharedModule
  ]
})
export class BreedDetailModule { }
