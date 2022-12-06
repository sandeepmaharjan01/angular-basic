import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodicTableComponent } from './periodic-table.component';
import { DataGridComponent } from '../../components/data-grid/data-grid.component';
import { MaterialModule } from '../../material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { DataGridItemComponent } from '../../components/data-grid/data-grid-item/data-grid-item.component';


const routes: Routes = [
  {path: '', component: PeriodicTableComponent},
  {path: 'item-details/:id', component: DataGridItemComponent,},
  {}
];

@NgModule({
  declarations: [
    PeriodicTableComponent,
    DataGridComponent,
    DataGridItemComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PeriodicTableModule { }
