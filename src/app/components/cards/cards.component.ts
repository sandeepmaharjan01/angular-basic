import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {

  //Begin : Property Binding Examples
  default = "placeholder";
  btnDisabled = false;
  imgSrc = "https://phil.cdc.gov/PHIL_IMAGES/23311/23311_lores.jpg";
  //End : Property Binding Examples

  array = [{key: 'bird', img: 'bird_image_url_here'}] // use this arrray for task if needed

  constructor() { }

  ngOnInit(): void {
  }

  // Begin : local Reference & passing value to function
  onClick(phone: string){
    console.log(phone);
    this.imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYpUPzpFVGfKoeVxGtHQ5LxnlrE8uPiTzTOgPjbIzPA&s";
  }
   // end : local Reference & passing value to function

  //Begin: Two way binding Example with style binding
  px = 10;
  des(){
    this.px--;
  }
  inc(){
    this.px++;
  }
  //end: Two way binding Example with style binding
}
