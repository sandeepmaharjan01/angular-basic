import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConfigService } from "../config/config.service";
import { IDataGrid } from "../interfaces/IDataGrid.interface";
import {retry, catchError} from 'rxjs/operators'
import { BehaviorSubject } from "rxjs";


@Injectable({providedIn :'root'})
export class PeriodicTableService {

  periodicElements$$$ = new BehaviorSubject<IDataGrid[]>([]);

  constructor(private readonly http: HttpClient,
              private readonly configService: ConfigService) {
  }

  addElement(element: IDataGrid): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.http.post('http://localhost:3000/periodicElement', element, {headers})
      .pipe(
        retry(3),
        catchError(e => this.configService.handleError(e))
      ).subscribe((el: IDataGrid) => {
        this.periodicElements$$$.value.push(el);
        this.periodicElements$$$.next(this.periodicElements$$$.value);
    });
  }

  updateElement(){
    
  }
}

