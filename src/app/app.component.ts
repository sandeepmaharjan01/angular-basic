import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstapp';

  array = ['apple', 'pineapple'];
  constructor(){

  }

  updateFruits(newFruits: string){
    this.array.push(newFruits);
    console.log(this.array);
  }

}