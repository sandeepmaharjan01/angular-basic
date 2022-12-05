import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {

  @Input() tableData: any[] = [];
  @Input() columnHeader: {[key: string]: string | number;} = {};
  objectKeys = Object.keys;
  dataSource!: MatTableDataSource<any>;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.tableData);
  }
  
  constructor() { }

}
