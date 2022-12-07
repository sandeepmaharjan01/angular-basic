import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  isLoggedIn = false;

  constructor() { }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
  
  authenticate(): void {
    this.isLoggedIn = true;
    console.log(this.isLoggedIn);
  }

}
