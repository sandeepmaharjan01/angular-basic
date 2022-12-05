import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from 'src/app/interfaces/PeriodicElement.interface';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css']
})
export class PeriodicTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  columnHeader = {
    id: 'ID',
    element: 'Element',
    weight: 'Weight',
    symbol: 'Symbol'
  };

  periodicElements: PeriodicElement[] = [
    {id: 1, element: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {id: 2, element: 'Helium', weight: 4.0026, symbol: 'He'},
    {id: 3, element: 'Lithium', weight: 6.941, symbol: 'Li'},
    {id: 4, element: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {id: 5, element: 'Boron', weight: 10.811, symbol: 'B'},
    {id: 6, element: 'Carbon', weight: 12.0107, symbol: 'C'},
    {id: 7, element: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {id: 8, element: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {id: 9, element: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {id: 10, element: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

}
