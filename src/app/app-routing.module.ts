import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'most-searched', loadChildren: () =>
    import('./pages/most-searched/most-searched.module').then(m => m.MostSearchedModule)},
  { path: 'details/:breed_id', loadChildren: () =>
    import('./pages/breed-detail/breed-detail.module').then(m => m.BreedDetailModule)},
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
