import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostSearchedComponent } from './most-searched.component';
import { MostSearchedListComponent } from './most-searched-list/most-searched-list.component';

const routes: Routes = [
  { path: '', component: MostSearchedComponent,
  children:[
    {
      path: '',
      component: MostSearchedListComponent
    }
  ]},
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MostSearchedRoutingModule { }
