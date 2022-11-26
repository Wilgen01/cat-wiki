import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MostSearchedRoutingModule } from './most-searched-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MostSearchedComponent } from './most-searched.component';
import { MostSearchedListComponent } from './most-searched-list/most-searched-list.component';


@NgModule({
  declarations: [MostSearchedComponent, MostSearchedListComponent],
  imports: [
    CommonModule,
    MostSearchedRoutingModule,
    SharedModule
  ]
})
export class MostSearchedModule { }
