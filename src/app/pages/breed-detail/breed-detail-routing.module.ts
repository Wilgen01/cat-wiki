import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedDetailComponent } from './breed-detail.component';

const routes: Routes = [
  { path: '', component: BreedDetailComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreedDetailRoutingModule { }
