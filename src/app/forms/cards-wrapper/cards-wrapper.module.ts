import { NgModule } from '@angular/core';
import { CardsWrapperComponent } from './cards-wrapper.component';
import { CardsComponent } from '../../components/cards/cards.component';
import { MaterialModule } from '../../material/material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CardsWrapperComponent},
];

@NgModule({
  declarations: [
    CardsWrapperComponent,
    CardsComponent,
  ],
  imports: [
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [],
})
export class CardsWrapperModule { }
