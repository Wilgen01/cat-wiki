import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MostSearchedRoutingModule } from './most-searched-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MostSearchedComponent } from './most-searched.component';


@NgModule({
  declarations: [MostSearchedComponent],
  imports: [
    CommonModule,
    MostSearchedRoutingModule,
    SharedModule
  ]
})
export class MostSearchedModule { }
