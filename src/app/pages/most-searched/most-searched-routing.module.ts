import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostSearchedComponent } from './most-searched.component';

const routes: Routes = [
  { path: '', component: MostSearchedComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MostSearchedRoutingModule { }
