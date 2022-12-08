import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

  isLoggedIn$$ = new BehaviorSubject<boolean>(false);
  constructor() {
    
   }

}
