import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsWrapperComponent } from './forms/cards-wrapper/cards-wrapper.component';
import { CardsComponent } from './components/cards/cards.component';
import { MaterialModule } from './material/material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CardsWrapperComponent}
];

@NgModule({
  declarations: [
    CardsWrapperComponent,
    CardsComponent
  ],
  imports: [
    // CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CardsWrapperModule { }
