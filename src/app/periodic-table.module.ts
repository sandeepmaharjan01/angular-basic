import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodicTableComponent } from './forms/periodic-table/periodic-table.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { MaterialModule } from './material/material.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: PeriodicTableComponent}
];

@NgModule({
  declarations: [
    PeriodicTableComponent,
    DataGridComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PeriodicTableModule { }
