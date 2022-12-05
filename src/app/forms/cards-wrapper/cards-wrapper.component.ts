import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-wrapper',
  templateUrl: './cards-wrapper.component.html',
  styleUrls: ['./cards-wrapper.component.css']
})
export class CardsWrapperComponent implements OnInit {

  cardsTitle: string[] = ['Maia', 'Dylan', 'Minoru', 'Amarachi', 'Ceallagh'];

  constructor() { }

  ngOnInit(): void {
  }

  addCard(title: string) {
    this.cardsTitle.push(title);
  }

}
