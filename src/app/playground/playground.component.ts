import { AfterViewInit, Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit, AfterViewInit {
  // local reference access through @viewChild()
  @ViewChild('user') txtUser! : ElementRef;
  ngAfterViewInit(): void {
    console.log(this.txtUser.nativeElement.value);
  }

  //Input & Output decorator 
  @Input('fruits') arrayFurits! : string[];
  @Output() updateFruitsArry$ = new EventEmitter<string>();
  update(){
    this.updateFruitsArry$.emit("grapes");
  }

  twoWaybinding = "placeholder";  //ngModule
  className = "container";  //ngClass
  active = true; // ngIF
  background = {'background-color' : 'green'}; //ngStyle
  maxLimit = [0,1,2,4];  // forEach
  constructor() { }


  ngOnInit(): void {
  }

}
