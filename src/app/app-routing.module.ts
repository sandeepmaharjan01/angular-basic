import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{path: '', component: CardsWrapperComponent},
  {path: 'cards', loadChildren: () => import('./cards-wrapper.module').then(m => m.CardsWrapperModule)},
  {path: 'periodic-table', loadChildren: () => import('./periodic-table.module').then(m => m.PeriodicTableModule)},
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
