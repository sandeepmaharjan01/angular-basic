import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  observable: Observable<number>;

  // subscription variable to hold observable subscription
  // this is needed to dispose/destroy subscription whenever we need
  subscription: Subscription;
  secondSub: Subscription;

  ngOnInit(): void {
    this.observable = new Observable(subscriber => {
      // emitting next value
      subscriber.next(101);
      // emitting value 5 after 5 seconds
      setTimeout(() => subscriber.next(5), 5000);
      subscriber.next(1);
      setTimeout(() => {
        // after 7 seconds emitting value 66
        subscriber.next(66);
        // after 7 seconds completing the observable meaning observable is done emitting the value
        subscriber.complete();
      }, 7000);


      setTimeout(() => {
        // after 6 seconds sending error
        // meaning the observable never gets to complete
        subscriber.error('an error occurred!!');
      }, 6000);
    });

    



    this.subscription = this.observable.pipe(
      map(v => v * 2),
      filter(v => v < 100)
    ).subscribe({
      next(val) {
        console.log(`next val is ${val}`);
      },
      error(err) {
        console.log(`something went wrong: ${err}`);
      },
      complete() {
        console.log('completed');
      }
    });


    setTimeout(() => {
      this.secondSub = this.observable.pipe().subscribe({
        next(val) {
          console.log(`from second sub next val is ${val}`);
        },
        error(err) {
          console.log(`from second sub something went wrong: ${err}`);
        },
        complete() {
          console.log('from second sub completed');
        }
      });
    }, 2000);
  }



  constructor(){  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.secondSub.unsubscribe();
  }

}