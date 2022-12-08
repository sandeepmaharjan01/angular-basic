import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[]
})
export class HeaderComponent implements OnInit, OnDestroy {


  isLoggedIn: boolean;
  
  private subscription: Subscription;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription = this.authService.isLoggedIn$$.subscribe(val => this.isLoggedIn = val);
  }

  login(): void {
    this.authService.isLoggedIn$$.next(true);
   }
 
   logout(): void {
     this.authService.isLoggedIn$$.next(false);
   }

   ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
