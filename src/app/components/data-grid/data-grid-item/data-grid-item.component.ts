import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDataGrid } from 'src/app/interfaces/IDataGrid.interface';

@Component({
  selector: 'app-data-grid-item',
  templateUrl: './data-grid-item.component.html',
  styleUrls: ['./data-grid-item.component.css']
})
export class DataGridItemComponent implements OnInit {

  id: number;
  data: IDataGrid;
  objectKeys = Object.keys;
  
  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
    }
   this.data = history.state?.data;
  }

}
